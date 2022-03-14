import React from 'react';
import {connect} from 'react-redux';

import './cdc-chart.css';

import ChartDisplay from '../chart-display/chart-display.component';

import {getDisplayNumber} from '../../utilities/formatting';
import ChartFooter from '../chart-footer/chart-footer.component';
import { getChartOptions } from '../../utilities/chart-options';
import { getDataSource } from '../../utilities/data-sources';
import { CHART_IDENTIFIER, CHART_META_DATA, NYC_IDENTIFIER } from '../../utilities/data-fields';

const CDCChart = ({chartConfig, chartObject, displaySummary=false, isFullWidthChart=false}) => {  
    
    const dataFetchedSuccessfully = chartConfig.isDataLoaded;
    const isDataAvailable = chartObject.isDataAvailable;
    
    let errorMessage = "";

    if (dataFetchedSuccessfully && isDataAvailable) {
        errorMessage = "Problem fetching data from CDC site."
    }
    
    const chartType = CHART_META_DATA[chartObject.chartId].chartType;
    const chartTitle = CHART_META_DATA[chartObject.chartId].title;
    const chartOptions= getChartOptions(chartObject.chartId,chartObject.dateFormatForXAxis);
    const dataSourceId = chartObject.chartId === CHART_IDENTIFIER.HOSPITAL_DATA && chartConfig.selectedState === NYC_IDENTIFIER ? NYC_IDENTIFIER : chartObject.chartId;
    const dataSource = getDataSource(dataSourceId);

    return (
        <div className={"dashboard-component state-history-chart" + (isFullWidthChart ? " full-width-component" : "") }>
            <div className="dashboard-component-title">
                <span>{chartTitle}</span>
            </div>
            {dataFetchedSuccessfully && isDataAvailable ? 
                    <ChartDisplay
                    chartType= {chartType}
                    chartOptions = {chartOptions}
                    chartLabels = {chartObject.chartLabels} 
                    chartDataSet = {chartObject.chartDataSet}
                    chartId = {chartObject.chartId}
                    isTallChart = {isFullWidthChart}
                    />
            : 
                <div>{errorMessage}</div>
            }
            {displaySummary ?
                <div className='chart-summary'>
                    <div className='summary-title'>Totals for Selection</div>
                    {chartObject.chartDataSet.map((item) =>
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
    chartConfig: state.chartConfig
});

export default connect(mapStateToProps)(CDCChart);