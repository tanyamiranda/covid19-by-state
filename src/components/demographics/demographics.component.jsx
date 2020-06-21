import React from 'react';
import {connect} from 'react-redux';

import './demographics.css';

import {getDisplayNumber,getDateDisplayString} from '../../utilities/formatting';

const Demographics = ({selectedState, stateInformation, deathsByAgeGroups}) => {

    const compareTextNumbers = (a, b) => {

        let numA = Number(a.substring(0,2).replace("-","").toLowerCase().replace("un","0"));
        let numB = Number(b.substring(0,2).replace("-","").toLowerCase().replace("un","0"));

        if (numA > numB) return 1;
        if (numA < numB) return -1;

        return 0;
    }

    const dataFetchedSuccessfully = Array.isArray(deathsByAgeGroups) && deathsByAgeGroups.length > 0;

    const dataDate = dataFetchedSuccessfully ? getDateDisplayString(deathsByAgeGroups[0].data_as_of) : getDateDisplayString(Date.now());

    return(
        <div className="dashboard-component demographics">
            <div className="dashboard-component-title">{stateInformation[selectedState].name} <span>Deaths By Age Group</span></div>

            {dataFetchedSuccessfully ? 
                <div className="demo-data">
                    <div className="demo-data-row demo-data-header">
                        <div className="age-group">Age Group</div>
                        <div className="data-number">Deaths</div>
                    </div>
                    {deathsByAgeGroups
                    .filter(data => data.state.toLowerCase() === stateInformation[selectedState].name.toLowerCase() && data.age_group.includes('year'))
                    .sort((a,b) => compareTextNumbers(a.age_group,b.age_group))
                    .map((data, index) => (
                        <div key={index} className="demo-data-row">
                            <div className="age-group">{data.age_group}</div>                    
                            <div className="data-number">{getDisplayNumber(data.sum_covid_19_deaths)}</div>
                        </div>
                    ))}
                </div>
                    
                
            : 
                <div className="data-sources">Problem fetching data from CDC...</div>
            }
            <div className="data-sources">Last Updated {dataDate}</div>
            <div className="data-sources">**Some data may have been suppressed in accordance with NCHS confidentiality standards.</div>
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