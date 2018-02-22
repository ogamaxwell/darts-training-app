/**
 * Created by Max on 2/20/2018.
 */

import {GAME_MODE} from '../actions/actionTypes';

const gameMode = (state=null, action) => {
  switch(action.type) {
      case GAME_MODE:
          return action.gameMode;
      default:
          return state;
  }
};

export default gameMode;


