import React from 'react';
import PropTypes from 'prop-types';

// 커링함수
export default WrappedComponent => {
  const { displayName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  // 하이어오더 컴포넌트
  function WithLoadingContext(props, context) {
    //공급자에서 정의한 함수가 context 객체로 전달됨 
    const { loading, setLoading } = context; 
    // => 소비자 프로퍼티에 추가 
    return <WrappedComponent {...props} loading={loading} setLoading={setLoading} />;
  }
  WithLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`;
  // 구독할 자료형을 정의
  WithLoadingContext.contextTypes = {
    loading: PropTypes.bool,
    setLoading: PropTypes.func,
  };
  return WithLoadingContext;
};
