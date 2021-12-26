import ChartConfigTypes from './chart-config.types';

export const setStateSelection = (stateSelection) => ({
    type : ChartConfigTypes.SET_STATE_SELECTION,
    payload: stateSelection
});

export const setYearSelection = (yearSelection) => ({
    type : ChartConfigTypes.SET_YEAR_SELECTION,
    payload: yearSelection
});

export const setCOVID19Data = (data) => ({
    type : ChartConfigTypes.SET_COVID19_DATA,
    payload: data
});



