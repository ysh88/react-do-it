import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import createLoadingConsumer from './createLoadingConsumer';

const DefaultLoadingConsumer = createLoadingConsumer(); //render(context[default]) => 프로퍼티로 전달된 상태
const Loading2Consumer = createLoadingConsumer('loading2');//render(context['loading2']) 

function ButtonWithConsumer({ children }) {
  return (
    <React.Fragment>
      <DefaultLoadingConsumer
        render={({ loading, setLoading }) => (
          <Button onPress={() => setLoading(!loading)}>
            {loading ? '컨텍스트1 로딩중' : children}
          </Button>
        )}
      />
      <Loading2Consumer
        render={({ loading, setLoading }) => (
          <Button onPress={() => setLoading(!loading)}>
            {loading ? '컨텍스트2 로딩중' : children}
          </Button>
        )}
      />
      {/*
        compose 함수로 조합하면 나중에 전달된 프로퍼티로 덮어쓰기 때문에(하이어오더 컴포넌트 조합 충돌 문제) 
        다중 소비자 예제 컴포넌트에서 마지막 버튼이 공급자의 모든 컨텍스트에 접근할 수 없다.
        따라서 render 프로퍼티를 사용해서, 즉 마지막 버튼에 모든 컨텍스트를 온전히 전달해서 
        소비자가 여러 공급자의 컨텍스트에 동시에 접근하는 것을 구현했다.
      */}
      <DefaultLoadingConsumer
        render={({ loading, setLoading }) => (
          <Loading2Consumer
            render={({ loading: loading2 }) => (
              <Button onPress={() => setLoading(!loading)}>
                {loading || loading2 ? '로딩중' : children}
              </Button>
            )}
          />
        )}
      />
    </React.Fragment>
  );
}

ButtonWithConsumer.propTypes = {
  children: PropTypes.string,
};

export default ButtonWithConsumer;