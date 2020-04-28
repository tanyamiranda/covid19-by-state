import React from 'react';
import {connect} from 'react-redux';

import './state-history-chart.css';

import {US_STATES_DATA, CHART_OPTIONS} from '../../utilities/data-fields';
import ChartDisplay from '../chart-display/chart-display.component';

import {
    getHistoryByState, 
    getChartDataset, 
    getDateListFromData,
    getFormattedDateForFiltering
} from '../../utilities/data-processing';

const StateHistoryChart = ({statesHistoryData, stateInformation, selectedState, selectedFields, selectedDateRange}) => {  
        
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

    const stateData = getHistoryByState(statesHistoryData, selectedState, dateValue); 
    const chartDataSet = getChartDataset(stateData, selectedFields);
    const dateList = getDateListFromData(stateData);

    return (
        <div className="chart-container">
            <div className="chart-header">Data for {US_STATES_DATA[selectedState]} last {selectedDateRange} days</div>
            <ChartDisplay 
            chartType="line"
            chartOptions = {CHART_OPTIONS}
            chartLabels = {dateList} 
            chartDataSet = {chartDataSet}
            />      
            <div className="chart-footer"> 
                Data Quality Grade for {US_STATES_DATA[selectedState]}: &nbsp;&nbsp;<b>{stateInformation[selectedState].grade} **</b> <br/>
                <span className="site-link" onClick={()=> window.open(stateInformation[selectedState].website)}>{selectedState} COVID19 Website</span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;
                <span className="site-link" onClick={()=> window.open('https://www.twitter.com/' + stateInformation[selectedState].twitter)}>Twitter</span>
            </div>
        </div>
    )

};

const mapStateToProps = state => ({
    stateInformation: state.chartConfig.stateInformation,
    statesHistoryData: state.chartConfig.statesHistoryData,
    selectedState: state.chartConfig.selectedState,
    selectedDateRange: state.chartConfig.selectedDateRange, 
    selectedFields: state.chartConfig.selectedFields
});

export default connect(mapStateToProps)(StateHistoryChart);