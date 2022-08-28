import React from 'react';

//하이어오더 컴포넌트(커링함수) 기본구조 => 확장 컴포넌트 반환
function withHoC(WrappedComponent) {
  const { displayName, name } = WrappedComponent;
  const WrappedComponentName = displayName || name;
  return function WithHoC(props) {
    //개발자도구에서 하이어오더 컴포넌트 이름이 아니라 확장 컴포넌트의 이름이 표시되도록 설정
    // ex) WithHoC가 아니라 Button[withHoC]로 표시되도록 설정 = 디버깅 편의성 등
    WithHoC.displayName = `withHoC(${WrappedComponentName})`;
    return <WrappedComponent {...props} />; //기능을 덧붙이면서 기존 컴포넌트의 props 모두 전달
  };
}

export default withHoC;
