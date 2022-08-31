import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setLoading, resetLoading } from './actions/loadingActions';
import { setUser } from './actions/userActions';
import { setCollection, setAge } from './actions/collectionActions';

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
    const { collection } = getState();
    const { ids, entities } = collection;
    const originalPayload = ids.map(id => entities[id]);
    console.log(originalPayload);
  });

  return <Provider store={store}>리덕스 예제</Provider>;
}

export default ADVReduxApp;
