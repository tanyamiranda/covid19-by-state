import React from 'react';

import './us-history-chart.css';

import ChartDisplay from '../chart-display/chart-display.component';

import { 
    getCountryHistoryData,
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

const USHistoryChart = ({countryHistoryData, selectedFields, selectedDateRange}) => {  
        
    if (!countryHistoryData)
        return;

    //console.log("loadChart()...");
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

    const countryData = getCountryHistoryData(countryHistoryData, dateValue); 
    const chartDataSet = getChartDataset(countryData, fields);
    const dateList = getDateListFromData(countryData);

    
    return (
           <ChartDisplay 
           chartType="line"
           chartOptions = {CHART_OPTIONS}
           chartLabels = {dateList} 
           chartDataSet = {chartDataSet}
        />      
    )

};

export default USHistoryChart;