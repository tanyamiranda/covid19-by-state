import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import "./dashboard.css";

import {getFreshData} from '../../utilities/data-processing';
import {setCOVID19Data} from '../../redux/chart-config/chart-config.actions';
import ChartConfiguration from '../chart-config/chart-config.component';
import StateHistoryChart from '../state-history-chart/state-history-chart.component';
import Spinner from '../spinner/spinner.component';
import MobileMessage from '../mobile-message/mobile-message.component';
import USHistoryChart from '../us-history-chart/us-history-chart.component';

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

        <div className="state-data-history">
            <div className="page-title">Covid19 Data Charts for U.S. States</div>
                <div className="page-layout">
                    <MobileMessage />
                    <ChartConfiguration />
                    <div className="chart-container">
                        { !dataRefreshedTimestamp ? ( 
                            <Spinner />
                        ) : (
                            selectedState === "ALL" ? 
                            (   
                                <USHistoryChart />
                            ) : (      
                                <StateHistoryChart />
                            )
                        )}
                    </div>
                </div>
            <div className="page-footer">
                <b>** Data Quality Grade determined by The COVID Tracking Project </b><br/>
                Not All States Report All Data<br/>
                Historical Data Refreshed daily at 4:00 PM EST<br/>
                ~ ~ ~<br/>
                This is a visual representation of the data collected by The COVID Tracking Project<br/>
                For more info, visit <span className="site-link" onClick={()=> window.open("https://covidtracking.com/")}>https://covidtracking.com/</span><br/>
                For field definitions, visit <span className="site-link" onClick={()=> window.open("https://covidtracking.com/api")}>https://covidtracking.com/api</span><br/>
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