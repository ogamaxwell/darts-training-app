/**
 * Created by Max on 3/11/2018.
 */

/**
 * Created by Max on 3/5/2018.
 */


import DartsBoard from '../../components/threeDartOut/dartsBoard';

import { bust } from '../../actions';

import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        turnsLeft: state.updateTurns,
        currentCheckout: state.updateCurrentCheckout,
        bustState: state.bust,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        bust:(props) => {
            dispatch(bust(props));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(DartsBoard);


