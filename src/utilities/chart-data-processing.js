import {DATA_FIELD_COLORS, DATA_FIELD_DISPLAY_NAMES} from './data-fields';
import {STATE_INFO} from './states-meta-data';
import {getFormattedDateForFiltering} from './formatting';

export const getAgeGroupDataForState = (deathsByAgeGroups, selectedState, selectedYear) => {

    const stateName = STATE_INFO[selectedState].name;
    let ageGroupData = getCDCAgeGroupDataBySelection(deathsByAgeGroups, stateName, selectedYear);

    /** CDC collects NYC separately from NY State. We are grouping them back into one number under NY state. **/
    if(selectedState === "NY") 
        ageGroupData = ageGroupData.concat(getCDCAgeGroupDataBySelection(deathsByAgeGroups,"New York City",selectedYear));

    return ageGroupData;
}

export const getAgeGroupDataOverTime = (deathsByAgeGroups, selectedState, selectedYear) => {

    const ageGroupData = getAgeGroupDataForState(deathsByAgeGroups, selectedState, selectedYear);

    let newGroupData = [];

    ageGroupData.forEach((ageGroupDataRec) => {

        const date = (new Date(ageGroupDataRec.month + "/01/" + ageGroupDataRec.year)).toISOString().replace('Z', '').replace('T', '');
        const ageGroup = "ages_" + formatAgeGroupName(ageGroupDataRec.age_group).replaceAll("-","_").replaceAll("+","").trim();
        const deaths = Number(ageGroupDataRec.sum_covid_19_deaths);
 
        //console.log("date=" + date + " | ageGroup=" + ageGroup + " | deaths=" + deaths);

        let dateRecord = newGroupData.find(rec => rec.date === date);

        if(!dateRecord) {
            dateRecord = {
                date: date,
                ages_0_17: ageGroup === "ages_0_17" ? deaths : 0,
                ages_18_29:ageGroup === "ages_18_29" ? deaths : 0,
                ages_30_39:ageGroup === "ages_30_39" ? deaths : 0,
                ages_40_49:ageGroup === "ages_40_49" ? deaths : 0,
                ages_50_64:ageGroup === "ages_50_64" ? deaths : 0,
                ages_65_74:ageGroup === "ages_65_74" ? deaths : 0,
                ages_75_84:ageGroup === "ages_75_84" ? deaths : 0,
                ages_85:ageGroup === "ages_85" ? deaths : 0
            }
            
            newGroupData.push(dateRecord);
        }
        else {
            dateRecord[ageGroup] = deaths; 
        }      

    });

    //console.log("newGroupData=" + JSON.stringify(newGroupData));
    
    return newGroupData;
}

export const combineAgeGroupValues = (ageGroupData) => {

    var result = [];
    ageGroupData.reduce(
        function(age_group_sum, value) {
            if (!age_group_sum[value.age_group]) {
                age_group_sum[value.age_group] = {
                    age_group: value.age_group,
                    sum_covid_19_deaths: !Number(value.sum_covid_19_deaths) ? 0 : Number(value.sum_covid_19_deaths),
                    sum_total_deaths: !Number(value.sum_total_deaths) ? 0 : Number(value.sum_total_deaths)
                };
                result.push(age_group_sum[value.age_group])
            }
            else {
                age_group_sum[value.age_group].sum_covid_19_deaths += !Number(value.sum_covid_19_deaths) ? 0 : Number(value.sum_covid_19_deaths);
                age_group_sum[value.age_group].sum_total_deaths += !Number(value.sum_total_deaths) ? 0 : Number(value.sum_total_deaths);
            }
            return age_group_sum;
        }
    , {});

    return result;

}

