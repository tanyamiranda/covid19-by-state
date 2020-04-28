import ChartConfigTypes from './chart-config.types';

export const setStateSelection = (stateSelection) => ({
    type : ChartConfigTypes.SET_STATE_SELECTION,
    payload: stateSelection
});

export const setDateRangeSelection = (dateRangeSelection) => ({
    type : ChartConfigTypes.SET_DATE_RANGE_SELECTION,
    payload: dateRangeSelection
});

export const setFieldSelection = (fieldSelection) => ({
    type : ChartConfigTypes.SET_FIELD_SELECTION,
    payload: fieldSelection
});

export const setCOVID19Data = (data) => ({
    type : ChartConfigTypes.SET_COVID19_DATA,
    payload: data
});



