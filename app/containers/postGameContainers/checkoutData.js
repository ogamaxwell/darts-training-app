/**
 * Created by Max on 2/8/2018.
 */

import {connect} from 'react-redux';
import checkoutData from '../../components/postGameComponents/checkoutData';
import {getSelectionData} from '../../actions';

const mapStateToProps = state => {
  return{
      selectionsMade: state.updateSelectionsMade,
      checkoutNumber: state.getCheckoutNumber,
      bestCombo: state.bestCombo,
  }
};

const mapDispatchToProps = (dispatch) => {
    return{
        getData:(props) => {
            dispatch(getSelectionData(props));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(checkoutData);
