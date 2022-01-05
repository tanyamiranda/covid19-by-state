import React from 'react';
import {connect} from 'react-redux';

import './data-totals.css';

import {getDisplayNumber, getPercentage} from '../../utilities/formatting'
import {STATE_INFO} from '../../utilities/states-meta-data';

const DataTotals = ({selectedState, cdcTotalsByJurisdiction}) => {

    const dataFetchedSuccessfully = Array.isArray(cdcTotalsByJurisdiction) && cdcTotalsByJurisdiction.length > 0;

    let stateInfo = STATE_INFO[selectedState];

    let jurisdictionData = [];        
    let percentPositive =  0;
    let percentDeath =  0
    let percentHospitalization = 0;
    let percentICU = 0;
    let percentDeathOfPositive = 0;

    if (dataFetchedSuccessfully) {
        jurisdictionData = cdcTotalsByJurisdiction.find(data => data.state===selectedState);
        percentPositive =  getPercentage(jurisdictionData.total_cases,stateInfo.population);
        percentDeath =  getPercentage(jurisdictionData.total_deaths,stateInfo.population);
        percentHospitalization =  getPercentage(jurisdictionData.inpatient_beds_covid,jurisdictionData.inpatient_beds);
        percentICU =  getPercentage(jurisdictionData.icu_beds_covid,jurisdictionData.icu_beds);
        percentDeathOfPositive = getPercentage(jurisdictionData.total_deaths, jurisdictionData.total_cases);
    }
    
    return (
        <div className="data-totals-component">
            {dataFetchedSuccessfully ? 
                <div>
                    <div className='data-totals-title'>Current Totals</div>
                    <div className="data-totals">
                            <div className="data-row">
                                <div className="data-label">Total Cases</div>
                                <div className="data-number">{getDisplayNumber(jurisdictionData.total_cases)}</div>
                                <div className="percent">{percentPositive} of Est. Population**</div>
                            </div>
                            <div className="data-row">
                                <div className="data-label">Total Deaths</div>
                                <div className="data-number">{getDisplayNumber(jurisdictionData.total_deaths)}</div>
                                <div className="percent">{percentDeath} of Est. Population** <br/>{percentDeathOfPositive} of Total Cases</div>
                            </div>
                        
                            <div className="data-row">
                                <div className="data-label">Hospitalizations</div>
                                <div className="data-number">{getDisplayNumber(jurisdictionData.inpatient_beds_covid)}</div>
                                <div className="percent">{percentHospitalization} of {getDisplayNumber(jurisdictionData.inpatient_beds)}<br/>Inpatient Beds Available</div>
                            </div>
                            <div className="data-row">
                                <div className="data-label">Intensive Care (ICU)</div>
                                <div className="data-number">{getDisplayNumber(jurisdictionData.icu_beds_covid)}</div>
                                <div className="percent">{percentICU} of {getDisplayNumber(jurisdictionData.icu_beds)}<br/>ICU Beds Available</div>
                            </div>
                    </div>        
                </div>    
            : 
                <div>Problem fetching data from CDC site...</div>
            }
            <div className="more-data">
                <div>** Estimated population of {selectedState}: {getDisplayNumber(stateInfo.population)}</div>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    selectedState: state.chartConfig.selectedState,
    stateInformation: state.chartConfig.stateInformation,
    cdcTotalsByJurisdiction: state.chartConfig.cdcTotalsByJurisdiction,
});

export default connect(mapStateToProps)(DataTotals);