import React, { useContext } from 'react';
import Input from '../03/Input';
import FormContext from './FormContext';

function FormConsumerExample({ name, ...otherProps }) {
  const { values, errors, onChange } = useContext(FormContext);

  return (
    <Input
      {...otherProps}
      name={name}
      onChange={onChange}
      value={values[name]}
      errorMessage={errors[name]}
    />
  );
}

export default FormConsumerExample;
