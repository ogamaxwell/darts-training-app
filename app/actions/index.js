/**
 * Created by Max on 2/1/2018.
 */


import {ADD_CHECKOUT_NUMBER, FETCH_CHECKOUT_NUMBER} from './actionTypes';

//action: adding checkout number to the state
export const addCheckoutNumber = (checkoutNumber) => {
    return {
        type:ADD_CHECKOUT_NUMBER,
        checkoutNumber: checkoutNumber,
    }
};

export const getCheckoutNumber = () => {
    return(dispatch) => {
        fetch("http://192.168.1.17:3000/out-data/game/ran-num")
            .then(res => {

                 return res.json();
            })
            .then(checkoutData => {
                checkoutData = checkoutData['outNum'];
                console.log(checkoutData);
                dispatch({
                    type: FETCH_CHECKOUT_NUMBER,
                    checkoutNumber: checkoutData,
                });
            });
    }
};

