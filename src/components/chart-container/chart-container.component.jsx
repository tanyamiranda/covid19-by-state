import React from 'react';
import {connect} from 'react-redux';

import './chart-container.css';

import {US_STATES_DATA, CHART_OPTIONS, USA_IDENTIFIER} from '../../utilities/data-fields';
import ChartDisplay from '../chart-display/chart-display.component';

import {
    getHistoryByState, 
    getChartDataset, 
    getDateListFromData,
    getFormattedDateForFiltering,
    getCountryHistoryData
} from '../../utilities/data-processing';

//import {setStateHistoryData} from '../../redux/chart-config/chart-config.actions';

const ChartContainer = ({countryHistoryData, statesHistoryData, stateInformation, selectedState, selectedFields, selectedDateRange}) => {  
    
    //console.log("StateHistoryChart...");
    //console.log("stateInformation=",stateInformation);
    //console.log("selectedState=",selectedState);
    //console.log("selectedFields=",selectedFields);
    //console.log("selectedDateRange=",selectedDateRange);

    const now = new Date();
    const yesterday = new Date();
    now.setDate(now.getDate() - Number(selectedDateRange));
    yesterday.setDate(yesterday.getDate() - 1);
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
        <div className="chart-container dashboard-component">
            <div className="chart-header"><span>Data for {US_STATES_DATA[selectedState]}</span> <span> last {selectedDateRange} days</span></div>
            <ChartDisplay 
            chartType="line"
            chartOptions = {CHART_OPTIONS}
            chartLabels = {dateList} 
            chartDataSet = {chartDataSet}
            />
            { selectedState === USA_IDENTIFIER ? null : (
            <div className="state-grade"> 
                <div>Data Quality Grade for {stateInformation[selectedState].name}:  <b>{stateInformation[selectedState].dataQualityGrade}</b></div>
                <div className="chart-footer">Not all states report Hospitalization Data</div>                  
            </div>
            )}
            
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

export default connect(mapStateToProps)(ChartContainer);