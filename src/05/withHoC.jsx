import React from 'react';

// 하이어오더 컴포넌트 기본구조
function withHoC(WrappedComponent) {
  return function WithHoC(props) {
    return <WrappedComponent {...props} />; //기능을 덧붙이면서 기존 컴포넌트의 props 모두 전달
  };
}

export default withHoC;
