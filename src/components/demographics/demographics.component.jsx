import React from 'react';
import {connect} from 'react-redux';

import './demographics.css';

import DeathByAgeGroup from './deaths-by-age.component' ;

const Demographics = ({selectedState, stateInformation, deathsByAgeGroups}) => {

    const dataFetchedSuccessfully = Array.isArray(deathsByAgeGroups) && deathsByAgeGroups.length > 0;

    return(
        <div className="dashboard-component demographics">
            <div className="dashboard-component-title">{stateInformation[selectedState].name} <span>Total Deaths By Age Group</span></div> 
            <div>
                {dataFetchedSuccessfully ? 
                    <DeathByAgeGroup />
                : 
                    <div>Problem fetching data from CDC site...</div>
                }
            </div>    
            <div className="data-sources">Data tracked since 2/1/2020</div>
            <div className="data-sources">++Number of deaths reported in this table are the total number of deaths received and coded as of the date of analysis. Click on the CDC link below for details.</div>
            <div className="data-sources">Data:&nbsp;
                <span className="site-link" onClick={()=> window.open("https://data.cdc.gov/NCHS/Provisional-COVID-19-Death-Counts-by-Sex-Age-and-S/9bhg-hcku")}>Center For Disease Control</span><br/>
            </div>
        </div>

    )

}
const mapStateToProps = state => ({
    selectedState: state.chartConfig.selectedState,
    stateInformation: state.chartConfig.stateInformation,
    deathsByAgeGroups: state.chartConfig.deathsByAgeGroups
});

export default connect(mapStateToProps)(Demographics);