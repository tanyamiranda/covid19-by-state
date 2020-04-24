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
            selectedFields: [],
            statesHistorydata:  getStateHistoryData()
        }
    }
    
    loadChart() {
        console.log("loadChart()...");
        
        const {selectedState, selectedFields} = this.state;

        //console.log("selectedState=",selectedState);
        //console.log("selectedFields=",selectedFields);

        //Filter out only fields that the user selected
        const identifiers = Object.keys(selectedFields)
        const fields = identifiers.filter(function(id) {
            return selectedFields[id]
        })

        const chartOptions = CHART_OPTIONS;

        const stateData = getHistoryByState(selectedState, 20200401);
        //console.log("stateData=",stateData);
        
        const chartDataSet = getChartDataset(stateData, fields);
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

    handleStateSelection(event) {
        this.setState({selectedState: event.target.value})
    }

    handleFieldSelection(event) {
        
        const updatedSelectedFields = this.state.selectedFields;
        const item = event.target.value;
        const isChecked = event.target.checked;
        updatedSelectedFields[item] = isChecked;
        this.setState({ selectedFields: updatedSelectedFields}); 

    }

    componentDidUpdate() {
        this.loadChart();
    }

    render () {

        const allFields = Object.keys(DATA_FIELDS)
        console.log("allFields", allFields);

        return (
            <div className="state-data-history">
                <div><h2>Covid 19 Data by State</h2></div>
                <div className="page-layout">
                    <div className="chart-configuration">
                        <form>
                            <b>State:</b><br/>
                            <select name="state-selection" onChange ={e => this.handleStateSelection(e)}>
                                <option value="">...select state...</option>
                                {
                                    !this.state.statesHistorydata ? null : this.state.statesHistorydata.statesList.map (item => 
                                            <option key={item} value={item}>{item}</option>
                                    )
                                }
                                
                            </select>
                        </form>
                        <form>
                            <b>Fields:</b>
                            {
                                allFields.map( field => 
                                    <div className="field-option">
                                        <input onChange={e => this.handleFieldSelection(e)} type="checkbox" name="field-selection" value={DATA_FIELDS[field]} />
                                        <label>{DATA_FIELDS[field]}</label> 
                                    </div>
                                )
                            }
                            
                        </form>
                    </div>
                    <div className="chart-container">
                        <canvas id="myChart" ref={this.chartRef} />
                    </div>
                </div>
            </div>
        )
    }
};

export default StateData;