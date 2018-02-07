/**
 * Created by Max on 2/1/2018.
 */

import {FETCH_CHECKOUT_NUMBER} from '../actions/actionTypes';

const getCheckoutNumber = (state = [], action) => {
    switch(action.type) {
        case FETCH_CHECKOUT_NUMBER:
            return action.checkoutNumber;
        default:
            return state;
    }
};

export default getCheckoutNumber;