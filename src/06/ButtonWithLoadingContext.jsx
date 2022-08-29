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

export default withLoadingContext(ButtonWithLoadingContext);
