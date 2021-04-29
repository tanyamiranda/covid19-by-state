import ChartConfigTypes from './chart-config.types';
import {USA_IDENTIFIER, DATE_RANGES_DEFAULT} from '../../utilities/data-fields';

const INITIAL_STATE = {
    statesHistoryData: null,
    stateInformation: null,
    countryHistoryData: null,
    stateCountyInfo: null,
    deathsByAgeGroups: null,
    dataRefreshedTimestamp: null,
    selectedState: null,
    selectedDateRange: null,   
    selectedFields: []    
};

const chartConfigReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case ChartConfigTypes.SET_COVID19_DATA: 
            return {
                selectedState: USA_IDENTIFIER,
                selectedDateRange: DATE_RANGES_DEFAULT,    
                stateCountyInfo: action.payload.stateCountyInfo,
                deathsByAgeGroups: action.payload.deathsByAgeGroups,
                dataRefreshedTimestamp: (new Date()).toLocaleString(),
                cdcHistoryByJurisdiction: action.payload.cdcHistoryByJurisdiction,
                cdcTotalsByJurisdiction: action.payload.cdcTotalsByJurisdiction
            }
            
        case ChartConfigTypes.SET_STATE_SELECTION:
            return {
                ...state,
                selectedState: action.payload
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