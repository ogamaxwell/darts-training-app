/**
 * Created by Max on 2/1/2018.
 */

import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';


const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

export default store;
