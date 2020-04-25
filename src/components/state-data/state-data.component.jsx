import React from 'react';
import Chart from 'chart.js';
import "./state-data.css";

import {CHART_OPTIONS, DATA_FIELD_VALUES, STATES} from '../utilities/data-fields';

import ShortDropDown from '../dropdown/dropdown.component';

import {
    getHistoryByState, 
    getChartDataset, 
    getDateListFromData
} from '../utilities/data-processing';

// Necessary to be able to refresh charts
// based on user input.
let currentLineChart;

class StateData extends React.Component {  

    chartRef = React.createRef();

    constructor() {
        super();

        const defaultFields = [];
        defaultFields["hospitalizedCurrently"] = true;
        defaultFields["inIcuCurrently"] = true;
        defaultFields["onVentilatorCurrently"] = true;
        defaultFields["death"] = true;
        
        this.state = {
            selectedState:"NJ",
            selectedDateRange:"30",
            selectedFields: defaultFields,
            statesHistoryData: null,
            dataRefreshedTimestamp: ""
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

        const {statesHistoryData, selectedState, selectedFields, selectedDateRange} = this.state;

        var now = new Date();
        now.setDate(now.getDate() - Number(selectedDateRange));
        const dateValue = this.formatDate(now);
        
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

    async componentDidMount() {
        // Load blank chart as placeholder.

        console.log("Fetching Data from https://covidtracking.com/api/v1/states/daily.json.");

        const now = new Date();
        const formatted_date = now.toLocaleString();

        try {
            const response = await fetch('https://covidtracking.com/api/v1/states/daily.json');
            if (response.ok) {
                
                const json = await response.json();
                this.setState({statesHistoryData: json});
                this.setState({dataRefreshedTimestamp: formatted_date});
            }
            else {
                throw Error(response.statusText);
            }
 
        } catch (error) {
            console.log(error);
        }

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

        const dateRangeListAndLabels = [];
        dateRangeListAndLabels["15"]= "Last 15 days"
        dateRangeListAndLabels["30"]= "Last 30 days"
        dateRangeListAndLabels["45"]= "Last 45 days";
        dateRangeListAndLabels["60"]= "Last 60 days";

        //const dateRangeList = ["7","15","30", "45", "60"];
        //const dateRangeLabels = ["Last 7 days","Last 15 days","Last 30 days ", "Last 45 days", "Last 60 days"];

        return (
            <div className="state-data-history">
                <div className="page-header">
                    <div className="page-title">
                        <h2>Covid19 Data Charts for U.S. States</h2>
                    </div>
                </div>
                <div className="page-layout">
                    <div className="chart-configuration">
                        <form>
                            <div className="config-field">Data Loaded:</div>
                            <div>{this.state.dataRefreshedTimestamp}</div>
                            <br/>
                            <div className="config-field">State:</div>
                            <ShortDropDown 
                                fieldName="states-list" 
                                optionList={STATES} 
                                defaultSelected={this.state.selectedState} 
                                onChangeEvent={this.handleStateSelection.bind(this)} 
                            />
                            <br/><br/>
                            <div className="config-field" >Date Range:</div>
                            <ShortDropDown 
                                fieldName="date-range-list" 
                                optionList={Object.keys(dateRangeListAndLabels)} 
                                labelsList={dateRangeListAndLabels}
                                defaultSelected={this.state.selectedDateRange} 
                                onChangeEvent={this.handleDateRangeSelection.bind(this)} />
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
                        <div className="chart-title">Data for {this.state.selectedState} last {this.state.selectedDateRange} days</div>
                        <canvas id="myChart" ref={this.chartRef} />
                        <p><b>** Not All States Report All Data</b></p>
                    </div>
                </div>
                <div className="page-footer">
                    <p>This is a visual representation of the data collected by The COVID Tracking Project</p>
                    <p>For more info, visit <span className="site-link" onClick={()=> window.open("https://covidtracking.com/")}>https://covidtracking.com/</span></p>
                    <p>For field definitions, visit <span className="site-link" onClick={()=> window.open("https://covidtracking.com/api")}>https://covidtracking.com/api</span></p>
                </div>
            </div>
        )
    }
};

export default StateData;