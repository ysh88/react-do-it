import React, { Component } from 'react';
import PropTypes from 'prop-types'

// 공급자 구현 방법
// 1. 데이터 제공 함수를 정의(getChildContext)
// 2. 공급자 자료형을 정의(childContextType)
class LoadingProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
    this.setLoading = this.setLoading.bind(this);
  }

  // 1. 데이터 제공 함수 정의 
  // => 'context' 객체형태로 소비자의 프로퍼티로 전달(하이어오더 컴포넌트 도움 필요)
  getChildContext() {
    return {
      loading: this.state.loading,
      setLoading: this.setLoading,
    };
  }

  setLoading(loading) {
    this.setState({ loading });
  }


  render() {
    return this.props.children;
  }
}

// 공급자가 전달할 자료형 정의
LoadingProvider.childContextTypes = {
  loading:PropTypes.bool,
  setLoading:PropTypes.func,
};

export default LoadingProvider;