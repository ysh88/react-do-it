import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import { Consumer } from './LoadingProviderWithNewContext';

function ButtonWithNewConsumer({ children }) {
  return (
    <>
      <Consumer>
      {/* children 프로퍼티 = 엘리먼트 사이에 배치해서 전달 가능 */}
        {context => (
          <Button onPress={() => context.setLoading('loading', !context.loading)}>
            {context.loading ? '로딩 중' : children}
          </Button>
        )}
      </Consumer>
      <Consumer
        children={({ loading2 = false, setLoading }) => (
          <Button onPress={() => setLoading('loading', !loading2)}>
            {loading2 ? '로딩 중' : children}
          </Button>
        )}
      />
      <Consumer
        children={({ loading = false, loading2 = false }) => (
          <Button>{loading && loading2 ? '로딩 중' : children}</Button>
        )}
      />
    </>
  );
}

ButtonWithNewConsumer.propTypes = {};

export default ButtonWithNewConsumer;
