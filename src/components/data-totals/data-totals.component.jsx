import React from 'react';
import {connect} from 'react-redux';

import './data-totals.css';

import {getDisplayNumber, getPercentage} from '../../utilities/formatting'
import {STATE_INFO} from '../../utilities/states-meta-data';

const DataTotals = ({selectedState, cdcTotalsByJurisdiction}) => {

    let jurisdictionData = cdcTotalsByJurisdiction.find(data => data.state===selectedState);
    let stateInfo = STATE_INFO[selectedState];
        
    const percentPositive =  getPercentage(jurisdictionData.total_cases,stateInfo.population);
    const percentDeath =  getPercentage(jurisdictionData.total_deaths,stateInfo.population);
    
    return (
        <div className="dashboard-component overview">
            <div className="dashboard-component-title">{stateInfo.name} Overview</div>
            <div className="overview-data">
                <div className="overview-data-row">
                    <div className="data-label">Total Population</div>
                    <div className="data-number">{getDisplayNumber(stateInfo.population)}</div>
                </div>
                <div className="overview-data-row">
                    <div className="data-label">Total Cases</div>
                    <div className="data-number">{getDisplayNumber(jurisdictionData.total_cases)}<span className="percent">({percentPositive})</span></div>
                    
                </div>
                <div className="overview-data-row">
                    <div className="data-label">Total Deaths</div>
                    <div className="data-number">{getDisplayNumber(jurisdictionData.total_deaths)}<span className="percent">({percentDeath})</span></div>

                </div>
                
            </div>            
            <div className="data-sources">Data:&nbsp;
                <span className="site-link" onClick={()=> window.open("https://data.cdc.gov/Case-Surveillance/United-States-COVID-19-Cases-and-Deaths-by-State-o/9mfq-cb36")}>Center For Disease Control</span>,&nbsp; 
                <span className="site-link" onClick={()=> window.open("https://www.census.gov/programs-surveys/popest.html")}>U.S. Census Bureau</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    selectedState: state.chartConfig.selectedState,
    stateInformation: state.chartConfig.stateInformation,
    cdcTotalsByJurisdiction: state.chartConfig.cdcTotalsByJurisdiction
});

export default connect(mapStateToProps)(DataTotals);