export const getCDCDataBySelection = (cdcHistoryByJurisdiction, selectedState, selectedYear) => {

    const monthsSelected = selectedYear.search("months-");

    if (monthsSelected > -1) {
        const monthsBack = selectedYear.substr(monthsSelected+7, selectedYear.lenth); 
        const dateRange = getDateRangeValues(monthsBack);
        return getCDCDataSetByDateRange(cdcHistoryByJurisdiction, selectedState, Number(getFormattedDateForFiltering(dateRange.startDate)), Number(getFormattedDateForFiltering(dateRange.endDate)))
    }
    else
        return getCDCDataSetByYear(cdcHistoryByJurisdiction, selectedState, selectedYear);
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

export const getCDCAgeGroupDataByDateRange = (deathsByAgeGroups, stateName, dateRange) => {
    
    //console.log("dateRange.startDate = " + dateRange.startDate + " | dateRange.endDate = " + dateRange.endDate);

    let temp = deathsByAgeGroups
    .filter(function (stateData) {
        const year = stateData.year;
        const month = stateData.month;
        const calcDate = new Date(month + "/1/" + year);
        
        return stateData.state.toLowerCase() === stateName.toLowerCase() 
            && calcDate >= dateRange.startDate 
            && calcDate <= dateRange.endDate;
    });

    return temp;
}

export const getCDCAgeGroupDataBySelection = (deathsByAgeGroups, stateName, selectedYear) => {
    
    let ageGroupDataSet = [];
    const monthsSelected = selectedYear.search("months-");
    
    if (monthsSelected > -1) {
        // Add a month to include current month since data is based monthly
        const monthsBack = Number(selectedYear.substr(monthsSelected+7, selectedYear.lenth)) + 1;         
        const dateRange = getDateRangeValues(monthsBack)
        ageGroupDataSet = getCDCAgeGroupDataByDateRange(deathsByAgeGroups, stateName, dateRange)
    }
    else { 
        if (selectedYear === "0"){
            ageGroupDataSet = deathsByAgeGroups
                .filter(data => data.state.toLowerCase() === stateName.toLowerCase())   
        }
        else {
            const startDate = new Date("1/1/" + selectedYear);
            const endDate = new Date("12/31/" + selectedYear);
            const dateRange = {startDate: startDate, endDate: endDate}
            ageGroupDataSet = getCDCAgeGroupDataByDateRange(deathsByAgeGroups, stateName, dateRange)
        }
    }

    ageGroupDataSet.sort((a,b) => compareAgeGroupValues(a.age_group,b.age_group));

    return ageGroupDataSet;
}    

export const getDateRangeValues = (monthsBack) => {
    
    const startDate = new Date();
    const endDate = new Date();

    startDate.setMonth(startDate.getMonth() - monthsBack);
    startDate.setDate(1);

    return {startDate: startDate, endDate: endDate} 
}

export const getAgeGroupForState = (deathsByAgeGroups, stateName, selectedYear) => {
    
    let ageGroupDataSet = [];

    if (selectedYear === "0"){
        const temp = deathsByAgeGroups
        .filter(data => data.state.toLowerCase() === stateName.toLowerCase())   
        ageGroupDataSet = combineAgeGroupValues(temp);    
    }
    else {
        ageGroupDataSet = deathsByAgeGroups
        .filter(data => data.state.toLowerCase() === stateName.toLowerCase() && data.year === selectedYear)    
    }

    return ageGroupDataSet.sort((a,b) => compareAgeGroupValues(a.age_group,b.age_group));
}    

export const formatAgeGroupName = (ageGroupName) => {
    
    const newGroupName = ageGroupName.replace("years and over","+").replace("years","").replace("year","").replace("Under","<"); 

    return newGroupName;
}

export const formatAgeGroupNames = (ageGroups) => {
    const shortNames = [];

    ageGroups.forEach(group => {
        const groupName = formatAgeGroupName(group); 
        shortNames.push(groupName);
    });

    return shortNames;
}

const compareAgeGroupValues = (a, b) => {

    let numA = Number(a.substring(0,2).replace("-","").toLowerCase().replace("un","0"));
    let numB = Number(b.substring(0,2).replace("-","").toLowerCase().replace("un","0"));

    if (numA > numB) return 1;
    if (numA < numB) return -1;

    return 0;
}

export const getChartDataset = (data, fieldNames) => {

    const fieldDatasets = [];

    // Initialize the datasets for each field.
    fieldNames.forEach ((fieldName, index) => {
        fieldDatasets.push({
            fieldName: fieldName, 
            label: DATA_FIELD_DISPLAY_NAMES[fieldName],
            fill: false,
            backgroundColor: DATA_FIELD_COLORS[index],
            borderColor: DATA_FIELD_COLORS[index],
            borderWidth: 1.5,
            data: []
        })
    })

    data.forEach(row => {
        fieldNames.forEach (fieldName => {
            const fieldData = fieldDatasets.find((data => data.fieldName === fieldName))    
            fieldData.data.push(!row[fieldName] || row[fieldName] < 0 ? 0 : row[fieldName]);
        })
    });

    return fieldDatasets;
}

export const getAgeGroupChartDataset = (covidDeaths, allDeaths) => {

    const ageGroupDataSet = [
        {    
            label: "Covid-19",
            backgroundColor: "red",
            data:covidDeaths 
        },
        { 
            label: "All Deaths",
            backgroundColor: "blue",
            data:allDeaths
        }
    ];

    return ageGroupDataSet;
}

export const getDateListFromCDCData = (dataSet) => {

    const datesList = dataSet.map(item => item.date);

    const newDateList = [];

    datesList.forEach(item => {
        var dateString = String(item);
        var year = Number(dateString.substring(2,4));
        var month = Number(dateString.substring(5,7));
        var day = Number(dateString.substring(8,10));
        
        //newDateList.push(month + "/" + day + "/" + year);
        newDateList.push(new Date(month + "/" + day + "/" + year));
    });

    return newDateList;
}