import React from 'react';
import HomePageComponent from './HomePageComponent';
import HomepageWithProvider from './HomePageWithProvider';

export default {
  title: 'Context',
};

const TemplateHomePageComponent = args => <HomePageComponent />;
const TemplateHomePageWithProvider = args => <HomepageWithProvider />;

export const Basic = TemplateHomePageComponent.bind({});
Basic.storyName = '컨텍스트 예제';

export const Provider = TemplateHomePageWithProvider.bind({});
Provider.storyName = 'Provider 예제';

