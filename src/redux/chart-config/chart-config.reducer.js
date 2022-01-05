import ChartConfigTypes from './chart-config.types';
import {USA_IDENTIFIER, YEARS_DEFAULT} from '../../utilities/data-fields';

const INITIAL_STATE = {
    statesHistoryData: null,
    stateInformation: null,
    countryHistoryData: null,
    deathsByAgeGroups: null,
    isDataLoaded: false,
    dataTimestamp: null,
    selectedState: null,
    selectedYear:null,   
    selectedFields: []    
};

const chartConfigReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case ChartConfigTypes.SET_COVID19_DATA: 
            return {
                selectedState: USA_IDENTIFIER,
                selectedYear: YEARS_DEFAULT,
                deathsByAgeGroups: action.payload.deathsByAgeGroups,
                isDataLoaded: true,
                cdcHistoryByJurisdiction: action.payload.cdcHistoryByJurisdiction,
                cdcTotalsByJurisdiction: action.payload.cdcTotalsByJurisdiction,
                cdcHospitalDataByJurisdiction : action.payload.cdcHospitalDataByJurisdiction
            }
            
        case ChartConfigTypes.SET_STATE_SELECTION:
            return {
                ...state,
                selectedState: action.payload
            }
        
        case ChartConfigTypes.SET_YEAR_SELECTION:
            return {
                ...state,
                selectedYear: action.payload
            }
        
        default:
            return state;
        
    }
}

export default chartConfigReducer;