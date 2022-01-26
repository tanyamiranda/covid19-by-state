import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import "./dashboard.css";

import {getFreshData} from '../../utilities/data-fetching';
import {getCDCHistoryDataBySelection,getCDCHistoryDataByAgeGroups} from '../../utilities/chart-data-processing';
import {setCOVID19Data} from '../../redux/chart-config/chart-config.actions';
import {CDC_DATA_CHART_FIELD_GROUPS, AGE_GROUP_DATA_FIELDS} from '../../utilities/data-fields';
import {getDataSourceForAgeGroupData, getDataSourceForCasesDeathsData, getDataSourceForHospitalData} from '../../utilities/urls';
import ChartConfiguration from '../chart-config/chart-config.component';
import CDCHistoryChart from '../cdc-history-chart/cdc-history-chart.component';
import Spinner from '../spinner/spinner.component';
import AgeGroupSummary from '../age-group-summary/age-group-summary.component';
import {getTimeSeriesChartOptions} from '../../utilities/chart-options';
import DataTotals from '../data-totals/data-totals.component';

const Covid19UsDashboard =({setCOVID19Data, isDataLoaded, selectedState, selectedYear, cdcHistoryByJurisdiction,cdcHospitalDataByJurisdiction,deathsByAgeGroups}) => {  

    useEffect(() => {

        //console.log("useEffect()...");
        async function loadData() {
            try {   
                if (!isDataLoaded) {
                    //console.log("Refreshing Data from CDC..." + new Date());
                    const freshData = await getFreshData();
                    setCOVID19Data(freshData);
                    //console.log("Data Refreshed." +  new Date());
                }

            } catch (error) {
                console.log(error);
            }
        }

        loadData();

    },[setCOVID19Data,isDataLoaded]);
    
    return (   

        <div className="dashboard">
            <div className="page-header">
                <div className="page-title"><span>COVID-19 Data Charts</span> <span>For United States</span></div>
                <div className="page-subtitle">50 U.S. States, D.C. and Puerto Rico</div>
                <ChartConfiguration />
            </div>
            { !isDataLoaded ? ( 
                <Spinner/>
            ) : (
                <div className="page-layout">
                    <DataTotals/>
                    <CDCHistoryChart 
                        dataSet={getCDCHistoryDataBySelection(cdcHistoryByJurisdiction, selectedState, selectedYear)} 
                        selectedFieldGroup={CDC_DATA_CHART_FIELD_GROUPS.dailyTotals} 
                        stateChartTitle="New Cases & Deaths" 
                        chartId="newCasesDeaths"
                        chartOptions = {getTimeSeriesChartOptions(false)}
                        displaySummary={true}
                        dataSource={getDataSourceForCasesDeathsData(selectedState)}/>

                    <CDCHistoryChart 
                        dataSet={getCDCHistoryDataBySelection(cdcHospitalDataByJurisdiction, selectedState, selectedYear)} 
                        selectedFieldGroup={CDC_DATA_CHART_FIELD_GROUPS.hospitalData} 
                        stateChartTitle="New Hospital Inpatient & ICU" 
                        chartId="hospitalData"
                        chartOptions = {getTimeSeriesChartOptions(false)}
                        displaySummary={true} 
                        dataSource={getDataSourceForHospitalData(selectedState)} />                    

                    <CDCHistoryChart 
                        dataSet={getCDCHistoryDataByAgeGroups(deathsByAgeGroups, selectedState, selectedYear)} 
                        selectedFieldGroup={AGE_GROUP_DATA_FIELDS} 
                        stateChartTitle="Deaths By Age Groups Monthly" 
                        chartId="deathsByAgeGroupsOverTime"
                        chartOptions = {getTimeSeriesChartOptions(true)}
                        footerComment="Note: CDC Data Updated Weekly" 
                        dataSource={getDataSourceForAgeGroupData(selectedState)} />
                    
                    <AgeGroupSummary/>
                    
                </div>
            )}
            <div className="page-footer">
                Data Sources:<br/>
                <span className="footer-site-link" onClick={()=> window.open("https://data.cdc.gov")}>Center For Disease Control</span><br/>
                <span className="footer-site-link" onClick={()=> window.open("https://healthdata.gov/")}>Healthdata.gov</span><br/>
                ~ ~ ~<br/>
                <span className="footer-site-link" onClick={()=> window.open("https://tanyamiranda.github.io/")}>Contact Developer</span><br/>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    isDataLoaded: state.chartConfig.isDataLoaded,
    selectedState: state.chartConfig.selectedState, 
    selectedYear: state.chartConfig.selectedYear,
    cdcHistoryByJurisdiction: state.chartConfig.cdcHistoryByJurisdiction,
    cdcHospitalDataByJurisdiction: state.chartConfig.cdcHospitalDataByJurisdiction,
    deathsByAgeGroups: state.chartConfig.deathsByAgeGroups
});

const mapDispatchToProps = dispatch => ({
    setCOVID19Data: (data) => dispatch(setCOVID19Data(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(Covid19UsDashboard);