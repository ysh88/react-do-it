import React from 'react';
import Input from './InputWithStyle';

export default {
  title: 'InputWithStyle',
  component: Input,
};

export const ErrorMsgInput = () => (
  <Input
    autoFocus={false}
    errorMessage="이름을 입력해주세요"
    label="이름"
    name="name"
    onChange={f => f}
  />
);
