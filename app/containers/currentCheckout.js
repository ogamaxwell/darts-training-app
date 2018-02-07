/**
 * Created by Max on 2/1/2018.
 */

import currentCheckout from '../components/currentCheckout';
import { connect } from 'react-redux';
import {updateCurrentCheckout, getCheckoutNumber} from '../actions';

const mapStateToProps = state => {
    return {
        currentCheckout: state.updateCurrentCheckout
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        updateCurrentCheckout: (props) => {
            dispatch(updateCurrentCheckout(props));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(currentCheckout);





