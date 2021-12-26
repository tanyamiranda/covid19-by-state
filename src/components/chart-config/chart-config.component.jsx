import React from 'react'
import {connect} from 'react-redux'

import './chart-config.css';
import {YEARS, YEARS_DEFAULT, YEAR_KEYS} from '../../utilities/data-fields';
import {STATE_INFO} from '../../utilities/states-meta-data';
import {setStateSelection, setYearSelection} from '../../redux/chart-config/chart-config.actions';

const ChartConfiguration = ({selectedState, selectedYear, setStateSelection, setYearSelection}) => {

    const statesKeys = Object.keys(STATE_INFO);
    
    const handleStateSelection = (event) => {
        setStateSelection(event.target.value);
    }

    const handleYearSelection = (event) => {
        setYearSelection(event.target.value);
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
                
                <span className="config-year">
                    <select name="yearSelection" defaultValue={!selectedYear ? YEARS_DEFAULT : selectedYear}  onChange={handleYearSelection}>
                        {YEAR_KEYS.map ((item) => 
                            <option key={item} value={item} >{YEARS[item]}</option>
                        )}
                    </select>
                </span>
                
            </div>            
        </div>
    )
};

const mapStateToProps = state => ({
    selectedState: state.chartConfig.selectedState,
    selectedYear: state.chartConfig.selectedYear
});

const mapDispatchToProps = dispatch => ({
    setStateSelection: (userSelectedState) => dispatch(setStateSelection(userSelectedState)),
    setYearSelection: (userSelectedYear) => dispatch(setYearSelection(userSelectedYear))

});

export default connect(mapStateToProps,mapDispatchToProps)(ChartConfiguration);