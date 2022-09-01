import { connect } from 'react-redux';
import { setFilter } from '../actions/searchFilterActions';
import Input from '../../04/InputWithStyle';

const mapStateToProps = (state, props) => {
  const value = state.searchFilter[props.name] || '';
  return {
    // 화면 컴포넌트에 넘겨줄 프로퍼티
    value,
  };
};

const mapDispatchToProps = {
  onChange: setFilter, //화면 컴포넌트의 액션을 스토어에 연결 = dispatch함수가 전달할 액션
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
