import React from 'react';
import {connect} from 'react-redux';

import './cdc-history-chart.css';

import {YEARS} from '../../utilities/data-fields';
import ChartDisplay from '../chart-display/chart-display.component';

import {
    getChartDataset, 
    getDateListFromCDCData,
} from '../../utilities/chart-data-processing';

import {STATE_INFO} from '../../utilities/states-meta-data';

const CDCHistoryChart = ({dataSet, selectedState, selectedYear, selectedFieldGroup, stateChartTitle, chartId, chartOptions, dataSourceURL, dataSourceLabel}) => {  
    
    const dataFetchedSuccessfully = Array.isArray(dataSet) && dataSet.length > 0;
    const chartDataSet = getChartDataset(dataSet, selectedFieldGroup);
    const dateList = getDateListFromCDCData(dataSet);
    
    //console.log("dateList = " + dateList);

    return (
        <div className="dashboard-component state-history-chart">
            <div className="dashboard-component-title chart-header">
                <span>{stateChartTitle}</span> <span>for {STATE_INFO[selectedState].name}</span> <span>for {YEARS[selectedYear]}</span>
            </div>
            {dataFetchedSuccessfully ? 
                    <ChartDisplay 
                    chartType="line"
                    chartOptions = {chartOptions}
                    chartLabels = {dateList} 
                    chartDataSet = {chartDataSet}
                    chartId = {chartId}
                    />
            : 
                <div>Problem fetching data from CDC site...</div>
            }

            <div className="data-sources">Data:&nbsp;
                <span className="site-link" onClick={()=> window.open(dataSourceURL)}>{dataSourceLabel}</span>
            </div>
        </div>
    )

};

const mapStateToProps = state => ({
    selectedState: state.chartConfig.selectedState,
    selectedYear: state.chartConfig.selectedYear,
});

export default connect(mapStateToProps)(CDCHistoryChart);