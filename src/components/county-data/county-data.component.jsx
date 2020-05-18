import React from 'react';
import {connect} from 'react-redux';

import './county-data.css';

import {getDisplayNumber} from '../../utilities/formatting';

const CountyData = ({selectedState, stateInformation, stateCountyInfo}) => {

    return (    
        <div className="dashboard-component county-data-set">
            <div className="dashboard-component-title">{stateInformation[selectedState].name} Counties</div>
            <div className="county-data"></div>
            <div className="county-data-row county-data-header">
                <div className="county-data-header">County</div>
                <div className="data-number county-data-header">Cases</div>
                <div className="data-number county-data-header">Deaths</div>
            </div>
            {stateCountyInfo.filter(data => data.stateName.toLowerCase() === stateInformation[selectedState].name.toLowerCase() && (data.deaths > 0 || data.cases > 0)).sort((a,b) => b.deaths - a.deaths).map((data, index) => (             
                <div key={index} className="county-data-row" >
                    <div>{data.county}</div>                    
                    <div className="data-number">{getDisplayNumber(data.cases)}</div>
                    <div className="data-number">{getDisplayNumber(data.deaths)}</div>
                </div>
            ))}
            <div className="data-sources">Data:&nbsp;
            <span className="site-link" onClick={()=> window.open("https://github.com/nytimes/covid-19-data/blob/master/live/us-counties.csv")}>N.Y. Times</span>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    selectedState: state.chartConfig.selectedState,
    stateInformation: state.chartConfig.stateInformation,
    stateCountyInfo: state.chartConfig.stateCountyInfo
});

export default connect(mapStateToProps)(CountyData);