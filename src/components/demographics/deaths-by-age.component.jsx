import React from 'react';
import {connect} from 'react-redux';

import './demographics.css';

import {getAgeGroupForState, getAgeGroupChartDataset, formatAgeGroupNames} from '../../utilities/data-processing';
import {CHART_OPTIONS_FOR_AGE_GROUPS} from '../../utilities/chart-options';

import ChartDisplay from '../chart-display/chart-display.component';

const DeathsByAge = ({selectedState, stateInformation, deathsByAgeGroups}) => {

    const dataSet = getAgeGroupForState(deathsByAgeGroups, stateInformation[selectedState].name);
    const ageLabels = formatAgeGroupNames(dataSet.map(item => item.age_group));
    const covid19Deaths = dataSet.map(item => item.sum_covid_19_deaths == null ? 0 : item.sum_covid_19_deaths);
    const totalDeaths = dataSet.map(item => item.sum_total_deaths == null ? 0 : item.sum_total_deaths);
    const chartDataSet = getAgeGroupChartDataset(covid19Deaths, totalDeaths);

    return(
        <div className="dashboard-component demographics">
            <div>
                <ChartDisplay 
                chartType="bar"
                chartOptions = {CHART_OPTIONS_FOR_AGE_GROUPS}
                chartDataSet = {chartDataSet}
                chartLabels = {ageLabels}
                chartId = "DeathsByAgeGroup"
                />
            </div>    
        </div>

    )

}
const mapStateToProps = state => ({
    selectedState: state.chartConfig.selectedState,
    stateInformation: state.chartConfig.stateInformation,
    deathsByAgeGroups: state.chartConfig.deathsByAgeGroups
});

export default connect(mapStateToProps)(DeathsByAge);