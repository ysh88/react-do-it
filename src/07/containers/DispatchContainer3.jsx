import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent2';
import { setLoading, resetLoading } from '../actions/loadingActions';
import { setUser } from '../actions/userActions';
import { setCollection, setAge } from '../actions/collectionActions';

// const mapDispatchToProps = dispatch => ({
//   setAge: (id, age) => dispatch(setAge(id, age)),
// });
const mapDispatchToProps = {
  setLoading,
  resetLoading,
  setUser,
  setCollection,
  setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);
