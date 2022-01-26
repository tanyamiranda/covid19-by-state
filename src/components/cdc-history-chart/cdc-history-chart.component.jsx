import React from 'react';
import {connect} from 'react-redux';

import './cdc-history-chart.css';

import ChartDisplay from '../chart-display/chart-display.component';

import {YEARS} from '../../utilities/data-fields';
import {STATE_INFO} from '../../utilities/states-meta-data';
import {getDisplayNumber} from '../../utilities/formatting';
import {getChartDataset, getDateListFromCDCData,} from '../../utilities/chart-data-processing';
import ChartFooter from '../chart-footer/chart-footer.component';

const CDCHistoryChart = ({selectedState, selectedYear, isDataLoaded, 
    dataSet, selectedFieldGroup, stateChartTitle, chartId, chartOptions, displaySummary, dataSource}) => {  
    
    const dataFetchedSuccessfully = isDataLoaded && Array.isArray(dataSet) && dataSet.length > 0;
    const chartDataSet = getChartDataset(dataSet, selectedFieldGroup);
    const dateList = getDateListFromCDCData(dataSet);
   
    return (
        <div className="dashboard-component state-history-chart">
            <div className="dashboard-component-title">
                <span>{stateChartTitle}</span>
            </div>
            <div className="dashboard-component-subtitle">
                <span>{STATE_INFO[selectedState].name} | {YEARS[selectedYear]}</span>
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
            {displaySummary ?
                <div className='chart-summary'>
                    <div className='summary-title'>Totals for Selection</div>
                    {chartDataSet.map((item) =>
                        <div className='chart-summary-row' key={item.label}> 
                            <div className='label'>{item.label}</div>
                            <div className='value'>{getDisplayNumber(item.dataTotal)}</div>
                        </div>    
                    )}
                </div>
            :
                <div></div>
            }
            <div>
                <ChartFooter dataSource = {dataSource}/>
            </div>
        </div>
    )

};

const mapStateToProps = state => ({
    selectedState: state.chartConfig.selectedState,
    selectedYear: state.chartConfig.selectedYear,
    isDataLoaded: state.chartConfig.isDataLoaded
});

export default connect(mapStateToProps)(CDCHistoryChart);