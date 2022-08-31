import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setLoading, resetLoading } from './actions/loadingActions';
import { setUser } from './actions/userActions';

// 리덕스 구성 = 스토어 + 액션 + 리듀서
function ADVReduxApp(props) {
  // 스토어 생성
  const store = configureStore({ loading: false }); //리듀서 생성

  // 액션
  useEffect(() => {
    const { dispatch } = store;
    dispatch(setLoading(true));
    dispatch(resetLoading());
    dispatch(setUser({ name: 'John', age: 20 }));
  });

  return <Provider store={store}>리덕스 예제</Provider>;
}

export default ADVReduxApp;
