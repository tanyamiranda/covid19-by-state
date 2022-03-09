import {DATA_FIELD_COLORS,  
    CDC_AGE_GROUP_VALUES,
    CDC_FIELDS_FOR_CHART,
    CHART_IDENTIFIER,
    DATA_FIELD_DISPLAY_NAMES,
    NYC_IDENTIFIER
} from './data-fields';
import {getDataSource} from './data-sources';
import {getFormattedDateForFiltering,formatISODate,shrinkAgeGroupName,formatDateListForChart, shrinkAgeGroupNameList} from './formatting';
import {STATIC_STATE_DATA} from './states-data';
import {getTimeSeriesChartOptions, CHART_OPTIONS_FOR_AGE_GROUPS} from './chart-options';

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

export const getChartObjectForDeathsByAgeGroup = (chartConfig) => {

    const chartId = CHART_IDENTIFIER.DEATHS_BY_AGE;
    const chartTitle = "Deaths By Age Group";

    // This data set uses state name instead of the 2-digit code.
    const state = STATIC_STATE_DATA.find(rec => rec.state === chartConfig.selectedState);
    const filteredData = getCDCHistoryDataBySelection(chartConfig.cdcDeathsByAgeGroup, state.name, chartConfig.selectedYear);
    
    const chartObject = getChartObjectForDataGroupedByAge(chartId, filteredData);

    chartObject.type = "line";
    chartObject.chartTitle = chartTitle;
    chartObject.chartOptions = getTimeSeriesChartOptions(true, false);
    chartObject.dataSource = getDataSource(chartId);
    chartObject.isDataAvailable = filteredData.length > 0;
    
    return chartObject;

}


export const getChartObjectForVaxFirstByAgeGroup = (chartConfig) => {

    const chartId = CHART_IDENTIFIER.VAX_FIRST_DOSE;
    const chartTitle = "Percent Vaxed - First Dose";

    const filteredData = getCDCHistoryDataBySelection(chartConfig.cdcVaxByAgeGroup, chartConfig.selectedState, chartConfig.selectedYear);
    const chartObject = getChartObjectForDataGroupedByAge(chartId, filteredData);
       
    chartObject.type = "line";
    chartObject.chartTitle = chartTitle;
    chartObject.chartOptions = getTimeSeriesChartOptions(false, true);
    chartObject.dataSource = getDataSource(chartId);
    chartObject.isDataAvailable = filteredData.length > 0;

    return chartObject;

}

export const getChartObjectForVaxCompleteByAgeGroup = (chartConfig) => {

    const chartId = CHART_IDENTIFIER.VAX_COMPLETE_DOSE;
    const chartTitle = "Percent Vaxed - Completed Dose";

    const filteredData = getCDCHistoryDataBySelection(chartConfig.cdcVaxByAgeGroup, chartConfig.selectedState, chartConfig.selectedYear);
    const chartObject = getChartObjectForDataGroupedByAge(chartId, filteredData);

    chartObject.type = "line";
    chartObject.chartTitle = chartTitle;
    chartObject.chartOptions = getTimeSeriesChartOptions(false, true);
    chartObject.dataSource = getDataSource(chartId);
    chartObject.isDataAvailable = filteredData.length > 0;
    
    return chartObject;

}

export const getChartObjectForExcessDeathsAgeGroup = (chartConfig) => {

    const chartId = CHART_IDENTIFIER.EXCESS_DEATHS;
    const chartTitle = "Excess Deaths By Age Group - Weighted";

    const filteredData = getCDCHistoryDataBySelection(chartConfig.cdcExcessDeathsByAgeGroup, chartConfig.selectedState, chartConfig.selectedYear);
    const chartObject = getChartObjectForDataGroupedByAge(chartId, filteredData);

    chartObject.type = "line";
    chartObject.chartTitle = chartTitle;
    chartObject.chartOptions = getTimeSeriesChartOptions();
    chartObject.dataSource = getDataSource(chartId);
    chartObject.isDataAvailable = filteredData.length > 0;

    return chartObject;
}

export const getChartObjectForExcessDeathsAgeGroupPercentage = (chartConfig) => {

    const chartId = CHART_IDENTIFIER.EXCESS_DEATHS_PCT;
    const chartTitle = "Percent Excess Deaths - Weighted";

    const filteredData = getCDCHistoryDataBySelection(chartConfig.cdcExcessDeathsByAgeGroup, chartConfig.selectedState, chartConfig.selectedYear);
    const chartObject = getChartObjectForDataGroupedByAge(chartId, filteredData);

    chartObject.type = "line";
    chartObject.chartTitle = chartTitle;
    chartObject.chartOptions = getTimeSeriesChartOptions(false, true, true);
    chartObject.dataSource = getDataSource(chartId);
    chartObject.isDataAvailable = filteredData.length > 0;

    return chartObject;

}

export const getChartObjectForDeathsAndCases = (chartConfig) => {

    const chartId = CHART_IDENTIFIER.CASES_DEATHS;
    const chartTitle = "New Cases & Deaths";

    const filteredData = getCDCHistoryDataBySelection(chartConfig.cdcHistoryByJurisdiction, chartConfig.selectedState, chartConfig.selectedYear);
    const chartObject = getChartObjectForData(chartId, filteredData);

    chartObject.type = "line";
    chartObject.chartTitle = chartTitle;
    chartObject.chartOptions = getTimeSeriesChartOptions();
    chartObject.dataSource = getDataSource(chartId);
    chartObject.isDataAvailable = filteredData.length > 0;

    return chartObject;

}

export const getChartObjectForHospitalData = (chartConfig) => {

    const chartId = CHART_IDENTIFIER.HOSPITAL_DATA;
    const chartTitle = "New Hospital Inpatient & ICU";

    const filteredData = getCDCHistoryDataBySelection(chartConfig.cdcHospitalDataByJurisdiction, chartConfig.selectedState, chartConfig.selectedYear);
    const chartObject = getChartObjectForData(chartId, filteredData);

    // NYC gets its hospital data from a different source.
    const dataSourceId = chartConfig.selectedState === NYC_IDENTIFIER ? NYC_IDENTIFIER : chartId;

    chartObject.type = "line"; 
    chartObject.chartTitle = chartTitle;
    chartObject.chartOptions = getTimeSeriesChartOptions();
    chartObject.dataSource = getDataSource(dataSourceId);
    chartObject.isDataAvailable = filteredData.length > 0;

    return chartObject;
}


export const getChartObjectDeathsByAgeGroupSummary = (chartConfig) => {

    const chartId = CHART_IDENTIFIER.AGE_GROUP_SUMMARY;
    const chartTitle = "Deaths by Age Group 2";

    // This data set uses state name instead of the 2-digit code.
    const state = STATIC_STATE_DATA.find(rec => rec.state === chartConfig.selectedState);
    const filteredData = getCDCHistoryDataBySelection(chartConfig.cdcDeathsByAgeGroup, state.name, chartConfig.selectedYear);

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
        type: "bar",
        chartId: chartId,
        chartDataSet: chartDataSet,
        chartLabels: ageGroupsInData,
        chartTitle: chartTitle,
        chartOptions: CHART_OPTIONS_FOR_AGE_GROUPS,
        dataSource: getDataSource(chartId),
        isDataAvailable: filteredData.length > 0
    }

    return chartObject;
}

/**
 * Generates a chartObject set for a timeseries chart for data grouped by age. 
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
        const dataTotal = dataValues.reduce((a, b) => a + b, 0);

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
 * Generates a chartObject set for a timeseries chart for data by date.
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

