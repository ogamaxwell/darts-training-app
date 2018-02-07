/**
 * Created by Max on 2/3/2018.
 */

import numberSelection from '../components/numberSelection';
import { connect } from 'react-redux';
import {updateSelection} from '../actions';

const mapStateToProps = state => {
  return {
      currentSelection: state.updateSelection
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      updateSelection: (props) => {
          dispatch(updateSelection(props));
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(numberSelection);
