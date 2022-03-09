import React from 'react';
import {connect} from 'react-redux';

import './cdc-chart.css';

import ChartDisplay from '../chart-display/chart-display.component';

import {YEARS} from '../../utilities/data-fields';
import {getStateData} from '../../utilities/states-data';
import {getDisplayNumber} from '../../utilities/formatting';
import ChartFooter from '../chart-footer/chart-footer.component';

const CDCChart = ({chartConfig, chartObjects, displaySummary=false, isFullWidthChart=false}) => {  
    
    const dataFetchedSuccessfully = chartConfig.isDataLoaded;
    const isDataAvailable = chartObjects.isDataAvailable;
    const stateData = getStateData(chartConfig.selectedState);

    let errorMessage = "";

    if (dataFetchedSuccessfully && isDataAvailable) {
        errorMessage = "Problem fetching data from CDC site."
    }
    else if (!isDataAvailable) {
        isFullWidthChart = false;
        errorMessage = "Data is unavailable for selection."
    }

    return (
        <div className={"dashboard-component state-history-chart" + (isFullWidthChart ? " full-width-component" : "") }>
            <div className="dashboard-component-title">
                <span>{chartObjects.chartTitle}</span>
            </div>
            <div className="dashboard-component-subtitle">
                <span>{stateData.name} | {YEARS[chartConfig.selectedYear]}</span>
            </div>
            {dataFetchedSuccessfully && isDataAvailable ? 
                    <ChartDisplay
                    chartType= {chartObjects.type}
                    chartOptions = {chartObjects.chartOptions}
                    chartLabels = {chartObjects.chartLabels} 
                    chartDataSet = {chartObjects.chartDataSet}
                    chartId = {chartObjects.chartId}
                    isTallChart = {isFullWidthChart}
                    />
            : 
                <div>{errorMessage}</div>
            }
            {displaySummary ?
                <div className='chart-summary'>
                    <div className='summary-title'>Totals for Selection</div>
                    {chartObjects.chartDataSet.map((item) =>
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
                <ChartFooter dataSource = {chartObjects.dataSource}/>
            </div>
        </div>
    )

};

const mapStateToProps = state => ({
    chartConfig: state.chartConfig
});

export default connect(mapStateToProps)(CDCChart);