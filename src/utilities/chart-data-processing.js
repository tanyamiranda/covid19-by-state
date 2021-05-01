import {DATA_FIELD_COLORS, DATA_FIELD_DISPLAY_NAMES} from './data-fields';
import {getFormattedDateForFiltering} from './formatting';

export const combineAgeGroupValues = (ageGroupSet1) => {

    var result = [];
    ageGroupSet1.reduce(
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

export const getCDCDataSet = (selectedDateRange, cdcHistoryByJurisdiction, selectedState) =>{
    const now = new Date();
    const yesterday = new Date();
    now.setDate(now.getDate() - Number(selectedDateRange));
    const startDate = getFormattedDateForFiltering(now);
    const endDate = getFormattedDateForFiltering(yesterday);

    let dataSet = cdcHistoryByJurisdiction
        .filter(stateData => stateData.state === selectedState && stateData.date.substr(0,10).replace('-','') >= startDate && stateData.date.substr(0,10).replace('-','') <= endDate)
        .sort(function (a, b) {
            return a.date - b.date;
        });

    return dataSet;
}


export const getDateListFromData = (stateData) => {

    const datesList = stateData.map(item => item.date)
        .filter((value, index, self) => self.indexOf(value) === index);

    const newDateList = [];

    datesList.forEach(item => {
        var dateString = String(item);
        var month = Number(dateString.substring(4,6));
        var day = Number(dateString.substring(6,8));

        newDateList.push(month + "/" + day);
    });

    return newDateList;
}

export const getAgeGroupForState = (deathsByAgeGroups, stateName) => {
    
    return deathsByAgeGroups
        .filter(data => data.state.toLowerCase() === stateName.toLowerCase() && data.age_group.includes('year'))
        .sort((a,b) => compareAgeGroupValues(a.age_group,b.age_group));
    
}    

export const formatAgeGroupNames = (ageGroups) => {
    
    const shortNames = [];

    ageGroups.forEach(group => {
        const groupName = group.replace("years and over","+").replace("years","").replace("year","").replace("Under","<"); 
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

    const datesList = dataSet.map(item => item.date)
        .filter((value, index, self) => self.indexOf(value) === index);

    const newDateList = [];

    datesList.forEach(item => {
        var dateString = String(item);
        var month = Number(dateString.substring(5,7));
        var day = Number(dateString.substring(8,10));

        newDateList.push(month + "/" + day);
    });

    return newDateList;
}