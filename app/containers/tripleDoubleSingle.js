/**
 * Created by Max on 2/2/2018.
 */

import tripleDoubleSingle from '../components/tripleDoubleSingle';
import { connect } from 'react-redux';
import { updateMultiplier, toggleDouble, toggleSingle, toggleTriple } from '../actions';

const mapStateToProps = state => {
    return {
       turnsLeft: state.turnsLeft,
        triple: state.updateBar[2],
        double: state.updateBar[1],
        single: state.updateBar[0],
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMultiplier: (props, label) => {
            dispatch(updateMultiplier(props, label));
        },
        toggleSingle: () => {
            dispatch(toggleSingle());
        },
        toggleDouble: () => {
            dispatch(toggleDouble());
        },
        toggleTriple: () => {
            dispatch(toggleTriple());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(tripleDoubleSingle);
