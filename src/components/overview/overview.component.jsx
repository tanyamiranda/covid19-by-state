import React from 'react';
import {connect} from 'react-redux';

import './overview.css';

import {getDisplayNumber, getPercentage} from '../../utilities/formatting'

const Overview = ({selectedState, stateInformation}) => {

    let stateInfo = stateInformation[selectedState];
        
    const percentPositive =  getPercentage(stateInfo.totalPositive,stateInfo.estimatedPopulation);
    const percentDeath =  getPercentage(stateInfo.totalDeath,stateInfo.estimatedPopulation);
    const percentHospitalized =  getPercentage(stateInfo.hospitalizedCurrently,stateInfo.estimatedPopulation);
    //const percentPositiveOfTestedTotal = getPercentage(stateInfo.totalPositive,stateInfo.totalTestResults);

    return (
        <div className="dashboard-component overview">
            <div className="dashboard-component-title">{stateInfo.name} Overview</div>
            <div className="overview-data">
                <div className="overview-data-row">
                    <div className="data-label">Population</div>
                    <div className="data-number">{getDisplayNumber(stateInfo.estimatedPopulation)}</div>
                </div>
                <div className="overview-data-row">
                    <div className="data-label">Total Positive Tests</div>
                    <div className="data-number">{getDisplayNumber(stateInfo.totalPositive)}<span className="percent">({percentPositive})</span></div>
                    
                </div>
                <div className="overview-data-row">
                    <div className="data-label">Currently Hospitalized</div>
                    <div className="data-number">{getDisplayNumber(stateInfo.hospitalizedCurrently)}<span className="percent">({percentHospitalized})</span></div>
                    
                </div>
                <div className="overview-data-row">
                    <div className="data-label">Total Deaths</div>
                    <div className="data-number">{getDisplayNumber(stateInfo.totalDeath)}<span className="percent">({percentDeath})</span></div>

                </div>
                
            </div>            
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