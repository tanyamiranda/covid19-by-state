import React from 'react';
import {connect} from 'react-redux';

import './overview.css';

import {getDisplayNumber, getPercentage} from '../../utilities/formatting'

const Overview = ({selectedState, stateInformation}) => {

    let stateInfo = stateInformation[selectedState];
        
    const percentPositive =  getPercentage(stateInfo.totalPositive,stateInfo.estimatedPopulation);
    const percentTested =  getPercentage(stateInfo.totalTestResults,stateInfo.estimatedPopulation);
    const percentDeath =  getPercentage(stateInfo.totalDeath,stateInfo.estimatedPopulation);
    const percentHospitalized =  getPercentage(stateInfo.hospitalizedCurrently,stateInfo.estimatedPopulation);

    return (
        <div className="dashboard-component overview">
            <div className="dashboard-component-title">{stateInfo.name} Overview</div>
            <div className="links"> 
                <span className="site-link" onClick={()=> window.open(stateInfo.website)}>COVID19 Website</span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;
                <span className="site-link" onClick={()=> window.open('https://www.twitter.com/' + stateInfo.twitter)}>Twitter</span>
            </div>
            <div className="estimated-population">Estimated Population : <span className="estimate">{getDisplayNumber(stateInfo.estimatedPopulation)}</span></div>
            <div className="overview-data">
                <div className="overview-data-row">
                    <div>Total Tested:</div>
                    <div className="data-number">{getDisplayNumber(stateInfo.totalTestResults)}</div>
                    <div className="data-number percent">{percentTested}</div>
                </div>
                <div className="overview-data-row">
                    <div>Total Positive:</div>
                    <div className="data-number">{getDisplayNumber(stateInfo.totalPositive)}</div>
                    <div className="data-number percent">{percentPositive}</div>
                </div>
                <div className="overview-data-row">
                    <div>Currently Hospitalized:</div>
                    <div className="data-number">{getDisplayNumber(stateInfo.hospitalizedCurrently)}</div>
                    <div className="data-number percent">{percentHospitalized}</div>
                </div>
                <div className="overview-data-row">
                    <div>Total Deaths:</div>
                    <div className="data-number">{getDisplayNumber(stateInfo.totalDeath)}</div>
                    <div className="data-number percent">{percentDeath}</div>
                </div>
            </div>
            <div className="estimate estimate-message">% calculated against Estimated Population</div>
            <div className="data-sources">Data:&nbsp;
                <span className="site-link" onClick={()=> window.open("https://covidtracking.com/")}>The COVID Tracking Project</span>,&nbsp;
                <span className="site-link" onClick={()=> window.open("https://www.census.gov/programs-surveys/popest.html")}>U.S. Census Bureau</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    selectedState: state.chartConfig.selectedState,
    stateInformation: state.chartConfig.stateInformation
});

export default connect(mapStateToProps)(Overview);