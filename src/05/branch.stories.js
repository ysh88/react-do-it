import React from 'react';
import BranchLoadingButton from './branch';

export default {
  title: 'BranchLoadingButton',
  component: BranchLoadingButton,
  args: {
    children: '안녕하세요',
  },
};

const Template = args => <BranchLoadingButton {...args} />;

export const Basic = Template.bind({});
Basic.storyName = '기본 설정';
export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
};
IsLoading.storyName = 'isLoading 예제';
