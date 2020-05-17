import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import "./dashboard.css";

import {getFreshData} from '../../utilities/data-processing';
import {setCOVID19Data} from '../../redux/chart-config/chart-config.actions';
import ChartConfiguration from '../chart-config/chart-config.component';
import ChartContainer from '../chart-container/chart-container.component';
import Spinner from '../spinner/spinner.component';
import OverallStats from '../overall-stats/overall-stats.component';

const Covid19UsDashboard =({setCOVID19Data, dataRefreshedTimestamp, selectedState, selectedDateRange,selectedFields}) => {  

    useEffect(() => {

        //console.log("useEffect()...");
        async function loadData() {
            try {   
                if (!dataRefreshedTimestamp) {
                    //console.log("retrievingData()...");
                    const freshData = await getFreshData();

                    const data = {
                        statesHistoryData: freshData.statesHistoryData,
                        stateInformation: freshData.stateInformation,
                        countryHistoryData: freshData.countryHistoryData
                    };
                    setCOVID19Data(data);
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
            <div className="page-title">Covid19 Data Charts for U.S. States</div>
            { !dataRefreshedTimestamp ? ( 
                <Spinner />
            ) : (
                <div className="page-layout">
                    <ChartConfiguration />
                    <ChartContainer />
                    <OverallStats/>
                </div>
            )}
            <div className="page-footer">
                <b>**</b> Data Quality Grade for each state is determined by The COVID Tracking Project<br/>
                ~ ~ ~<br/>
                Data collected by <span className="footer-site-link" onClick={()=> window.open("https://covidtracking.com/")}>The COVID Tracking Project</span><br/>
                ~ ~ ~<br/>
                Population Estimates obtained from <span className="footer-site-link" onClick={()=> window.open("https://www.census.gov/programs-surveys/popest.html")}>U.S. Census Bureau</span><br/>
                ~ ~ ~<br/>
                Site built by Tanya Miranda<br/>tanya.miranda@gmail.com
            </div>
        </div>
    
    )
};

const mapStateToProps = state => ({
    dataRefreshedTimestamp: state.chartConfig.dataRefreshedTimestamp,
    selectedState: state.chartConfig.selectedState,
    selectedDateRange: state.chartConfig.selectedDateRange, 
    selectedFields: state.chartConfig.selectedFields
});

const mapDispatchToProps = dispatch => ({
    setCOVID19Data: (data) => dispatch(setCOVID19Data(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(Covid19UsDashboard);