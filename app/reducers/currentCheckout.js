/**
 * Created by Max on 2/1/2018.
 */

import {UPDATE_CHECKOUT_NUMBER, SUBMIT_BUTTON_PRESSED, CLEAN_STATE_CHECKOUT} from '../actions/actionTypes';

const updateCurrentCheckout  = (state =[], action) => {
    switch(action.type){
        case UPDATE_CHECKOUT_NUMBER:
            return action.currentCheckout;
        case SUBMIT_BUTTON_PRESSED:
            return action.currentCheckout;
        case CLEAN_STATE_CHECKOUT:
            return action.currentCheckout;
        default:
            return state;
    }
};

export default updateCurrentCheckout;
