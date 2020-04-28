import React from 'react';
import {connect} from 'react-redux';

import './us-history-chart.css';

import ChartDisplay from '../chart-display/chart-display.component';
import {CHART_OPTIONS} from '../../utilities/data-fields';
import { 
    getCountryHistoryData,
    getChartDataset, 
    getDateListFromData,
    getFormattedDateForFiltering
} from '../../utilities/data-processing';

const USHistoryChart = ({countryHistoryData, selectedFields, selectedDateRange}) => {  
        
    if (!countryHistoryData)
        return;

    //console.log("USHistoryChart()...");
    //console.log("countryHistoryData=",countryHistoryData);
    //console.log("selectedFields=",selectedFields);
    //console.log("selectedDateRange=",selectedDateRange);

    var now = new Date();
    now.setDate(now.getDate() - Number(selectedDateRange));
    const dateValue = getFormattedDateForFiltering(now);

    const countryData = getCountryHistoryData(countryHistoryData, dateValue); 
    const chartDataSet = getChartDataset(countryData, selectedFields);
    const dateList = getDateListFromData(countryData);

    return (
        <div className="chart-container">
            <div className="chart-header">Data for All United States last {selectedDateRange} days</div>
            <ChartDisplay 
                chartType="line"
                chartOptions = {CHART_OPTIONS}
                chartLabels = {dateList} 
                chartDataSet = {chartDataSet}
            />
        </div>      
    )

};

const mapStateToProps = state => ({
    countryHistoryData: state.chartConfig.countryHistoryData,
    selectedState: state.chartConfig.selectedState,
    selectedDateRange: state.chartConfig.selectedDateRange, 
    selectedFields: state.chartConfig.selectedFields
});

export default connect(mapStateToProps)(USHistoryChart);