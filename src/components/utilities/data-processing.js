//import STATE_HISTORY_DATA from './state-history-data.json';

import {DATA_FIELD_COLORS} from './data-fields';

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

export const getHistoryByState = (stateHistoryData, state, startFromDate) => {

    return stateHistoryData
        .filter(stateData => stateData.state === state && stateData.date >= startFromDate )
        .sort(function (a, b) {
            return a.date - b.date;
        });
    
}    


export const getChartDataset = (stateData, fieldNames) => {

    const fieldDatasets = [];

    // Initialize the datasets for each field.
    fieldNames.forEach ((fieldName, index) => {
        fieldDatasets.push({
            label: fieldName,
            fill: false,
            backgroundColor: DATA_FIELD_COLORS[index],
            borderColor: DATA_FIELD_COLORS[index],
            data: []
        })
    })

    stateData.forEach(dayRecord => {
        fieldNames.forEach (fieldName => {
            const fieldData = fieldDatasets.find((data => data.label === fieldName))    
            fieldData.data.push(!dayRecord[fieldName] ? 0 : dayRecord[fieldName]);
        })
    });

    return fieldDatasets;
}
