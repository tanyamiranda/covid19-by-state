import React from 'react';
import {connect} from 'react-redux';

import './demographics.css';
import {STATE_INFO} from '../../utilities/states-meta-data';
import DeathByAgeGroup from './deaths-by-age.component' ;

const Demographics = ({selectedState, deathsByAgeGroups}) => {

    const dataFetchedSuccessfully = Array.isArray(deathsByAgeGroups) && deathsByAgeGroups.length > 0;

    return(
        <div className="dashboard-component demographics">
            <div className="dashboard-component-title">All Deaths By Age Group <span>for {STATE_INFO[selectedState].name}</span> <span>Since January 2020</span></div> 
            <div>
                {dataFetchedSuccessfully ? 
                    <DeathByAgeGroup />
                : 
                    <div>Problem fetching data from CDC site...</div>
                }
            </div>    
            <div className="data-sources">
                Data:&nbsp; <span className="site-link" onClick={()=> window.open("https://data.cdc.gov/NCHS/Provisional-COVID-19-Death-Counts-by-Sex-Age-and-S/9bhg-hcku")}>Center For Disease Control</span><br/>
            </div>
        </div>

    )

}
const mapStateToProps = state => ({
    selectedState: state.chartConfig.selectedState,
    deathsByAgeGroups: state.chartConfig.deathsByAgeGroups
});

export default connect(mapStateToProps)(Demographics);