/**
 * Created by Max on 2/5/2018.
 */


import { connect } from 'react-redux';
import { cleanState, cleanStateCheckout, bust } from '../../actions/index';
import PlayAgainButton from '../../components/postGameComponents/playAgainButton';

const mapStateToProps = state => {
    return{
        gameMode: state.currentGameMode,
    }
};


const mapDispatchToProps = (dispatch) => {
    return{
        cleanState: () => {
            dispatch(cleanState());
            dispatch(cleanStateCheckout());
            dispatch(bust(false));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayAgainButton);

