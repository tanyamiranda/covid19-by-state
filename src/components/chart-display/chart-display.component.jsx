import React from 'react';
import Chart from 'chart.js';

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

// Necessary to be able to refresh charts
let currentLineChart;

class ChartDisplay extends React.Component {  

    chartRef = React.createRef();
    
    loadChart() {

        const {statesHistoryData, selectedState, selectedFields, selectedDateRange} = this.props;

        if (!statesHistoryData)
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

        const stateData = getHistoryByState(statesHistoryData, selectedState, dateValue); 
        const chartDataSet = getChartDataset(stateData, fields);
        const dateList = getDateListFromData(stateData);
        
        // Destroy previous chart if it exists 
        if (typeof currentLineChart !== "undefined") currentLineChart.destroy();

        const stateChartRef = this.chartRef.current.getContext("2d");

        currentLineChart = new Chart(stateChartRef, {
            type: "line",
            data: {
                labels: dateList,
                datasets: chartDataSet
            },
            options: CHART_OPTIONS
        });

    }

    componentDidMount(){
        this.loadChart();
    }

    componentDidUpdate() {
        this.loadChart();
    }

    render () {
        return (
            <div className="chart-display">    
                <div className="chart">
                    <canvas id="myChart" ref={this.chartRef} />                        
                </div>
            </div>            
        )
    }
};

export default ChartDisplay;