import React, { useState } from 'react';
const { Provider, Consumer } = React.createContext({});//공급자, 소비자 생성(빈 객체)
export { Consumer }; //소비자가 구독할 컨텍스트 데이터

function LoadingProviderWithNewContext({ children }) {
  const { state, setState } = useState({});

  function setLoading(key, value) {
    setState({ [key]: value });
  }

  const context = { ...state, setLoading };//공급자가 제공할 컨텍스트 데이터
  return <Provider value={context}>{children}</Provider>;
}

export default LoadingProviderWithNewContext;
