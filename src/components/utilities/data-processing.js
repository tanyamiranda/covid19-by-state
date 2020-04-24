import STATE_HISTORY_DATA from './state-history-data.json';

import {DATA_FIELD_COLORS} from './data-fields';

export const stateHistoryData = {
    lastUpdated: null,
    data: []
};

const getFreshData = () => {

    // Fetch live json file from:
    //https://covidtracking.com/api
    //https://covidtracking.com/api/v1/states/daily.json

    stateHistoryData.data = STATE_HISTORY_DATA;
    stateHistoryData.lastUpdated = new Date();
    
    return stateHistoryData;

}


export const getHistoryByState = (state, startFromDate) => {

    if (!stateHistoryData.lastUpdated) {
        getFreshData();
    }

    return stateHistoryData.data
    .filter(stateData => stateData.state === state && stateData.date >= startFromDate )
    .sort(function (a, b) {
        return a.date - b.date;
      });
    
}    

export const getStatePlotData = (stateData) => {
    
    const hospitalizedCurrently = [];
    const inIcuCurrently = [];
    const onVentilatorCurrently = [];
    const death = [];

    stateData.forEach(state => {

        //const date = state.date;

        hospitalizedCurrently.push(!state.hospitalizedCurrently? 0 : state.hospitalizedCurrently);
        inIcuCurrently.push(!state.inIcuCurrently ? 0 : state.inIcuCurrently);
        onVentilatorCurrently.push(!state.onVentilatorCurrently ? 0 : state.onVentilatorCurrently);
        death.push(!state.death ? 0 : state.death);
    })

    return [
        {
            label: 'Currently Hospitalized',
            fill: false,
            backgroundColor: 'green',
            borderColor: 'green',
            data: hospitalizedCurrently
        }
        ,{
            label: 'Currently In ICU',
            fill: false,
            backgroundColor: 'red',
            borderColor: 'red',
            data: inIcuCurrently
        },{
            label: 'Currently On Ventilators',
            fill: false,
            backgroundColor: 'yellow',
            borderColor: 'yellow',
            data: onVentilatorCurrently
        },
        {
            label: 'Deaths',
            fill: false,
            backgroundColor: 'black',
            borderColor: 'black',
            data: death
        }
      ]
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