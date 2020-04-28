import React from 'react';

import './state-history-chart.css';

import ChartDisplay from '../chart-display/chart-display.component';

import {
    getHistoryByState, 
    getChartDataset, 
    getDateListFromData,
    getFormattedDateForFiltering
} from '../utilities/data-processing';

const CHART_OPTIONS = {
    responsive: true,
    title: { display: false},
    tooltips: {mode: 'index', intersect: false},
    hover: {mode: 'nearest', intersect: true},
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Day'
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Value'
            }
        }]
    }
}

const StateHistoryChart = ({statesHistoryData, selectedState, selectedFields, selectedDateRange}) => {  
        
    if (!statesHistoryData)
        return;

    //console.log("StateHistoryChart...");
    //console.log("statesHistoryData=",statesHistoryData);
    //console.log("selectedState=",selectedState);
    //console.log("selectedFields=",selectedFields);
    //console.log("selectedDateRange=",selectedDateRange);

    var now = new Date();
    now.setDate(now.getDate() - Number(selectedDateRange));
    const dateValue = getFormattedDateForFiltering(now);
    
    //Filter out only fields that the user selected
    const identifiers = Object.keys(selectedFields)
    const fields = identifiers.filter(function(id) {
        return selectedFields[id]
    })

    const stateData = getHistoryByState(statesHistoryData, selectedState, dateValue); 
    const chartDataSet = getChartDataset(stateData, fields);
    const dateList = getDateListFromData(stateData);

    
    return (
           <ChartDisplay 
           chartType="line"
           chartOptions = {CHART_OPTIONS}
           chartLabels = {dateList} 
           chartDataSet = {chartDataSet}
        />      
    )

};

export default StateHistoryChart;