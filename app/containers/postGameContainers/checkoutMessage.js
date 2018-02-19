/**
 * Created by Max on 2/8/2018.
 */

import {connect} from 'react-redux';
import checkoutMessage from '../../components/postGameComponents/checkoutMessage';


const mapStateToProps = state => {
    return{
        currentCheckoutNumber: state.updateCurrentCheckout,
    }
};

export default connect(mapStateToProps)(checkoutMessage);
