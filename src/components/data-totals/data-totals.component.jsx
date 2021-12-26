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
        <div className="dashboard-component overview">
            <div className="dashboard-component-title">{stateInfo.name} Current Overview</div>
            {dataFetchedSuccessfully ? 
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
                        <div className="data-label">Hospitalized</div>
                        <div className="data-number">{getDisplayNumber(jurisdictionData.inpatient_beds_covid)}</div>
                        <div className="percent">{percentHospitalization} of {getDisplayNumber(jurisdictionData.inpatient_beds)}<br/>Total Inpatient Beds Available</div>
                    </div>
                    <div className="data-row">
                        <div className="data-label">Intensive Care (ICU)</div>
                        <div className="data-number">{getDisplayNumber(jurisdictionData.icu_beds_covid)}</div>
                        <div className="percent">{percentICU} of {getDisplayNumber(jurisdictionData.icu_beds)}<br/>Total ICU Beds Available</div>
                    </div>
                </div>            
            : 
                <div>Problem fetching data from CDC site...</div>
            }
            <div className="data-sources">
                <div>** Estimated population of {selectedState}: {getDisplayNumber(stateInfo.population)}</div>
                Data:&nbsp;
                <span className="site-link" onClick={()=> window.open("https://data.cdc.gov/Case-Surveillance/United-States-COVID-19-Cases-and-Deaths-by-State-o/9mfq-cb36")}>CDC</span>,&nbsp; 
                <span className="site-link" onClick={()=> window.open("https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh")}>Healthdata.gov</span>,&nbsp; 
                <span className="site-link" onClick={()=> window.open("https://www2.census.gov/programs-surveys/decennial/2020/data/apportionment/population-change-data-table.pdf")}>U.S. Census Bureau</span>    
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