import React from 'react';
import { PageWithLoadData, PageWithLoadDataAndLoading } from './lifecycle';

export default {
  title: 'Lifecycle',
  args: {
    loadData: () => fetch('/').then(() => 'hello'),
  },
};

const TemplateWithLoadData = args => <PageWithLoadData {...args} />;
const TemplateWithLoadDataAndLoading = args => <PageWithLoadDataAndLoading {...args} />;

export const Basic = TemplateWithLoadData.bind({});
Basic.storyName = '기본 설정';

export const Loading = TemplateWithLoadDataAndLoading.bind({});
Loading.storyName = '로딩 메시지 예제';
