import { connect } from 'react-redux';
import PresentationComponent from '../PresentationComponent';

// 데이터 컴포넌트
function mapStateToProps(state, props) {
  return {
    //화면 컴포넌트에 넘겨줄 프로퍼티
    userName: state.user.name,
    entity: state.collection.entities[props.id],
  };
}

export default connect(mapStateToProps)(PresentationComponent);
