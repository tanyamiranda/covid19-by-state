import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import "./dashboard.css";

import {getFreshData} from '../../utilities/data-processing';
import {setCOVID19Data} from '../../redux/chart-config/chart-config.actions';
import ChartConfiguration from '../chart-config/chart-config.component';
import StateHistoryChart from '../state-history-chart/state-history-chart.component';
import Spinner from '../spinner/spinner.component';
import Overview from '../overview/overview.component';
import {USA_IDENTIFIER, DATA_FIELD_GROUPS} from '../../utilities/data-fields';
import CountyData from '../county-data/county-data.component';
import Demographics from '../demographics/demographics.component';

const Covid19UsDashboard =({setCOVID19Data, dataRefreshedTimestamp, selectedState}) => {  

    useEffect(() => {

        //console.log("useEffect()...");
        async function loadData() {
            try {   
                if (!dataRefreshedTimestamp) {
                    //console.log("retrievingData()...");
                    const freshData = await getFreshData();
                    setCOVID19Data(freshData);
                }

            } catch (error) {
                console.log(error);
            }
        }

        loadData();

    },[setCOVID19Data,dataRefreshedTimestamp]);
    
    //console.log("dataRefreshedTimestamp=",dataRefreshedTimestamp);
    //console.log("selectedState=",selectedState);
    //console.log("selectedFields=",selectedFields);
    //console.log("selectedDateRange=",selectedDateRange);

    return (   

        <div className="dashboard">
            <div className="page-header">
                <div className="page-title"><span>COVID-19 Data Charts</span> <span>For U.S. States</span></div>
                <ChartConfiguration />
            </div>
            { !dataRefreshedTimestamp ? ( 
                <Spinner />
            ) : (
                <div className="page-layout">
                    <StateHistoryChart selectedFieldGroup={DATA_FIELD_GROUPS.increase} stateChartTitle="Daily Increases" chartId="dailyIncreases" />
                    <StateHistoryChart selectedFieldGroup={DATA_FIELD_GROUPS.hospitalization} stateChartTitle="Hospitalizations" chartId="hospitalizations"/>
                    <StateHistoryChart selectedFieldGroup={DATA_FIELD_GROUPS.testing} stateChartTitle="Testing" chartId="testing"/>
                    <Overview/>
                    <Demographics/>
                    {selectedState === USA_IDENTIFIER ? null : (
                        <CountyData />
                    )}
                </div>
            )}
            <div className="page-footer">
                Data Sources:<br/>
                <span className="footer-site-link" onClick={()=> window.open("https://covidtracking.com/data")}>The COVID Tracking Project</span><br/>
                <span className="footer-site-link" onClick={()=> window.open("https://www.census.gov/programs-surveys/popest.html")}>U.S. Census Bureau</span><br/>
                <span className="footer-site-link" onClick={()=> window.open("https://data.cdc.gov/NCHS/Provisional-COVID-19-Death-Counts-by-Sex-Age-and-S/9bhg-hcku")}>Center For Disease Control</span><br/>
                <span className="footer-site-link" onClick={()=> window.open("https://github.com/nytimes/covid-19-data/blob/master/live/us-counties.csv")}>N.Y. Times</span><br/>
                ~ ~ ~<br/>
                <span className="footer-site-link" onClick={()=> window.open("https://tanyamiranda.github.io/")}>Contact Developer</span><br/>
            </div>
        </div>
    
    )
};

const mapStateToProps = state => ({
    dataRefreshedTimestamp: state.chartConfig.dataRefreshedTimestamp,
    selectedState: state.chartConfig.selectedState
});

const mapDispatchToProps = dispatch => ({
    setCOVID19Data: (data) => dispatch(setCOVID19Data(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(Covid19UsDashboard);