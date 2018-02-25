/**
 * Created by Max on 2/2/2018.
 */

import {UPDATE_SELECTION, CLEAN_STATE} from '../actions/actionTypes';


const updateSelection = (state = [], action) => {
    switch(action.type){
        case UPDATE_SELECTION:
            return action.selection;
        case CLEAN_STATE:
            return action.selection;
        default:
            return state;
    }
};

export default updateSelection;
