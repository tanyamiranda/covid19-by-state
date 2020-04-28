import React from 'react'
import {connect} from 'react-redux'

import './chart-config.css';

import {DATE_RANGES,US_STATES_DATA,DATA_FIELD_GROUPS} from '../../utilities/data-fields';
import {setDateRangeSelection, setStateSelection, setFieldSelection} from '../../redux/chart-config/chart-config.actions';

const ChartConfiguration = ({selectedState, selectedDateRange, selectedFields, setStateSelection, setDateRangeSelection, setFieldSelection}) => {

    //console.log("ChartConfiguration()...");
    //console.log("selectedState=",selectedState);
    //console.log("selectedDateRange=",selectedDateRange);
    //console.log("selectedFields=",selectedFields);

    const fieldGroups = Object.keys(DATA_FIELD_GROUPS);
    const dateRangeKeys = Object.keys(DATE_RANGES);
    const stateKeys = Object.keys(US_STATES_DATA);

    const handleStateSelection = (event) => {
        setStateSelection(event.target.value);
    }
    const handleDateRangeSelection = (event) => {
        setDateRangeSelection(event.target.value);
    }
    const handleFieldSelection = (event) => {

        const checkedValue = event.target.checked;
        const fieldName = event.target.value;
        let currentSelectedFields = null;

        if (checkedValue) {
            currentSelectedFields = [...selectedFields];
            currentSelectedFields.push(fieldName);
        }
        else {
            currentSelectedFields = selectedFields.filter(value => value !== fieldName);
        }

        setFieldSelection(currentSelectedFields);
    }

    return (
        <div className="chart-configuration">
            <div className="top-section">
                <div className="config-section">
                    <div className="config-field">State:</div>
                    <select className="short-drop-down" name="stateSelection" defaultValue={selectedState} onChange={handleStateSelection}>
                        {stateKeys.map ((item) => 
                            <option  key={item} value={item} >{US_STATES_DATA[item]}</option>
                        )}
                    </select>
                </div>
                <div className="config-section">
                    <div className="config-field" >Date Range:</div>
                    <select className="short-drop-down" name="dateRangeSelection" defaultValue={selectedDateRange}  onChange={handleDateRangeSelection}>
                        {dateRangeKeys.map ((item) => 
                            <option key={item} value={item} >{DATE_RANGES[item]}</option>
                        )}
                    </select>
                </div>
            </div>
            <div className="config-section">
                <div className="config-field">Data Fields:</div>
                <div className="field-groups">
                {
                    
                    fieldGroups.map(group => 
                        
                        <div className="config-field-group" key={group}>
                            <div className="group">{group} Data </div>
                            {
                            DATA_FIELD_GROUPS[group].map( field => (
                                <div key={field}>
                                    <input className="field-option" type="checkbox" name="field-selection" 
                                        onChange={handleFieldSelection} 
                                        value={field}
                                        checked = {selectedFields.indexOf(field) === -1 ? false : true}
                                    />
                                    <label name="field-selection">{field}</label> 
                                </div>
                            ))
                            }
                        </div>
                    )
                }
                </div>
            </div>            
        </div>
    )

};

const mapStateToProps = state => ({
    selectedState: state.chartConfig.selectedState,
    selectedDateRange: state.chartConfig.selectedDateRange, 
    selectedFields: state.chartConfig.selectedFields
});

const mapDispatchToProps = dispatch => ({

    setStateSelection: (userSelectedState) => dispatch(setStateSelection(userSelectedState)),
    setDateRangeSelection: (userSelectedDateRange) => dispatch(setDateRangeSelection(userSelectedDateRange)),
    setFieldSelection: (userSelectedFields) => dispatch(setFieldSelection(userSelectedFields))

});

export default connect(mapStateToProps,mapDispatchToProps)(ChartConfiguration);