import {STATIC_STATE_DATA} from './states-data';

import {DATA_FIELD_COLORS, CDC_AGE_GROUP_VALUES, CDC_FIELDS_FOR_CHART, 
    CHART_IDENTIFIER, CHART_META_DATA,DATA_FIELD_DISPLAY_NAMES} from './data-fields';

import {getFormattedDateForFiltering,formatISODate,shrinkAgeGroupName,
    formatDateListForChart, shrinkAgeGroupNameList} from './formatting';

export const getDeathsByAgeGroupSummary = (ageGroupData) => {

    var summary = [];

    ageGroupData.forEach(ageGroupRec => {

        const covid_19_deaths = !Number(ageGroupRec.covid_19_deaths) ? 0 : Number(ageGroupRec.covid_19_deaths);
        const total_deaths = !Number(ageGroupRec.total_deaths) ? 0 : Number(ageGroupRec.total_deaths);

        const ageGroupSum = summary.find(rec => rec.age_group === ageGroupRec.age_group);

        if (!ageGroupSum) {
            const age_group_sum = {
                age_group: ageGroupRec.age_group,
                sum_covid_19_deaths: covid_19_deaths,
                sum_total_deaths: total_deaths
            }
            summary.push(age_group_sum);
        }
        else {
            ageGroupSum.sum_covid_19_deaths += covid_19_deaths;
            ageGroupSum.sum_total_deaths += total_deaths;
        }
    });
            
    return summary;
}

export const getCDCHistoryDataBySelection = (cdcHistoryByJurisdiction, selectedState, selectedYear) => {

    const monthsSelected = selectedYear.search("months-");

    if (monthsSelected > -1) {
        const monthsBack = selectedYear.substr(monthsSelected+7, selectedYear.lenth); 
        const dateRange = getDateRangeValues(monthsBack);

        const startDate = Number(getFormattedDateForFiltering(dateRange.startDate));
        const endDate = Number(getFormattedDateForFiltering(dateRange.endDate));

        let dataSet = getCDCDataSetByDateRange(cdcHistoryByJurisdiction, selectedState, startDate, endDate);
        return dataSet; 
    }
    else {

        let dataSet = getCDCDataSetByYear(cdcHistoryByJurisdiction, selectedState, selectedYear);
        return dataSet;

    }
}

export const getCDCDataSetByYear = (cdcHistoryByJurisdiction, selectedState, selectedYear) =>{
    
    let dataSet = [];

    if(selectedYear === "0") {
        dataSet = cdcHistoryByJurisdiction
            .filter(stateData => stateData.state === selectedState);
    }
    else {
        dataSet = cdcHistoryByJurisdiction
            .filter(stateData => stateData.state === selectedState && stateData.date.substr(0,4) === selectedYear);  
    }

    return dataSet.sort(function (a, b) {
            return a.date - b.date;
        });
}

// The variables startDate and endDate are numerical format yyyymmdd
export const getCDCDataSetByDateRange = (cdcHistoryByJurisdiction, selectedState, startDate, endDate) =>{
    
    let dataSet = cdcHistoryByJurisdiction
        .filter(function (stateData) {
            const date = Number(stateData.date.substr(0,10).replaceAll('-',''));
            return stateData.state === selectedState 
                && date >= startDate 
                && date <= endDate;
        })
        .sort(function (a, b) {
            return a.date - b.date;
        });

    return dataSet;
}

export const getDateRangeValues = (monthsBack) => {
    
    const startDate = new Date(new Date());
    const endDate = new Date(new Date());

    startDate.setMonth(startDate.getMonth() - monthsBack);
    startDate.setDate(1);

    return {startDate: formatISODate(startDate), endDate: formatISODate(endDate)} 
}


