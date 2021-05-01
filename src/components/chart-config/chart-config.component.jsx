import React from 'react'
import {connect} from 'react-redux'

import './chart-config.css';
//import ConfigSection from '../config-section/config-section.component';
import {DATE_RANGES,DATE_RANGES_DEFAULT} from '../../utilities/data-fields';
import {STATE_INFO} from '../../utilities/states-meta-data';
import {setDateRangeSelection, setStateSelection} from '../../redux/chart-config/chart-config.actions';

const ChartConfiguration = ({selectedState, selectedDateRange, setStateSelection, setDateRangeSelection}) => {

    //console.log("ChartConfiguration()...");
    //console.log("selectedState=",selectedState);
    //console.log("selectedDateRange=",selectedDateRange);
    //console.log("selectedFields=",selectedFields);

    const dateRangeKeys = Object.keys(DATE_RANGES);
    const statesKeys = Object.keys(STATE_INFO);
    
    const handleStateSelection = (event) => {
        setStateSelection(event.target.value);
    }
    const handleDateRangeSelection = (event) => {
        setDateRangeSelection(event.target.value);
    }

    return (
        <div className="chart-configuration">
            <div className="top-section">
                <span className="config-section">
                    <select name="stateSelection" defaultValue={!selectedState ? "USA" : selectedState}  onChange={handleStateSelection}>
                        {statesKeys.map ((item) => 
                            <option key={item} value={item} >{STATE_INFO[item].name}</option>
                        )}
                    </select>
                </span>
                <span className="config-section">
                    <select name="dateRangeSelection" defaultValue={!selectedDateRange ? DATE_RANGES_DEFAULT : selectedDateRange}  onChange={handleDateRangeSelection}>
                        {dateRangeKeys.map ((item) => 
                            <option key={item} value={item} >{DATE_RANGES[item]}</option>
                        )}
                    </select>
                </span>
                
            </div>            
        </div>
    )
};

const mapStateToProps = state => ({
    selectedState: state.chartConfig.selectedState,
    selectedDateRange: state.chartConfig.selectedDateRange
});

const mapDispatchToProps = dispatch => ({
    setStateSelection: (userSelectedState) => dispatch(setStateSelection(userSelectedState)),
    setDateRangeSelection: (userSelectedDateRange) => dispatch(setDateRangeSelection(userSelectedDateRange))
});

export default connect(mapStateToProps,mapDispatchToProps)(ChartConfiguration);