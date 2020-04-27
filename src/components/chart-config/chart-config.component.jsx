import React from 'react'

import './chart-config.css';

import ShortDropDown from '../dropdown/dropdown.component';
import {
    DATA_FIELD_VALUES, 
    DATE_RANGES, 
    US_STATES_DATA  } from '../utilities/data-fields';


const ChartConfiguration = ({dataRefreshedTimestamp, selectedState, selectedDateRange, selectedFields, stateSelectionHandler, dateSelectionHander, fieldSelectionHandler}) => {

    //console.log("selectedState=",selectedState);
    //console.log("selectedFields=",selectedFields);
    //console.log("selectedDateRange=",selectedDateRange);

    return (
        <div className="chart-configuration">
            <form>
                <div className="config-field">Date Loaded:</div>
                <div>{dataRefreshedTimestamp}</div>
                <br/>
                <div className="config-field">State:</div>
                <ShortDropDown 
                    fieldName="states-list" 
                    optionList={Object.keys(US_STATES_DATA)}
                    labelsList={US_STATES_DATA} 
                    defaultSelected={selectedState} 
                    onChangeEvent={stateSelectionHandler} 
                />
                <br/><br/>
                <div className="config-field" >Date Range:</div>
                <ShortDropDown 
                    fieldName="date-range-list" 
                    optionList={Object.keys(DATE_RANGES)} 
                    labelsList={DATE_RANGES}
                    defaultSelected={selectedDateRange} 
                    onChangeEvent={dateSelectionHander} />
                <br/><br/>
                <div className="config-field">Data Fields:</div>
                {
                    DATA_FIELD_VALUES.map( field => 
                        <div key={field}>
                            <input className="field-option" type="checkbox" name="field-selection" 
                                onChange={fieldSelectionHandler} 
                                value={field}
                                checked = {!selectedFields[field] ? false : true}
                            />
                            <label name="field-selection">{field}</label> 
                        </div>
                    )
                }
                
            </form>
            
        </div>
    )

};

export default ChartConfiguration;