import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_KEY, contextPropTypes } from './LoadingProviderWithKey';

export default (contextKey = DEFAULT_KEY) => {
  function LoadingConsumer({ render }, context) {
    return render(context[contextKey]);//소비자 생성할 때 어느 상태를 관리할 것인지 결정
    //vs withLoadingContextAndKey : const { loading, setLoading } = context[contextKey];
  };
  LoadingConsumer.contextTypes = {
    [contextKey]: contextPropTypes,
  };
  LoadingConsumer.propTypes = {
    render: PropTypes.func.isRequired,
  };
  return LoadingConsumer;
};