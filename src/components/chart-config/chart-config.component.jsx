import React from 'react'
import {connect} from 'react-redux'

import './chart-config.css';
import ConfigSection from '../config-section/config-section.component';
import {DATE_RANGES,US_STATES_DATA,DATA_FIELD_GROUPS, DATA_FIELD_GROUPS_DISPLAY_NAME} from '../../utilities/data-fields';
import {setDateRangeSelection, setStateSelection, setFieldSelection} from '../../redux/chart-config/chart-config.actions';

const ChartConfiguration = ({selectedState, selectedDateRange, setStateSelection, setDateRangeSelection, setFieldSelection}) => {

    //console.log("ChartConfiguration()...");
    //console.log("selectedState=",selectedState);
    //console.log("selectedDateRange=",selectedDateRange);
    //console.log("selectedFields=",selectedFields);

    const fieldGroupsMap = {};
    const fieldGroups = Object.keys(DATA_FIELD_GROUPS);
    fieldGroups.forEach(groupName => {
        fieldGroupsMap[groupName] = DATA_FIELD_GROUPS_DISPLAY_NAME[groupName];
    });

    const handleStateSelection = (event) => {
        setStateSelection(event.target.value);
    }
    const handleDateRangeSelection = (event) => {
        setDateRangeSelection(event.target.value);
    }
    const handleGroupSelection = (event) => {  
        setFieldSelection(DATA_FIELD_GROUPS[event.target.value]);
    }

    return (
        <div className="chart-configuration dashboard-component">
            <div className="top-section">
                <ConfigSection 
                    fieldName="stateSelection"
                    fieldDefaultValue = {selectedState}
                    fieldClickEvent= {handleStateSelection}
                    fieldDataMap={US_STATES_DATA}
                />
                <ConfigSection 
                    fieldName="dateRangeSelection"
                    fieldDefaultValue = {selectedDateRange}
                    fieldClickEvent= {handleDateRangeSelection}
                    fieldDataMap={DATE_RANGES}
                />
                <ConfigSection 
                    fieldName="datasetSelection"
                    fieldDefaultValue = ""
                    fieldClickEvent= {handleGroupSelection}
                    fieldDataMap={fieldGroupsMap}
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
    setDateRangeSelection: (userSelectedDateRange) => dispatch(setDateRangeSelection(userSelectedDateRange)),
    setFieldSelection: (userSelectedFields) => dispatch(setFieldSelection(userSelectedFields))
});

export default connect(mapStateToProps,mapDispatchToProps)(ChartConfiguration);