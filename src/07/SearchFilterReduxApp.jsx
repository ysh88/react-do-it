import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import ContainerComponent from './containers/ContainerComponent';
import DispatchContainer from './containers/DispatchContainer3';
import PresentationComponent from './PresentationComponent';
import SearchFilterInputContainer from './containers/SearchFilterInputContainer';
import SearchResetButtonContainer from './containers/SearchResetButtonContainer';
import SearchResultTableContainer from './containers/SearchResultTableContainer';

function SearchFilterReduxApp(props) {
  const store = configureStore({ loading: false });

  return (
    <Provider store={store}>
      리덕스 예제
      <fieldset>
        <SearchFilterInputContainer
          type="number"
          name="id"
          label="아이디 검색"
        />
        <SearchFilterInputContainer type="text" name="name" label="이름 검색" />
        <SearchFilterInputContainer
          type="number"
          name="age"
          label="나이 검색"
        />
        <SearchResetButtonContainer>리셋</SearchResetButtonContainer>
      </fieldset>
      <SearchResultTableContainer/>
      <div>
        화면 컴포넌트: <PresentationComponent userName="화면 컴포넌트" />
        <br />
        데이터 컴포넌트: <ContainerComponent id={2} />
        <br />
        최종 액션 데이터 컴포넌트: <DispatchContainer />
      </div>
    </Provider>
  );
}

export default SearchFilterReduxApp;
