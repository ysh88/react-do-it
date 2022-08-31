import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import PresentationComponent from './PresentationComponent';
import ContainerComponent from './containers/ContainerComponent';
import { setLoading, resetLoading } from './actions/loadingActions';
import { setUser } from './actions/userActions';
import { setCollection, setAge } from './actions/collectionActions';
import DispatchContainer from './containers/DispatchContainer3';

function ADVReduxApp(props) {
  const store = configureStore({ loading: false });

  return (
    <Provider store={store}>
      화면 컴포넌트: <PresentationComponent userName="화면 컴포넌트" />
      <br />
      데이터 컴포넌트: <ContainerComponent id={2} />
      <br />
      최종 액션 데이터 컴포넌트: <DispatchContainer />
    </Provider>
  );
}

export default ADVReduxApp;
