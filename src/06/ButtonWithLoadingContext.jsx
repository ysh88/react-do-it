import React from 'react';
import PropTypes from 'prop-types';
import withLoadingContext from './withLoadingContext';
import Button from '../04/Button';


function ButtonWithLoadingContext({ label, loading, setLoading }) {
  return (
    <>
      <Button onPress={() => setLoading(!loading)}>{loading ? '로딩 중' : label}</Button>
    </>
  );
}

ButtonWithLoadingContext.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

// 하이어오더 컴포넌트에서 컨텍스트(loading, setLoading)를 추가한 확장 컴포넌트
export default withLoadingContext(ButtonWithLoadingContext);
