import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import "./dashboard.css";

import CDCChart from '../cdc-chart/cdc-chart.component';
import ChartConfiguration from '../chart-config/chart-config.component';
import Spinner from '../spinner/spinner.component';
import DataTotals from '../data-totals/data-totals.component';

import {getFreshData} from '../../utilities/data-fetching';
import {getChartObjectByChartId} from '../../utilities/chart-data-processing';
import {setCOVID19Data} from '../../redux/chart-config/chart-config.actions';
import {CHART_IDENTIFIER} from '../../utilities/data-fields';

const Covid19UsDashboard =({setCOVID19Data, isDataLoaded, chartConfig}) => {  

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
            </div>
            <ChartConfiguration />
            { !isDataLoaded ? ( 
                <Spinner/>
            ) : (
                <div className="page-layout">
                    <DataTotals/>
                    
                    <CDCChart chartObject={getChartObjectByChartId(CHART_IDENTIFIER.CASES_DEATHS, chartConfig.cdcHistoryByJurisdiction, chartConfig.selectedState, chartConfig.selectedYear)} displaySummary={true}/>
              
                    <CDCChart chartObject={getChartObjectByChartId(CHART_IDENTIFIER.HOSPITAL_DATA, chartConfig.cdcHospitalDataByJurisdiction, chartConfig.selectedState, chartConfig.selectedYear)} displaySummary={true}/>
              
                    <CDCChart chartObject={getChartObjectByChartId(CHART_IDENTIFIER.DEATHS_BY_AGE, chartConfig.cdcDeathsByAgeGroup, chartConfig.selectedState, chartConfig.selectedYear)} />
              
                    <CDCChart chartObject={getChartObjectByChartId(CHART_IDENTIFIER.AGE_GROUP_SUMMARY, chartConfig.cdcDeathsByAgeGroup, chartConfig.selectedState, chartConfig.selectedYear)} />
                    
                    <CDCChart chartObject={getChartObjectByChartId(CHART_IDENTIFIER.VAX_FIRST_DOSE, chartConfig.cdcVaxByAgeGroup, chartConfig.selectedState, chartConfig.selectedYear)} isFullWidthChart={true}/>
                    
                    <CDCChart chartObject={getChartObjectByChartId(CHART_IDENTIFIER.VAX_COMPLETE_DOSE, chartConfig.cdcVaxByAgeGroup, chartConfig.selectedState, chartConfig.selectedYear)} isFullWidthChart={true}/>
                    
                    <CDCChart chartObject={getChartObjectByChartId(CHART_IDENTIFIER.EXCESS_DEATHS, chartConfig.cdcExcessDeathsByAgeGroup, chartConfig.selectedState, chartConfig.selectedYear)} isFullWidthChart={true}/>
                    
                    <CDCChart chartObject={getChartObjectByChartId(CHART_IDENTIFIER.EXCESS_DEATHS_PCT, chartConfig.cdcExcessDeathsByAgeGroup, chartConfig.selectedState, chartConfig.selectedYear)} isFullWidthChart={true}/>
                    
            
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
    chartConfig: state.chartConfig,
    isDataLoaded: state.chartConfig.isDataLoaded
});

const mapDispatchToProps = dispatch => ({
    setCOVID19Data: (data) => dispatch(setCOVID19Data(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(Covid19UsDashboard);