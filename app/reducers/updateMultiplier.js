/**
 * Created by Max on 2/2/2018.
 */

import {UPDATE_MULTIPLIER} from '../actions/actionTypes';


const updateMultiplier = (state = [], action) => {
    switch(action.type){
        case UPDATE_MULTIPLIER:
            return [action.multiplier, action.label];
        default:
            return state;
    }
};

export default updateMultiplier;
