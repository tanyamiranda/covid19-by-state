import React from 'react';
import Chart from 'chart.js';
import classes from "./state-data.css";

import {DATA_FIELDS} from '../utilities/data-fields';

import {getHistoryByState, getChartDataset} from '../utilities/data-processing';


class StateData extends React.Component {

    usState = "NJ";
    chartRef = React.createRef();

    componentDidMount() {
        const chartRef = this.chartRef.current.getContext("2d");

        const chartOptions = {
            responsive: true,
            title: { display: true, text: 'Covid19 Data By State - ' + this.usState},
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

        const stateData = getHistoryByState(this.usState, 20200401);
        console.log("stateData=",stateData);
        
        const dataFields = [
            DATA_FIELDS.HOSPITALIZED_CURRENTLY, 
            DATA_FIELDS.IN_ICU_CURRENTLY, 
            DATA_FIELDS.ON_VENTILATOR_CURRENTLY, 
            DATA_FIELDS.DEATH
        ];
        const chartDataSet = getChartDataset(stateData, dataFields);
        console.log("chartDataSet=",chartDataSet);

        new Chart(chartRef, {
            type: "line",
            data: {
                labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
                datasets: chartDataSet
            },
            options: chartOptions
        });

        console.log("chartRef=", chartRef);
    }

    render () {
        return (
            <div>
                <div className={classes.graphContainer}>
                    <canvas id="myChart" ref={this.chartRef} />
                </div>
            </div>
        )
    }
};

export default StateData;