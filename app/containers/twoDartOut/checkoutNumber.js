/**
 * Created by Max on 2/17/2018.
 */

import CheckoutNumber from '../../components/twoDartOut/checkoutNumber';
import { getTwoDartCheckoutNumber } from '../../actions';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        checkoutNum: state.getCheckoutNumber,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCheckoutNumber: () => {
            dispatch(getTwoDartCheckoutNumber());
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutNumber);

