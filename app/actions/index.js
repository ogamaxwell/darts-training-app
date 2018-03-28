/**
 * Created by Max on 2/1/2018.
 */


import {ADD_CHECKOUT_NUMBER,
        FETCH_CHECKOUT_NUMBER,
        UPDATE_CHECKOUT_NUMBER,
        UPDATE_MULTIPLIER,
        UPDATE_SELECTION,
        SUBMIT_BUTTON_PRESSED,
        UPDATE_SELECTIONS_MADE,
        UPDATE_TURNS,
        CLEAN_STATE,
        CLEAN_STATE_CHECKOUT,
        FETCH_SELECTION_DATA,
        GAME_MODE,
        BUST,
        TOGGLE_TRIPLE,
        TOGGLE_DOUBLE,
        TOGGLE_SINGLE,
        TOGGLE_CLEAN,
        POST_USER_CHECKOUT_DATA,
        } from './actionTypes';



//action: adding checkout number to the state
export const addCheckoutNumber = (checkoutNumber) => {
    return {
        type:ADD_CHECKOUT_NUMBER,
        checkoutNumber: checkoutNumber,
    }
};

export const getTwoDartCheckoutNumber = () => {
    return(dispatch) => {
        fetch("https://fathomless-eyrie-63078.herokuapp.com/outs/game/2dart")
            .then(res => {
                return res.json();
            })
            .then(checkoutData => {
                let turns = checkoutData['outCombo'].length;
                checkoutData = checkoutData['outNum'];
                dispatch({
                    type: FETCH_CHECKOUT_NUMBER,
                    checkoutNumber: checkoutData,
                });
                dispatch({
                    type: UPDATE_CHECKOUT_NUMBER,
                    currentCheckout: checkoutData,
                });
                dispatch({
                    type: UPDATE_TURNS,
                    turnsLeft: turns,
                });
            })
    }
};

export const getThreeDartCheckoutNumber = () => {
    return(dispatch) => {
        fetch("https://fathomless-eyrie-63078.herokuapp.com/outs/game/3dart")
            .then(res => {
                return res.json();
            })
            .then(checkoutData => {
                let turns = checkoutData['outCombo'].length;
                checkoutData = checkoutData['outNum'];
                dispatch({
                    type: FETCH_CHECKOUT_NUMBER,
                    checkoutNumber: checkoutData,
                });
                dispatch({
                    type: UPDATE_CHECKOUT_NUMBER,
                    currentCheckout: checkoutData,
                });
                dispatch({
                    type: UPDATE_TURNS,
                    turnsLeft: turns,
                });
            })
    }
};

export const getSelectionData = (outNum) =>{
  return(dispatch) => {
      fetch("https://fathomless-eyrie-63078.herokuapp.com/outs/"+ outNum)
          .then(res => {
              return res.json();
          })
          .then(res => {
              let outSelection = res["outCombo"];
              dispatch({
                  type:FETCH_SELECTION_DATA,
                  bestCombo: outSelection,
              })
          })
  }
};

export const updateCurrentCheckout = (currentCheckout) => {

  return {
      type: UPDATE_CHECKOUT_NUMBER,
      currentCheckout: currentCheckout
  }
};

export const updateMultiplier = (multi, label) => {
    return {
        type: UPDATE_MULTIPLIER,
        multiplier: multi,
        label: label,
    }
};

export const updateSelection = (selection) => {
    return {
        type: UPDATE_SELECTION,
        selection: selection,
    }
};

export const submitButtonPressed = (multiplier, selection, currentCheckout) => {
    let value = currentCheckout - (multiplier * selection);
  return {
      type: SUBMIT_BUTTON_PRESSED,
      currentCheckout: value,
  }
};

export const updateSelectionsMade = (selection, multiplier) => {
    let value = selection+multiplier;
  return {
      type: UPDATE_SELECTIONS_MADE,
      selectionsMade: value,
  }
};

export const updateTurns = (turns) => {
    let value = turns - 1;
  return {
      type: UPDATE_TURNS,
      turnsLeft: value,
  }
};

export const cleanState = () => {
  return{
      type: CLEAN_STATE,
      selectionsMade: [],
      multiplier: [],
      selection: [],
      turnsLeft: [],
  }
};

export const cleanStateCheckout = () => {
    return{
        type: CLEAN_STATE_CHECKOUT,
        currentCheckout: 0,
    }
};

export const gameMode = (props) => {
    return{
        type: GAME_MODE,
        gameMode: props,

    }
};

export const bust = (props) => {
    return {
        type: BUST,
        bust: props,
    }
};

export const toggleSingle = () => {
  return {
      type: TOGGLE_SINGLE,
      singleSelected: [false, false, true]
  }
};

export const toggleDouble = () => {
    return {
        type: TOGGLE_DOUBLE,
        doubleSelected: [false,true,false]
    }
};

export const toggleTriple = () => {
    return {
        type: TOGGLE_TRIPLE,
        tripleSelected: [true,false,false]
    }
};
export const toggleClean = () => {
    return{
        type: TOGGLE_CLEAN,
        barData: [false,false,false]
    }
};

export const sendCheckoutData = (outNum, outCombo) => {
  return(dispatch) => {
      let num = outNum;
      let combo = outCombo;
      fetch('https://fathomless-eyrie-63078.herokuapp.com/community', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              outNum: num,
              outCombo: combo,
          })
      })
  }
};

export const postUserData = (userEmail, outNum, outCombo) => {
    return(dispatch) => {
        let user = userEmail;
        let num = outNum;
        let combo = outCombo;

        fetch
    }
};



