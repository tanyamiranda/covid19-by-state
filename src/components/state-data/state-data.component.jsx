import React from 'react';
import Chart from 'chart.js';
import "./state-data.css";

import {CHART_OPTIONS, DATA_FIELD_VALUES} from '../utilities/data-fields';

import {
    getHistoryByState, 
    getChartDataset, 
    getDatesFromData,  
    getStateHistoryData
} from '../utilities/data-processing';

// Necessary to be able to refresh charts
// based on user input.
let currentLineChart;

class StateData extends React.Component {  

    chartRef = React.createRef();

    constructor() {
        super();

        const defaultFields = [];
        defaultFields[DATA_FIELD_VALUES[0]] = true;
        defaultFields[DATA_FIELD_VALUES[1]] = true;
        defaultFields[DATA_FIELD_VALUES[2]] = true;
        
        this.state = {
            selectedState:"",
            selectedDateRange:"15",
            selectedFields: defaultFields,
            statesHistorydata:  getStateHistoryData()
        }
    }

    formatDate(date) {
        var d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        let year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        return year + month + day;
    }
    
    loadChart() {

        console.log("loadChart()...");

        const {selectedState, selectedFields, selectedDateRange} = this.state;

        var now = new Date();
        now.setDate(now.getDate() - Number(selectedDateRange));
        const dateValue = this.formatDate(now);
        
        //Filter out only fields that the user selected
        const identifiers = Object.keys(selectedFields)
        const fields = identifiers.filter(function(id) {
            return selectedFields[id]
        })

        const stateData = getHistoryByState(selectedState, dateValue); 
        const chartDataSet = getChartDataset(stateData, fields);
        const dateList = getDatesFromData(stateData);
        
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

    componentDidMount() {
        // Load blank chart as placeholder.
        this.loadChart();
    }

    handleStateSelection(event) {
        this.setState({selectedState: event.target.value})
    }

    handleDateRangeSelection(event) {
        this.setState({selectedDateRange: event.target.value})
    }

    handleFieldSelection(event) {
        
        const updatedSelectedFields = this.state.selectedFields;
        const fieldName = event.target.value;
        const isChecked = event.target.checked;
        updatedSelectedFields[fieldName] = isChecked;
        this.setState({ selectedFields: updatedSelectedFields}); 

    }

    componentDidUpdate() {
        this.loadChart();
    }

    render () {
    
        return (
            <div className="state-data-history">
                <div className="page-header">
                    <div className="page-title">
                        <h2>Covid 19 Data by State</h2>
                    </div>
                </div>
                <div className="page-layout">
                    <div className="chart-configuration">
                        <form>
                            <div className="config-field">State:</div>
                            <select name="state-selection" onChange ={e => this.handleStateSelection(e)}>
                                <option value="">...select state...</option>
                                {
                                    this.state.statesHistorydata.statesList.map (item => 
                                            <option key={item} value={item}>{item}</option>
                                    )
                                }
                            </select>
                            <br/><br/>
                            <div className="config-field" >Date Range:</div>
                            <select name="date-range-selection" onChange ={e => this.handleDateRangeSelection(e)}>
                                <option value="15">Last 15 Days</option>
                                <option value="30">Last 30 Days</option>
                                <option value="45">Last 45 Days</option>
                                <option value="60">Last 60 Days</option>
                            </select>
                            <br/><br/>
                            <div className="config-field">Data Fields:</div>
                            {
                                DATA_FIELD_VALUES.map( field => 
                                    <div className="field-option" key={field}>
                                        <input type="checkbox" name="field-selection" 
                                            onChange={e => this.handleFieldSelection(e)} 
                                            value={field}
                                            checked = {!this.state.selectedFields[field] ? false : true}
                                        />
                                        <label>{field}</label> 
                                    </div>
                                )
                            }
                            
                        </form>
                    </div>
                    <div className="chart-container">
                        <canvas id="myChart" ref={this.chartRef} />
                    </div>
                </div>
                <div className="page-footer">
                    <p>Visual Representation of the data collection by</p>
                    <p>Covid Tracking Data @ https://covidtracking.com/</p>
                </div>
            </div>
        )
    }
};

export default StateData;