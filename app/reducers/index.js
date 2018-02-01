/**
 * Created by Max on 2/1/2018.
 */
import {combineReducers} from 'redux';

//import your different reducer files here
import checkoutReducers from './checkoutReducer';
import getCheckoutNumber from './getCheckoutNumber';

export default combineReducers({
    checkoutReducers,
    getCheckoutNumber,
});
