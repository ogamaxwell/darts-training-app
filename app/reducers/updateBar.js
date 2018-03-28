/**
 * Created by Max on 3/11/2018.
 */

import { TOGGLE_SINGLE, TOGGLE_DOUBLE, TOGGLE_TRIPLE, TOGGLE_CLEAN } from '../actions/actionTypes';

const updateBar = (state = [], action) => {
    switch(action.type){
        case TOGGLE_SINGLE:{
            return action.singleSelected;
        }
        case TOGGLE_DOUBLE: {
            return action.doubleSelected;
        }
        case TOGGLE_TRIPLE: {
            return action.tripleSelected;
        }
        case TOGGLE_CLEAN: {
            return action.barData;
        }
        default:
            return state;
    }
};

export default updateBar;

