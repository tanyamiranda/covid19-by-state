import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewareObjects = [];

//Only use logger in development environement
if (process.env.NODE_ENV === 'development') {
    middlewareObjects.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewareObjects));

export default store;