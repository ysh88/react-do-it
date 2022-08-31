import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FormContext from './FormContext';
import Button from '../04/Button';

function FormSubmitButton({ children }) {
  const { submit } = useContext(FormContext);

  return (
    <Button primary onPress={submit}>
      {children}
    </Button>
  );
}

FormSubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormSubmitButton;