export const getChartObjectByChartId = (chartId, cdcDataSet, selectedState, selectedYear) => {

    let filteredData = null;
    let chartObject = null;

    // Get data filtered by selection
    if (chartId === CHART_IDENTIFIER.AGE_GROUP_SUMMARY || chartId===CHART_IDENTIFIER.DEATHS_BY_AGE) {
        
        // This data set uses state name instead of the 2-digit code.
        const state = STATIC_STATE_DATA.find(rec => rec.state === selectedState);
        filteredData = getCDCHistoryDataBySelection(cdcDataSet, state.name, selectedYear);
    }
    else {
        filteredData = getCDCHistoryDataBySelection(cdcDataSet, selectedState, selectedYear);
    }

    // Get chartObject based on type of data
    if (chartId === CHART_IDENTIFIER.AGE_GROUP_SUMMARY) {
        chartObject = getChartObjectForAgeGroupSummary(chartId, filteredData);
        chartObject.isDataAvailable = filteredData.length > 0;
    }
    else if (CHART_META_DATA[chartId].isGroupedByAge) {
        chartObject = getChartObjectForDataGroupedByAge(chartId, filteredData);
        chartObject.isDataAvailable = isDataAvailableByAgeGroup(chartObject.chartDataSet)
    }
    else {
        chartObject = getChartObjectForData(chartId, filteredData);
        chartObject.isDataAvailable = filteredData.length > 0;
        
    }
   
    //console.log("chartid=" + chartId);
     
    if (chartId !== CHART_IDENTIFIER.AGE_GROUP_SUMMARY) {
        chartObject.dateFormatForXAxis = isDateRangeMoreThanOneMonth(chartObject.chartLabels) ? "month" : "week";
    }
    return chartObject;

}

const isDataAvailableByAgeGroup =(chartDataSet) => {

    let dataHasValues = false;

    chartDataSet.forEach(ageGroupRec => {

        const data = ageGroupRec.data;
        data.forEach((rec) => {
            if (!dataHasValues && Number(rec) !== 0)
                dataHasValues = true;
        });
        
    });
    
    return dataHasValues;

}

const isDateRangeMoreThanOneMonth = (chartLabels) => {

    let monthsInData = 0;

    // Array of 12 zeros to keep count of months in data
    const monthCount = [0,0,0,0,0,0,0,0,0,0,0,0]

    chartLabels.forEach(date => {
        const month = date.getMonth();
        monthCount[month] += 1;
    });

    monthCount.forEach (monthCountRec => {
        if (monthCountRec > 0)
            monthsInData += 1;
    })

    return monthsInData > 1;
    
}

/**
 * Generates a chartObject SPECIFICALLY for a bar chart for data grouped by age. 
 * This chartObject is different from the time series line chart.
 * Expects data to be grouped by date, age group for example
 * 
 * date         age_group   field1  field2 
 * 1/1/2022     0-17        55      33
 * 1/1/2022     18-24       55      33
 * 1/1/2022     25-34       55      33
 * 1/1/2022     35-44       55      33
 * 
 * Sample cdc data with miltiple fields 
 * [{date: '2020-01-01T00:00:00.000', state: 'Alabama', age_group: '0-17 years', covid_19_deaths: '0', total_deaths: '71}
 * {date: '2020-01-01T00:00:00.000',  state: 'Alabama', age_group: '18-29 years', covid_19_deaths: '0', total_deaths: '71}
 * {date: '2020-01-01T00:00:00.000',  state: 'Alabama', age_group: '30-39 years', covid_19_deaths: '0', total_deaths: '71}
 * {date: '2020-01-01T00:00:00.000',  state: 'Alabama', age_group: '40-49 years', covid_19_deaths: '0', total_deaths: '71}]
 */
const getChartObjectForAgeGroupSummary = (chartId, filteredData) => {
    const dataSet = getDeathsByAgeGroupSummary(filteredData);
    const covid19Deaths = dataSet.map(item => item.sum_covid_19_deaths == null ? 0 : item.sum_covid_19_deaths);
    const totalDeaths = dataSet.map(item => item.sum_total_deaths == null ? 0 : item.sum_total_deaths);

    const ageGroupsInData = shrinkAgeGroupNameList(CDC_AGE_GROUP_VALUES[chartId]);
    
    const chartDataSet  = [
        {    
            label: "Covid-19",
            backgroundColor: "red",
            data:covid19Deaths 
        },
        { 
            label: "All Deaths",
            backgroundColor: "blue",
            data:totalDeaths
        }
    ];

    const chartObject = {
        chartId: chartId,
        chartDataSet: chartDataSet,
        chartLabels: ageGroupsInData,
    }

    return chartObject;
}


