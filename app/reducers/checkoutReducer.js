/**
 * Created by Max on 2/1/2018.
 */


import {ADD_CHECKOUT_NUMBER} from '../actions/actionTypes';

const checkoutReducers = (state=[], action) => {
    switch(action.type){
        case ADD_CHECKOUT_NUMBER:
            return [
                ...state,
                {
                    checkoutNumber: action.checkoutNumber,
                }
            ];
        default:
            return state
    }
};

export default checkoutReducers;