import { action } from '@storybook/addon-actions';
import React from 'react';
import Checkbox from './Checkbox';
import Text from './Text';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const Template = args => <Checkbox {...args} />;

export const BasicCheckbox = Template.bind({});
BasicCheckbox.args = {
  name: 'agree',
};
BasicCheckbox.storyName = '기본설정';

export const ChildrenCheckbox = Template.bind({});
ChildrenCheckbox.args = {
  ...BasicCheckbox.args,
  children: <Text>동의합니다</Text>,
};

export const LabelCheckbox = Template.bind({});
LabelCheckbox.args = {
  ...BasicCheckbox.args,
  label: '이름',
  children: <Text>동의합니다</Text>,
};

export const OnChangeCheckbox = Template.bind({});
OnChangeCheckbox.args = {
  ...LabelCheckbox.args,
  onChange: action('onChange 이벤트 발생'),
  children: <Text>동의합니다</Text>,
};

export const CheckedCheckbox = Template.bind({});
CheckedCheckbox.args = {
  ...LabelCheckbox.args,
  checked: true,
  children: <Text>동의합니다</Text>,
};
export const ErrorMessageCheckbox = Template.bind({});
ErrorMessageCheckbox.args = {
  ...LabelCheckbox.args,
  errorMessage:'동의가 필요합니다',
  children: <Text>동의합니다</Text>,
};
export const AutoFocusCheckbox = Template.bind({});
AutoFocusCheckbox.args = {
  ...LabelCheckbox.args,
  autoFocus: true,
  children: <Text>동의합니다</Text>,
};
