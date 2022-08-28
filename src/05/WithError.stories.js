import React from 'react';
import Input from '../04/InputWithStyle';
import withError from './withError';

export default {
  title: 'WithError',
  component: withError,
  args: {
    name: 'name',
    hasError: true,
  },
};

const InputWithError = withError('올바르지 못한 값입니다')(Input);

const Template = args => <InputWithError {...args} />;

export const Basic = Template.bind({});

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  errorMessage: '필수 항목입니다',
};
