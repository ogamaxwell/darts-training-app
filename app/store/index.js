/**
 * Created by Max on 2/1/2018.
 */

import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunkMiddleware from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
