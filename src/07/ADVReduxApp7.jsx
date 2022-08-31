import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import PresentationComponent from './PresentationComponent';
import ContainerComponent from './containers/ContainerComponent';
import { setLoading, resetLoading } from './actions/loadingActions';
import { setUser } from './actions/userActions';
import { setCollection, setAge } from './actions/collectionActions';
import DispatchContainer1 from './containers/DispatchContainer1';

function ADVReduxApp(props) {
  const store = configureStore({ loading: false });

  useEffect(() => {
    const { dispatch, getState } = store;
    dispatch(setLoading(true));
    dispatch(resetLoading());
    dispatch(setUser({ name: 'John', age: 20 }));
    dispatch(
      setCollection([
        { id: 1, name: 'John', age: 20 },
        { id: 2, name: 'Yu', age: 35 },
      ])
    );
    dispatch(setAge(2, 55));
  });

  return (
    <Provider store={store}>
      화면 컴포넌트: <PresentationComponent userName="화면 컴포넌트" />
      <br />
      데이터 컴포넌트: <ContainerComponent id={2} />
      <br />
      액션 데이터 컴포넌트: <DispatchContainer1/>
    </Provider>
  );
}

export default ADVReduxApp;
