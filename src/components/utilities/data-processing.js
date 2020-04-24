import STATE_HISTORY_DATA from './state-history-data.json';

import {DATA_FIELD_COLORS} from './data-fields';

const stateHistoryData = {
    lastUpdated: null,
    data: [],
    statesList: []
};

export const getStateHistoryData = () => {

    if (!stateHistoryData.lastUpdated) {
        refreshData();
    }

    return stateHistoryData;

}

export const refreshData = () => {

    // Fetch live json file from:
    //https://covidtracking.com/api
    //https://covidtracking.com/api/v1/states/daily.json

    stateHistoryData.data = STATE_HISTORY_DATA;
    stateHistoryData.lastUpdated = new Date();

    stateHistoryData.statesList = stateHistoryData.data.map(item => item.state)
        .filter((value, index, self) => self.indexOf(value) === index);
    
    console.log('getFreshData() ',stateHistoryData.lastUpdated);

    return stateHistoryData;

}

export const getDatesFromData = (stateData) => {

    //Get unique set of dates in dataset
    const datesList = stateData.map(item => item.date)
        .filter((value, index, self) => self.indexOf(value) === index);

    const newDateList = [];

    // Convert to nicer format for chart display
    datesList.forEach(item => {
        var dateString = String(item);
        var month = Number(dateString.substring(4,6));
        var day = Number(dateString.substring(6,8));

        newDateList.push(month + "/" + day);
    });

    return newDateList;
}

export const setStatesList = () => {

    if (!stateHistoryData.lastUpdated) {
        refreshData();
    }

    return stateHistoryData.map(item => item.state)
        .filter((value, index, self) => self.indexOf(value) === index);

}

export const getHistoryByState = (state, startFromDate) => {

    if (!stateHistoryData.lastUpdated) {
        refreshData();
    }

    return stateHistoryData.data
    .filter(stateData => stateData.state === state && stateData.date >= startFromDate )
    .sort(function (a, b) {
        return a.date - b.date;
      });
    
}    


export const getChartDataset = (stateData, fieldNames) => {

    const fieldDatasets = [];

    // Initialize the datasets for each field.
    fieldNames.forEach ((fieldName, index) => {
        fieldDatasets.push( 
        {
            label: fieldName,
            fill: false,
            backgroundColor: DATA_FIELD_COLORS[index],
            borderColor: DATA_FIELD_COLORS[index],
            data: []
        }
        )
    })

    stateData.forEach(dayRecord => {
        fieldNames.forEach (fieldName => {
            const fieldData = fieldDatasets.find((data => data.label === fieldName))    
            fieldData.data.push(!dayRecord[fieldName] ? 0 : dayRecord[fieldName]);
        })
    });

    return fieldDatasets;
}


export const formatDisplayDate = (dateValue) => {
    let current_datetime = new Date(dateValue);
    let formatted_date = (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate() + "/" +current_datetime.getFullYear() ;
    return formatted_date;
};