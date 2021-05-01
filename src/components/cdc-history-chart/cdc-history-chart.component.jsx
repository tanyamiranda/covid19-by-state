import React from 'react';
import {connect} from 'react-redux';

import './cdc-history-chart.css';

import {DATE_RANGES} from '../../utilities/data-fields';
import {CHART_OPTIONS_FOR_STATE_HISTORY} from '../../utilities/chart-options';
import ChartDisplay from '../chart-display/chart-display.component';

import {
    getChartDataset, 
    getDateListFromCDCData,
} from '../../utilities/chart-data-processing';

import {STATE_INFO} from '../../utilities/states-meta-data';

const CDCHistoryChart = ({dataSet, selectedState, selectedDateRange, selectedFieldGroup, stateChartTitle, chartId, dataSourceURL, dataSourceLabel}) => {  
    
    const dataFetchedSuccessfully = Array.isArray(dataSet) && dataSet.length > 0;
    const chartDataSet = getChartDataset(dataSet, selectedFieldGroup);
    const dateList = getDateListFromCDCData(dataSet);

    return (
        <div className="dashboard-component state-history-chart">
            <div className="dashboard-component-title chart-header">
                <span>{stateChartTitle}</span> <span>for {STATE_INFO[selectedState].name}</span> <span>{DATE_RANGES[selectedDateRange]}</span>
            </div>
            {dataFetchedSuccessfully ? 
                    <ChartDisplay 
                    chartType="line"
                    chartOptions = {CHART_OPTIONS_FOR_STATE_HISTORY}
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
    selectedDateRange: state.chartConfig.selectedDateRange,
});

export default connect(mapStateToProps)(CDCHistoryChart);