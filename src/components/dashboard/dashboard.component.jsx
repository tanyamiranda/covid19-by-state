import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import "./dashboard.css";

import CDCChart from '../cdc-chart/cdc-chart.component';
import ChartConfiguration from '../chart-config/chart-config.component';
import Spinner from '../spinner/spinner.component';
import DataTotals from '../data-totals/data-totals.component';

import {getFreshData} from '../../utilities/data-fetching';
import {getChartObjectForVaxFirstByAgeGroup, 
    getChartObjectForDeathsByAgeGroup, 
    getChartObjectForVaxCompleteByAgeGroup,
    getChartObjectForExcessDeathsAgeGroup,
    getChartObjectForDeathsAndCases,
    getChartObjectForHospitalData,
    getChartObjectForExcessDeathsAgeGroupPercentage,
    getChartObjectDeathsByAgeGroupSummary} from '../../utilities/chart-data-processing';
import {setCOVID19Data} from '../../redux/chart-config/chart-config.actions';

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
                    
                    <CDCChart chartObjects={getChartObjectForDeathsAndCases(chartConfig)} displaySummary={true}/>   

                    <CDCChart chartObjects={getChartObjectForHospitalData(chartConfig)} displaySummary={true}/> 

                    <CDCChart chartObjects={getChartObjectForDeathsByAgeGroup(chartConfig)}/>
              
                    <CDCChart chartObjects={getChartObjectDeathsByAgeGroupSummary(chartConfig)} />

                    <CDCChart chartObjects={getChartObjectForVaxFirstByAgeGroup(chartConfig)} isFullWidthChart={true}/>

                    <CDCChart chartObjects={getChartObjectForVaxCompleteByAgeGroup(chartConfig)} isFullWidthChart={true}/>

                    <CDCChart chartObjects={getChartObjectForExcessDeathsAgeGroup(chartConfig)} isFullWidthChart={true}/>
                
                    <CDCChart chartObjects={getChartObjectForExcessDeathsAgeGroupPercentage(chartConfig)} isFullWidthChart={true}/>
            
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