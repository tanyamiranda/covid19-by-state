import React, { useState, useEffect} from 'react';
import {connect} from 'react-redux';

import './county-data.css';

import {getDisplayNumber} from '../../utilities/formatting';
import {COUNTY_SORT_FIELDS} from '../../utilities/data-fields';

const CountyData = ({selectedState, stateInformation, stateCountyInfo}) => {   

    const [sortField, setSortField] = useState(COUNTY_SORT_FIELDS.SORT_BY_DEATHS);
    const [countyData, setCountyData] = useState(null);

    useEffect(() => {

        const tempData = [...stateCountyInfo]
            .filter(data => data.stateName.toLowerCase() === stateInformation[selectedState].name.toLowerCase())
            .sort((a,b) => b.deaths - a.deaths)

        setSortField(COUNTY_SORT_FIELDS.SORT_BY_DEATHS);
        setCountyData(tempData);

    },[selectedState, stateInformation, stateCountyInfo]);

    const sortCountyData =(fieldName) => {
        
        const tempData = [...countyData];

        if (fieldName === COUNTY_SORT_FIELDS.SORT_BY_COUNTY) {
            tempData.sort(function(a, b){
                var x = a.county.toLowerCase();
                var y = b.county.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
              });
        }
        else {  
            tempData.sort((a,b) => b[fieldName] - a[fieldName]);
        }
        setSortField(fieldName);
        setCountyData(tempData);
    }

    const countyLabel = "County" + (sortField === COUNTY_SORT_FIELDS.SORT_BY_COUNTY ? "↓" : "");
    const casesLabel = (sortField === COUNTY_SORT_FIELDS.SORT_BY_CASES ? "↓" : "") + "Cases";
    const deathsLabel = (sortField === COUNTY_SORT_FIELDS.SORT_BY_DEATHS ? "↓" : "") + "Deaths";

    return (    
        <div className="dashboard-component county-data-set">
            <div className="dashboard-component-title">{stateInformation[selectedState].name} Totals by County</div>
            <div className="county-data">
                <div className="county-data-row county-data-header">
                    <div className="county-data-header, site-link" onClick={() => sortCountyData(COUNTY_SORT_FIELDS.SORT_BY_COUNTY)}>{countyLabel}</div>
                    <div className="align-right county-data-header, site-link" onClick={() => sortCountyData(COUNTY_SORT_FIELDS.SORT_BY_CASES)}>{casesLabel}</div>
                    <div className="align-right county-data-header, site-link" onClick={() => sortCountyData(COUNTY_SORT_FIELDS.SORT_BY_DEATHS)}>{deathsLabel}</div>
                </div>
                {!countyData ? null : countyData.map((data, index) => (             
                    <div key={index} className="county-data-row" >
                        <div>{data.county}</div>                    
                        <div className="align-right">{getDisplayNumber(data.cases)}</div>
                        <div className="align-right">{getDisplayNumber(data.deaths)}</div>
                    </div>
                ))}
            </div>
            <div className="data-sources">**Counties with no deaths or cases have been omitted.</div>
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