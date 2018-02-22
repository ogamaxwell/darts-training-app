/**
 * Created by Max on 2/1/2018.
 */
import {combineReducers} from 'redux';

//import your different reducer files here
import checkoutReducers from './checkoutReducer';
import getCheckoutNumber from './getCheckoutNumber';
import updateCurrentCheckout from './currentCheckout';
import updateMultiplier from './updateMultiplier';
import updateSelection from './updateSelection';
import updateSelectionsMade from './updateSelectionsMade';
import updateTurns from './updateTurns';
import bestCombo from './getBestCombo';
import currentGameMode from './currentGameMode';


export default combineReducers({
    checkoutReducers,
    getCheckoutNumber,
    updateCurrentCheckout,
    updateMultiplier,
    updateSelection,
    updateSelectionsMade,
    updateTurns,
    bestCombo,
    currentGameMode,
});
