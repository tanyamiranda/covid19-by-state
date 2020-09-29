import React from 'react';
import {connect} from 'react-redux';

import './overview.css';

import {getDisplayNumber, getPercentage} from '../../utilities/formatting'

const Overview = ({selectedState, stateInformation}) => {

    let stateInfo = stateInformation[selectedState];
        
    const percentPositive =  getPercentage(stateInfo.totalPositive,stateInfo.estimatedPopulation);
    const percentTested =  getPercentage(stateInfo.totalTestResults,stateInfo.estimatedPopulation);
    const percentDeath =  getPercentage(stateInfo.totalDeath,stateInfo.estimatedPopulation);
    //const percentHospitalized =  getPercentage(stateInfo.hospitalizedCurrently,stateInfo.estimatedPopulation);
    //const percentPositiveOfTestedTotal = getPercentage(stateInfo.totalPositive,stateInfo.totalTestResults);

    return (
        <div className="dashboard-component overview">
            <div className="dashboard-component-title">{stateInfo.name} Overview</div>
            <div className="overview-data">
                <div className="overview-data-row">
                    <div className="data-label">Estimated Population</div>
                    <div className="data-number">{getDisplayNumber(stateInfo.estimatedPopulation)}</div>
                    <div className="data-percent"><span className="percent"></span></div>
                </div>
                <div className="overview-data-row">
                    <div className="data-label">Total Tested</div>
                    <div className="data-number">{getDisplayNumber(stateInfo.totalTestResults)}</div>
                    <div className="data-percent"><span className="percent">{percentTested}</span> of Population</div>
                </div>
                <div className="overview-data-row">
                    <div className="data-label">Total Positive</div>
                    <div className="data-number">{getDisplayNumber(stateInfo.totalPositive)}</div>
                    <div className="data-percent"><span className="percent">{percentPositive}</span> of Population</div>
                </div>
                <div className="overview-data-row">
                    <div className="data-label">Total Deaths</div>
                    <div className="data-number">{getDisplayNumber(stateInfo.totalDeath)}</div>
                    <div className="data-percent"><span className="percent">{percentDeath}</span> of Population</div>
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