/**
 * Created by Max on 2/2/2018.
 */

import {UPDATE_SELECTIONS_MADE, CLEAN_STATE} from '../actions/actionTypes';


const updateSelectionsMade = (state = [], action) => {
    switch(action.type){
        case UPDATE_SELECTIONS_MADE:
            return [...state, action.selectionsMade];
        case CLEAN_STATE:
            return action.selectionsMade;
        default:
            return state;
    }
};

export default updateSelectionsMade;
