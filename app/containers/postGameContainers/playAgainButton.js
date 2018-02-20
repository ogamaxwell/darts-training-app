/**
 * Created by Max on 2/5/2018.
 */


import { connect } from 'react-redux';
import { cleanState, cleanStateCheckout } from '../../actions/index';
import PlayAgainButton from '../../components/postGameComponents/playAgainButton';

const mapStateToProps = state => {
    return{

    }
};


const mapDispatchToProps = (dispatch) => {
    return{
        cleanState: () => {
            dispatch(cleanState());
            dispatch(cleanStateCheckout());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayAgainButton);

