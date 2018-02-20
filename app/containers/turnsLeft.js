/**
 * Created by Max on 2/6/2018.
 */

import {connect} from 'react-redux';
import TurnsLeft from '../components/turnsLeft';



const mapStateToProps = state => {
  return {
      turnsLeft: state.updateTurns,
      selections: state.updateSelectionsMade,
  }
};

const mapDispatchToProps = (dispatch) => {
    return{

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TurnsLeft);
