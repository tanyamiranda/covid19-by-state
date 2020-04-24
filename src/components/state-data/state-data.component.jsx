import React from 'react';
import Chart from 'chart.js';
import "./state-data.css";

import {DATA_FIELDS, CHART_OPTIONS} from '../utilities/data-fields';

import {
    getHistoryByState, 
    getChartDataset, 
//    getDatesFromData,  
    getStateHistoryData
} from '../utilities/data-processing';

let currentLineChart;

class StateData extends React.Component {  

    chartRef = React.createRef();

    constructor() {
    
        super();

        this.state = {
            selectedState:"",
            statesHistorydata:  getStateHistoryData()
        }
    }
    
    loadChart() {
        console.log("loadChart()...");
        
        const {selectedState} = this.state;

        console.log("selectedState=",selectedState);

        const chartOptions = CHART_OPTIONS;

        const stateData = getHistoryByState(selectedState, 20200401);
        //console.log("stateData=",stateData);
        
        const dataFields = [
            DATA_FIELDS.HOSPITALIZED_CURRENTLY, 
            DATA_FIELDS.IN_ICU_CURRENTLY, 
            DATA_FIELDS.ON_VENTILATOR_CURRENTLY, 
            DATA_FIELDS.DEATH
        ];
        const chartDataSet = getChartDataset(stateData, dataFields);
        console.log("chartDataSet=",chartDataSet);

        //const dateList = getDatesFromData(stateData);
        //console.log("dateList=", dateList);

        if (typeof currentLineChart !== "undefined") currentLineChart.destroy();

        const stateChartRef = this.chartRef.current.getContext("2d");

        currentLineChart = new Chart(stateChartRef, {
            type: "line",
            data: {
                labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
                datasets: chartDataSet
            },
            options: chartOptions
        });

        //console.log("stateChartRef=", stateChartRef);
    }

    componentDidMount() {
        // Load blank chart as placeholder.
        this.loadChart();
    }

    handSelection(event) {
        this.setState({selectedState: event.target.value})
    }

    componentDidUpdate() {
        this.loadChart();
    }

    render () {

        return (
            <div className="state-data-history">
                <div><h2>Covid 19 Data by State</h2></div>
                <div className="state-form">
                    <form>
                        <select name="state-selection" onChange ={e => this.handSelection(e)}>
                            <option value="">...select state...</option>
                            {
                                !this.state.statesHistorydata ? null : this.state.statesHistorydata.statesList.map (item => 
                                        <option key={item} value={item}>{item}</option>
                                )
                            }
                            
                        </select>
                    </form>
                </div>
                <div className="chart-container">
                    <canvas id="myChart" ref={this.chartRef} />
                </div>
            </div>
        )
    }
};

export default StateData;