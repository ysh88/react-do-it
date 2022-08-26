import React from 'react';
import Text from './Text';

export default {
  title: 'Styled Text',
  component: Text,
};

const Template = args => <Text {...args} />;
export const BasicText = Template.bind({});
BasicText.args = {
  children: '안녕하세요',
};
export const SmallText = Template.bind({});
SmallText.args = {
  small: true,
  children: '안녕하세요',
};
export const LargeText = Template.bind({});
LargeText.args = {
  large: true,
  children: '안녕하세요',
};
export const PrimaryText = Template.bind({});
PrimaryText.args = {
  primary: true,
  children: '안녕하세요',
};
