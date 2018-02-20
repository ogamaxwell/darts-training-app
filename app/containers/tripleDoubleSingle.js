/**
 * Created by Max on 2/2/2018.
 */

import tripleDoubleSingle from '../components/tripleDoubleSingle';
import { connect } from 'react-redux';
import { updateMultiplier } from '../actions';

const mapStateToProps = state => {
    return {
       turnsLeft: state.turnsLeft,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMultiplier: (props, label) => {
            dispatch(updateMultiplier(props, label));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(tripleDoubleSingle);
