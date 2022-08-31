import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FormContext from './FormContext';

function FormProvider({ children, onSubmit, validate }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  function onChange(name, updatedValue) {
    setValues({ ...values, [name]: updatedValue });
  }
  useEffect(() => {
    validateValues(values);
  },[values]);
  function reset() {
    setValues({});
    setErrors({});
  }

  function submit() {
    onSubmit(values);
  }

  function validateValues(values) {
    if (!validate) return;
    const errors = validate(values);
    setErrors(errors);
  }

  return (
    <FormContext.Provider value={{ values, errors, onChange, reset, submit }}>
      {children}
    </FormContext.Provider>
  );
}

FormProvider.propTypes = {
  validate: PropTypes.func,
};

export default FormProvider;
