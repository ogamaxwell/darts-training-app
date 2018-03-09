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





