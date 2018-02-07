/**
 * Created by Max on 2/1/2018.
 */

import CheckoutNumber from '../components/checkoutNumber';
import { addCheckoutNumber, getCheckoutNumber } from '../actions';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        checkoutNum: state.getCheckoutNumber,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCheckoutNumber: () => {
            dispatch(getCheckoutNumber());
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutNumber);
