import ChartConfigTypes from './chart-config.types';
import {DEFAULT_DATA_FIELD} from '../../utilities/data-fields';

const INITIAL_STATE = {
    statesHistoryData: null,
    stateInformation: null,
    countryHistoryData: null,
    dataRefreshedTimestamp: "",
    selectedState: "ALL",
    selectedDateRange: "30",   
    selectedFields: DEFAULT_DATA_FIELD    
}

const chartConfigReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case ChartConfigTypes.SET_COVID19_DATA: 
            return {
                ...state,
                statesHistoryData: action.payload.statesHistoryData,
                stateInformation: action.payload.stateInformation,
                countryHistoryData: action.payload.countryHistoryData,
                dataRefreshedTimestamp: (new Date()).toLocaleString()
            }
        case ChartConfigTypes.SET_STATE_SELECTION:
            return {
                ...state,
                selectedState: action.payload
            }
        
        case ChartConfigTypes.SET_FIELD_SELECTION:
            return {
                ...state,
                selectedFields: action.payload
            }
        
        case ChartConfigTypes.SET_DATE_RANGE_SELECTION:
            return {
                ...state,
                selectedDateRange: action.payload
            }
        
        default:
            return state;
        
    }
}

export default chartConfigReducer;