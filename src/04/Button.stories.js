import React from 'react';
import Button from './Button';

export default {
  title: 'ButtonWithStyle',
  component: Button,
};

const Template = args => <Button {...args} />;
export const BasicButton = Template.bind({});
BasicButton.args = {
  children: '전송하기',
};
export const SmallButton = Template.bind({});
SmallButton.args = {
  small:true,
  children: '전송하기',
};
export const LargeButton = Template.bind({});
LargeButton.args = {
  large:true,
  children: '전송하기',
};
export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  primary:true,
  children: '전송하기',
};
export const PrimaryLargeButton = Template.bind({});
PrimaryLargeButton.args = {
  primary:true,
  large:true,
  children: '전송하기',
};
