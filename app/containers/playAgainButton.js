/**
 * Created by Max on 2/5/2018.
 */


import { connect } from 'react-redux';
import { cleanState } from '../actions';
import PlayAgainButton from '../components/playAgainButton';

const mapStateToProps = state => {
    return{

    }
};


const mapDispatchToProps = (dispatch) => {
    return{
        cleanState: () => {
            dispatch(cleanState());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayAgainButton);

