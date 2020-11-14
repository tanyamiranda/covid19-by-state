import React from 'react'
import {connect} from 'react-redux'

import './chart-config.css';
import ConfigSection from '../config-section/config-section.component';
import {DATE_RANGES,US_STATES_DATA,DATE_RANGES_DEFAULT} from '../../utilities/data-fields';
import {setDateRangeSelection, setStateSelection} from '../../redux/chart-config/chart-config.actions';

const ChartConfiguration = ({selectedState, selectedDateRange, setStateSelection, setDateRangeSelection}) => {

    //console.log("ChartConfiguration()...");
    //console.log("selectedState=",selectedState);
    //console.log("selectedDateRange=",selectedDateRange);
    //console.log("selectedFields=",selectedFields);


    const handleStateSelection = (event) => {
        setStateSelection(event.target.value);
    }
    const handleDateRangeSelection = (event) => {
        setDateRangeSelection(event.target.value);
    }

    return (
        <div className="chart-configuration">
            <div className="top-section">
                <ConfigSection 
                    fieldName="stateSelection"
                    fieldDefaultValue = {selectedState}
                    fieldClickEvent= {handleStateSelection}
                    fieldDataMap={US_STATES_DATA}
                />
                <ConfigSection 
                    fieldName="dateRangeSelection"
                    fieldDefaultValue = {!selectedDateRange ? DATE_RANGES_DEFAULT : selectedDateRange}
                    fieldClickEvent= {handleDateRangeSelection}
                    fieldDataMap={DATE_RANGES}
                />
                
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