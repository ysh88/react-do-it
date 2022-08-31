import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent1';
import { setAge } from '../actions/collectionActions';

// const mapDispatchToProps = dispatch => ({
//   setAge: (id, age) => dispatch(setAge(id, age)),
// });
const mapDispatchToProps = {
  setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);
