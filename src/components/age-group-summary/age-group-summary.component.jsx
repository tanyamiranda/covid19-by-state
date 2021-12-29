import React from 'react';
import {connect} from 'react-redux';

import './age-group-summary.css';
import {getAgeGroupChartDataset, combineAgeGroupValues, getAgeGroupDataForState, formatAgeGroupNames} from '../../utilities/chart-data-processing';
import {YEARS} from '../../utilities/data-fields';
import {STATE_INFO} from '../../utilities/states-meta-data';
import {CHART_OPTIONS_FOR_AGE_GROUPS} from '../../utilities/chart-options';
import ChartDisplay from '../chart-display/chart-display.component';

const AgeGroupSummary = ({deathsByAgeGroups, selectedState, selectedYear}) => {

    const dataFetchedSuccessfully = Array.isArray(deathsByAgeGroups) && deathsByAgeGroups.length > 0;

    const dataSet = combineAgeGroupValues(getAgeGroupDataForState(deathsByAgeGroups, selectedState, selectedYear));

    const ageLabels = formatAgeGroupNames(dataSet.map(item => item.age_group));
    const covid19Deaths = dataSet.map(item => item.sum_covid_19_deaths == null ? 0 : item.sum_covid_19_deaths);
    const totalDeaths = dataSet.map(item => item.sum_total_deaths == null ? 0 : item.sum_total_deaths);
    const chartDataSet = getAgeGroupChartDataset(covid19Deaths, totalDeaths);

    return(
        <div className="dashboard-component demographics">
            <div className="dashboard-component-title">Deaths By Age Group Totals<br/><span>for {STATE_INFO[selectedState].name}</span> <span>for {YEARS[selectedYear]}</span></div> 
            <div>
                {dataFetchedSuccessfully ? 
                    <div className="demographics">
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
                : 
                    <div>Problem fetching data from CDC site...</div>
                }
            </div>    
            <div className="data-sources">
                Data:&nbsp; <span className="site-link" onClick={()=> window.open("https://data.cdc.gov/NCHS/Provisional-COVID-19-Death-Counts-by-Sex-Age-and-S/9bhg-hcku")}>Center For Disease Control</span><br/>
            </div>
        </div>

    )

}
const mapStateToProps = state => ({
    selectedState: state.chartConfig.selectedState,
    selectedYear: state.chartConfig.selectedYear,
    deathsByAgeGroups: state.chartConfig.deathsByAgeGroups
});

export default connect(mapStateToProps)(AgeGroupSummary);