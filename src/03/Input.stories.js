import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const BasicInput = () => <Input name="name" />;
BasicInput.storyName = "기본 설정";
