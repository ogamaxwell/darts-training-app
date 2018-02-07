/**
 * Created by Max on 2/2/2018.
 */

import {UPDATE_SELECTION} from '../actions/actionTypes';


const updateSelection = (state = [], action) => {
    switch(action.type){
        case UPDATE_SELECTION:
            return action.selection;
        default:
            return state;
    }
};

export default updateSelection;
