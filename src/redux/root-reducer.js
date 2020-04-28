import {combineReducers} from 'redux';

import chartConfigReducer from './chart-config/chart-config.reducer';

export default combineReducers({
    chartConfig: chartConfigReducer
});
