import React from 'react';
import {connect} from 'react-redux';

import './demographics.css';

import {getDisplayNumber} from '../../utilities/formatting';

const Demographics = ({selectedState, stateInformation, deathsByAgeGroups}) => {

    const compareTextNumbers = (a, b) => {
        let numA = Number(a.substring(0,2).replace("-","").toLowerCase().replace("Un","0"));
        let numB = Number(b.substring(0,2).replace("-","").toLowerCase().replace("Un","0"));

        if (numA > numB) return 1;
        if (numA < numB) return -1;

        return 0;
    }

    return(
        <div className="dashboard-component demographics">
            <div className="dashboard-component-title">{stateInformation[selectedState].name} <span>Deaths By Age Group</span></div>
            <div class="demo-data">
                <div className="demo-data-row demo-data-header">
                    <div className="age-group">Age Group</div>
                    <div className="data-number">Deaths</div>
                </div>
                {deathsByAgeGroups
                .filter(data => data.state.toLowerCase() === stateInformation[selectedState].name.toLowerCase() && data.age_group.includes('years'))
                .sort((a,b) => compareTextNumbers(a.age_group,b.age_group))
                .map((data, index) => (
                    <div key={index} className="demo-data-row">
                        <div className="age-group">{data.age_group}</div>                    
                        <div className="data-number">{getDisplayNumber(data.sum_total_deaths)}</div>
                    </div>
                ))}
            </div>
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