/**
 * Created by Max on 2/1/2018.
 */

import CheckoutNumber from '../components/checkoutNumber';
import { addCheckoutNumber, getCheckoutNumber } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        gameCycleStart: (inputCheckoutNumber) => {
            dispatch(getCheckoutNumber());
            dispatch(addCheckoutNumber(inputCheckoutNumber));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutNumber);
