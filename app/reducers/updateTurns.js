/**
 * Created by Max on 2/2/2018.
 */

import {UPDATE_TURNS, CLEAN_STATE} from '../actions/actionTypes';


const updateTurns = (state = [], action) => {
    switch(action.type){
        case UPDATE_TURNS:
            return action.turnsLeft;
        case CLEAN_STATE:
            return action.turnsLeft
        default:
            return state;
    }
};

export default updateTurns;
