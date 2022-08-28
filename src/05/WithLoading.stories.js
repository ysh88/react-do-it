import React from 'react';
import Button from '../04/Button';
import Text from '../04/Text';
import withLoading from './withLoading';

export default {
  title: 'WithLoading',
  component: withLoading,
  args: {
    children: '안녕하세요',
  },
};

const ButtonWithLoading = withLoading(<Button disabled>로딩 중...</Button>)(Button);
const TextWithLoading = withLoading('로딩중입니다')(Text);

const Template = args => {
  return (
    <>
      <ButtonWithLoading {...args}></ButtonWithLoading>
      <TextWithLoading {...args}></TextWithLoading>
    </>
  );
};

export const Basic = Template.bind({});
Basic.storyName = '기본 설정';
