import React from 'react';
import Form from './Form';
import FormConsumerExample from './FormConsumerExample';
import FormSubmitButton from './FormSubmitButton';
import {action} from '@storybook/addon-actions'

export default {
  title: 'Form',
  component: Form,
  // argTypes: { onSubmit: { action: '폼 전송' } },
};

function validate({ name, age }) {
  let errors = {};
  const _age = parseInt(age);
  if (!name) errors['name'] = '이름을 입력해야 합니다';
  if (_age && _age < 18) errors['age'] = '나이는 18세 이상';
  return errors;
}

const Template = args => (
  <>
    <Form {...args}>
      <FormConsumerExample name="name" label="이름" />
      <FormConsumerExample name="age" label="나이" />
      <FormConsumerExample name="totalAmount" label="금액" />
      <FormSubmitButton>전송</FormSubmitButton>
    </Form>
  </>
);
export const Basic = Template.bind({});
Basic.storyName = '유효성 검사';
Basic.args = {
  validate,
  onSubmit:action('폼 전송')
};
