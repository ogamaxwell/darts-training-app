/**
 * Created by Max on 2/7/2018.
 */

import {connect} from 'react-redux';
import PostCheckoutNumber from '../../components/postGameComponents/postCheckoutNumber';

const mapStateToProps = state =>{
    return {
        checkoutNumber: state.getCheckoutNumber
    }
};

export default connect(mapStateToProps)(PostCheckoutNumber);
