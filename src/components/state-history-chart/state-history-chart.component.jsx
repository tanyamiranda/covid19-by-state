import React from 'react';
import {connect} from 'react-redux';

import './state-history-chart.css';

import {DATE_RANGES} from '../../utilities/data-fields';
import {CHART_OPTIONS_FOR_STATE_HISTORY} from '../../utilities/chart-options';
import ChartDisplay from '../chart-display/chart-display.component';

import {
    getChartDataset, 
    getDateListFromData
} from '../../utilities/data-processing';

const StateHistoryChart = ({dataSet, stateInformation, selectedState, selectedDateRange, selectedFieldGroup, stateChartTitle, chartId}) => {  
    
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
    selectedState: state.chartConfig.selectedState,
    selectedDateRange: state.chartConfig.selectedDateRange,
    stateInformation: state.chartConfig.stateInformation,
});

export default connect(mapStateToProps)(StateHistoryChart);