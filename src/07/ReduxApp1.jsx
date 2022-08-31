import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

function ReduxApp(props) {
  const store = createStore(
    state => state,
    { loading: false, name: 'Do it!' },//스토어 데이터 초기값
    composeWithDevTools()//리덕스 크롬 확장 도구 연동
  );
  return <Provider store={store}>리덕스 예제</Provider>;
}

export default ReduxApp;
