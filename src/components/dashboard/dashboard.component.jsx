import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import "./dashboard.css";

import {getFreshData} from '../../utilities/data-processing';
import {setCOVID19Data} from '../../redux/chart-config/chart-config.actions';
import ChartConfiguration from '../chart-config/chart-config.component';
import ChartContainer from '../chart-container/chart-container.component';
import Spinner from '../spinner/spinner.component';
import Overview from '../overview/overview.component';

const Covid19UsDashboard =({setCOVID19Data, dataRefreshedTimestamp}) => {  

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
            <div className="page-title">United States COVID19 Data Charts</div>
            { !dataRefreshedTimestamp ? ( 
                <Spinner />
            ) : (
                <div className="page-layout">
                    <ChartConfiguration />
                    <ChartContainer />
                    <Overview/>
                </div>
            )}
            <div className="page-footer">
                Chart Data obtained from <span className="footer-site-link" onClick={()=> window.open("https://covidtracking.com/")}>The COVID Tracking Project</span><br/>
                ~ ~ ~<br/>
                Population Estimates obtained from <span className="footer-site-link" onClick={()=> window.open("https://www.census.gov/programs-surveys/popest.html")}>U.S. Census Bureau</span><br/>
                ~ ~ ~<br/>
                County-Level Data obtained from <span className="footer-site-link" onClick={()=> window.open("https://github.com/nytimes/covid-19-data/blob/master/live/us-counties.csv")}>N.Y. Times</span><br/>
                ~ ~ ~<br/>
                Site built by Tanya Miranda<br/>tanya.miranda@gmail.com
            </div>
        </div>
    
    )
};

const mapStateToProps = state => ({
    dataRefreshedTimestamp: state.chartConfig.dataRefreshedTimestamp
});

const mapDispatchToProps = dispatch => ({
    setCOVID19Data: (data) => dispatch(setCOVID19Data(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(Covid19UsDashboard);