import React from 'react';
import {connect} from 'react-redux';

import './state-history-chart.css';

import {USA_IDENTIFIER, DATE_RANGES} from '../../utilities/data-fields';
import {CHART_OPTIONS_FOR_STATE_HISTORY} from '../../utilities/chart-options';
import ChartDisplay from '../chart-display/chart-display.component';

import {
    getHistoryByState, 
    getChartDataset, 
    getDateListFromData,
    getCountryHistoryData
} from '../../utilities/data-processing';

import {getFormattedDateForFiltering} from '../../utilities/formatting';

const StateHistoryChart = ({countryHistoryData, statesHistoryData, stateInformation, selectedState, selectedDateRange, selectedFieldGroup, stateChartTitle, chartId}) => {  
    
    const now = new Date();
    const yesterday = new Date();
    now.setDate(now.getDate() - Number(selectedDateRange));
    const startDate = getFormattedDateForFiltering(now);
    const endDate = getFormattedDateForFiltering(yesterday);

    let dataSet = null;

    if (selectedState === USA_IDENTIFIER) 
        dataSet = getCountryHistoryData(countryHistoryData, startDate, endDate);
    else 
        dataSet = getHistoryByState(statesHistoryData, selectedState, startDate, endDate); 

    const chartDataSet = getChartDataset(dataSet, selectedFieldGroup);
    const dateList = getDateListFromData(dataSet);

    return (
        <div className="dashboard-component state-history-chart">
            <div className="dashboard-component-title chart-header">
                <span>{stateChartTitle}</span> <span>for {stateInformation[selectedState].name}</span> <span>{DATE_RANGES[selectedDateRange]}</span>
            </div>
            <ChartDisplay 
            chartType="line"
            chartOptions = {CHART_OPTIONS_FOR_STATE_HISTORY}
            chartLabels = {dateList} 
            chartDataSet = {chartDataSet}
            chartId = {chartId}
            />

            <div className="data-sources">Data:&nbsp;
                <span className="site-link" onClick={()=> window.open("https://covidtracking.com/data")}>The COVID Tracking Project</span>
            </div>
        </div>
    )

};

const mapStateToProps = state => ({
    countryHistoryData: state.chartConfig.countryHistoryData,
    statesHistoryData: state.chartConfig.statesHistoryData,
    selectedState: state.chartConfig.selectedState,
    selectedDateRange: state.chartConfig.selectedDateRange,
    stateInformation: state.chartConfig.stateInformation
});

export default connect(mapStateToProps)(StateHistoryChart);