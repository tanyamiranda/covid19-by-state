/***************************************************************
 * This Loads but flickers between new chart and previous chart. 
 * Canvas won't clear before Chart.js loads the next chart. 
 * Saving this to work on later. Seems to be an issue with using
 * Chart.js with Hooks and as a component where the data updates 
 * are happening in the parent component.
 * *************************************************************
 */


import React, { useRef, useState, useEffect}from 'react'
import ChartJs from 'chart.js';

import './chart-display.css';

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


const ChartDisplay  = ({statesHistoryData, selectedState, selectedFields, selectedDateRange}) => {

    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    console.log("Chart BEFORE useEffect()... ")
    console.log("chartInstance=",chartInstance);
    console.log("chartContainer=",chartContainer);
    console.log("chartContainer.current=",chartContainer.current);

    useEffect(() => {
        
        if (chartContainer && chartContainer.current && statesHistoryData) {

            console.log("Chart useEffect()...");
            console.log("chartInstance=",chartInstance);
            console.log("chartContainer=",chartContainer);
            console.log("chartContainer.current=",chartContainer.current);
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
            
            const chartConfig = {
                type: 'line',
                data: {
                    labels: dateList
                    /*,
                    datasets: chartDataSet*/
                },
                options: CHART_OPTIONS
              };
            
              
            const newChartInstance = new ChartJs(chartContainer.current, chartConfig);
            newChartInstance.clear();
            newChartInstance.data.datasets = chartDataSet; 
            newChartInstance.update();
            setChartInstance(newChartInstance);
            
        }
    }, [chartContainer,statesHistoryData, selectedState, selectedFields, selectedDateRange]);

  
    const updateDataset = (datasetIndex, newData) => {
        chartInstance.data.datasets[datasetIndex].data = newData;
        chartInstance.update();
    };

    return (
        <div className="chart-container">
            <canvas ref={chartContainer} />
        </div>
    )
}

export default ChartDisplay;
