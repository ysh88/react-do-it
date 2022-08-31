import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

function ADVReduxApp(props) {
  const store = configureStore({ loading: false });
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
      payload: { name: 'John', age: 20 },
    });
  });

  return <Provider store={store}>리덕스 예제</Provider>;
}

export default ADVReduxApp;
