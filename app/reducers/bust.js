/**
 * Created by Max on 3/9/2018.
 */


import {BUST} from '../actions/actionTypes';

const bust = (state = false, action) => {
    switch(action.type){
        case BUST:
            return action.bust;
        default:
            return state;
    }
};

export default bust;
