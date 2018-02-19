/**
 * Created by Max on 2/9/2018.
 */

import {FETCH_SELECTION_DATA} from '../actions/actionTypes';

const bestCombo = (state=[], action) => {
  switch(action.type){
      case FETCH_SELECTION_DATA:
          return action.bestCombo;
      default:
          return state;
  }
};

export default bestCombo;
