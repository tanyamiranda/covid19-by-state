import React from 'react';
import {connect} from 'react-redux';

import './state-history-chart.css';

import {US_STATES_DATA, USA_IDENTIFIER} from '../../utilities/data-fields';
import {CHART_OPTIONS_FOR_STATE_HISTORY} from '../../utilities/chart-options';
import ChartDisplay from '../chart-display/chart-display.component';

import {
    getHistoryByState, 
    getChartDataset, 
    getDateListFromData,
    getCountryHistoryData
} from '../../utilities/data-processing';

import {getFormattedDateForFiltering} from '../../utilities/formatting';

const StateHistoryChart = ({countryHistoryData, statesHistoryData, stateInformation, selectedState, selectedFields, selectedDateRange}) => {  
    
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

    //const stateData = getHistoryByState(statesHistoryData, selectedState, startDate, endDate); 
    const chartDataSet = getChartDataset(dataSet, selectedFields);
    const dateList = getDateListFromData(dataSet);

    return (
        <div className="dashboard-component state-history-chart">
            <div className="dashboard-component-title chart-header"><span>Data for {US_STATES_DATA[selectedState]}</span> <span> last {selectedDateRange} days</span></div>
            <ChartDisplay 
            chartType="line"
            chartOptions = {CHART_OPTIONS_FOR_STATE_HISTORY}
            chartLabels = {dateList} 
            chartDataSet = {chartDataSet}
            chartId = "HistoricalDataChart"
            />
            { selectedState === USA_IDENTIFIER ? null : (
            <div className="state-grade"> 
                <div className="data-sources">Data Quality Grade for {stateInformation[selectedState].name}:  <b>{stateInformation[selectedState].dataQualityGrade}</b></div>                  
            </div>
            )}
            <div className="data-sources">Data:&nbsp;
                <span className="site-link" onClick={()=> window.open("https://covidtracking.com/")}>The COVID Tracking Project</span>
            </div>
        </div>
    )

};

const mapStateToProps = state => ({
    countryHistoryData: state.chartConfig.countryHistoryData,
    statesHistoryData: state.chartConfig.statesHistoryData,
    stateInformation: state.chartConfig.stateInformation,
    selectedState: state.chartConfig.selectedState,
    selectedDateRange: state.chartConfig.selectedDateRange, 
    selectedFields: state.chartConfig.selectedFields
});

export default connect(mapStateToProps)(StateHistoryChart);