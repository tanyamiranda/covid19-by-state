import React from 'react'

import './chart-config.css';

import ShortDropDown from '../dropdown/dropdown.component';
import {
    DATE_RANGES, 
    US_STATES_DATA,
    DATA_FIELD_GROUPS  
} from '../utilities/data-fields';


const ChartConfiguration = ({selectedState, selectedDateRange, selectedFields, stateSelectionHandler, dateSelectionHander, fieldSelectionHandler, groupSelectionHandler}) => {

    //console.log("selectedState=",selectedState);
    //console.log("selectedFields=",selectedFields);
    //console.log("selectedDateRange=",selectedDateRange);

    const fieldGroups = Object.keys(DATA_FIELD_GROUPS);

    return (
        <div className="chart-configuration">
            <div className="top-section">
                <div className="config-section">
                    <div className="config-field">State:</div>
                    <ShortDropDown 
                        fieldName="states-list" 
                        optionList={Object.keys(US_STATES_DATA)}
                        labelsList={US_STATES_DATA} 
                        defaultSelected={selectedState} 
                        onChangeEvent={stateSelectionHandler} 
                    />
                </div>
                <div className="config-section">
                    <div className="config-field" >Date Range:</div>
                    <ShortDropDown 
                        fieldName="date-range-list" 
                        optionList={Object.keys(DATE_RANGES)} 
                        labelsList={DATE_RANGES}
                        defaultSelected={selectedDateRange} 
                        onChangeEvent={dateSelectionHander} />
                </div>
            </div>
            <div className="config-section">
                <div className="config-field">Data Fields:</div>
                <div className="field-groups">
                {
                    
                    fieldGroups.map(group => 
                        
                        <div className="config-field-group" key={group}>
                            <div className="group">{group} Data</div>
                            {
                            DATA_FIELD_GROUPS[group].map( field => (
                                <div key={field}>
                                    <input className="field-option" type="checkbox" name="field-selection" 
                                        onChange={fieldSelectionHandler} 
                                        value={field}
                                        checked = {!selectedFields[field] ? false : true}
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

export default ChartConfiguration;