/**
 * Generates a chartObject set for a timeseries line chart for data grouped by age. 
 * Expects data to be grouped by date, age group for example
 * 
 * date         age_group   field1  field2 
 * 1/1/2022     0-17        55      33
 * 1/1/2022     18-24       55      33
 * 1/1/2022     25-34       55      33
 * 1/1/2022     35-44       55      33
 * 
 * Sample cdc data with miltiple fields 
 * [{date: '2020-01-01T00:00:00.000', state: 'Alabama', age_group: '0-17 years', covid_19_deaths: '0', total_deaths: '71}
 * {date: '2020-01-01T00:00:00.000',  state: 'Alabama', age_group: '18-29 years', covid_19_deaths: '0', total_deaths: '71}
 * {date: '2020-01-01T00:00:00.000',  state: 'Alabama', age_group: '30-39 years', covid_19_deaths: '0', total_deaths: '71}
 * {date: '2020-01-01T00:00:00.000',  state: 'Alabama', age_group: '40-49 years', covid_19_deaths: '0', total_deaths: '71}]
 * 
 */
const getChartObjectForDataGroupedByAge = (chartId, filteredData) => {

    const chartDataSet = [];
    
    //To group by Age Groups, we get a predefined list for this data set
    const ageGroupsInData = CDC_AGE_GROUP_VALUES[chartId];

    //For data grouped by age, you can only use 1 field per age group. 
    const fieldName = CDC_FIELDS_FOR_CHART[chartId][0];
    
    // Loop through all the predefined age groups
    ageGroupsInData.forEach((ageGroupId, index) => {

        // Filter data per specified age group to get 1 record per date
        const ageGroupData = filteredData.filter(rec => rec.age_group === ageGroupId)

        // Create array of the data of the field
        const dataValues = ageGroupData.map(item => !item[fieldName] ? 0 : item[fieldName]);
        const labelText = shrinkAgeGroupName(ageGroupId);
        const dataTotal = dataValues.reduce((a, b) => Number(a) + Number(b), 0);

        const chartRec = {
            fieldName: fieldName,
            label: labelText,
            backgroundColor: DATA_FIELD_COLORS[index],
            borderColor: DATA_FIELD_COLORS[index],
            borderWidth: 1.5,
            fill: false,
            dataTotal: dataTotal,
            data: dataValues
        };

        chartDataSet.push(chartRec);
    });

    // Get Date List identified in this dataset
    const chartDateList = filteredData.map(item => item.date.substr(0,10));

    const chartObject = {
        chartId: chartId,
        chartDataSet: chartDataSet,
        chartLabels: formatDateListForChart(chartDateList)
    }

    return chartObject
}

/**
 * Generates a chartObject set for a timeseries line chart for data by date.
 * 
 * Sample cdc data with miltiple fields 
 * [{date: '2021-11-18T00:00:00.000', state: 'OH', new_case: '6615.0', new_death: '0.0'}
 * {date: '2021-11-18T00:00:00.000', state: 'OK', new_case: '970.0', new_death: '0.0'}
 * {date: '2021-11-18T00:00:00.000', state: 'OR', new_case: '1148.0', new_death: '13.0'}
 * {date: '2021-11-18T00:00:00.000', state: 'PA', new_case: '6637.0', new_death: '96.0'}]
 * 
 */
const getChartObjectForData = (chartId, filteredData) => {

    const chartDataSet = [];

    const fieldNames = CDC_FIELDS_FOR_CHART[chartId];
    
    // Initialize the datasets for each field.
    fieldNames.forEach ((fieldName, index) => {
        chartDataSet.push({
            fieldName: fieldName, 
            label: DATA_FIELD_DISPLAY_NAMES[fieldName],
            fill: false,
            backgroundColor: DATA_FIELD_COLORS[index],
            borderColor: DATA_FIELD_COLORS[index],
            borderWidth: 1.5,
            dataTotal: 0,
            data: []
            
        })
    })

    filteredData.forEach(row => {
        fieldNames.forEach (fieldName => {
            const fieldData = chartDataSet.find((data => data.fieldName === fieldName))    
            const data = !row[fieldName] ? 0 : row[fieldName];
            fieldData.dataTotal += Number(data);
            fieldData.data.push(data);
        })
    });

    // Get Date List identified in this dataset
    const chartDateList = filteredData.map(item => item.date.substr(0,10));

    const chartObject = {
        chartId: chartId,
        chartDataSet: chartDataSet,
        chartLabels: formatDateListForChart(chartDateList)
    }

    return chartObject
}

