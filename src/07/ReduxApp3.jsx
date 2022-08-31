import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_LOADING':
      return { ...state, loading: payload };
      case 'RESET_LOADING':
        return { ...state, loading: false };
        case 'SET_USER':
      return { ...state, user: payload };
    default:
      return state;
  }
}

function ReduxApp(props) {
  const store = createStore(
    reducer,
    { loading: false, name: 'Do it!' }, //스토어 데이터 초기값
    composeWithDevTools() //리덕스 크롬 확장 도구 연동
  );
  const { dispatch } = store;

  useEffect(() => {
    dispatch({
      type: 'SET_LOADING',
      payload: true,
    });
    dispatch({
      type: 'RESET_LOADING',
    });
    dispatch({
      type: 'SET_USER',
      payload: {name:'John', age:20},
    });
  });

  return <Provider store={store}>리덕스 예제</Provider>;
}

export default ReduxApp;
