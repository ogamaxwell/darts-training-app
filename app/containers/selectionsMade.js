/**
 * Created by Max on 2/3/2018.
 */


import selectionsMade from '../components/selectionsMade';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        selections: state.updateSelectionsMade,
        selectionsLength: state.updateSelectionsMade.length,
    }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect (mapStateToProps,mapDispatchToProps)(selectionsMade);