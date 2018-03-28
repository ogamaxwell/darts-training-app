/**
 * Created by Max on 2/3/2018.
 */

import { submitButtonPressed, updateTurns, updateSelectionsMade, toggleClean } from '../actions';
import { connect } from 'react-redux';
import submitButton from '../components/submitButton';


const mapStateToProps = state => {
   return {
        current: state.updateCurrentCheckout,
   }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitButtonPressed: (multiplier, selection, currentCheckout, turns, label) => {
            dispatch(submitButtonPressed(multiplier, selection, currentCheckout));
            dispatch(updateTurns(turns));
            dispatch(updateSelectionsMade(label, selection));
            dispatch(toggleClean());
        }
    }
};


export default connect (mapStateToProps, mapDispatchToProps)(submitButton);
