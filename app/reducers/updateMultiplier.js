/**
 * Created by Max on 2/2/2018.
 */

import {UPDATE_MULTIPLIER, CLEAN_STATE} from '../actions/actionTypes';


const updateMultiplier = (state = [], action) => {
    switch(action.type){
        case UPDATE_MULTIPLIER:
            return [action.multiplier, action.label];
        case CLEAN_STATE:
            return action.multiplier;
        default:
            return state;
    }
};

export default updateMultiplier;
