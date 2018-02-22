/**
 * Created by Max on 2/20/2018.
 */

import CheckoutNumber from '../../components/threeDartOut/checkoutNumber';
import { getThreeDartCheckoutNumber, gameMode } from '../../actions';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        checkoutNum: state.getCheckoutNumber,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCheckoutNumber: () => {
            dispatch(getThreeDartCheckoutNumber());
            dispatch(gameMode('threeDart'));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutNumber);