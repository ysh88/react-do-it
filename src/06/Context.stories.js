import React from 'react';
import HomePageComponent from './HomePageComponent';
import HomePageWithProvider from './HomePageWithProvider';
import HomePageWithTwoProvider from './HomePageWithTwoProvider'

export default {
  title: 'Context',
};

const TemplateHomePageComponent = args => <HomePageComponent />;
const TemplateHomePageWithProvider = args => <HomePageWithProvider />;
const TemplateHomePageWithTwoProvider = args => <HomePageWithTwoProvider />;

export const Basic = TemplateHomePageComponent.bind({});
Basic.storyName = '컨텍스트 예제';

export const Provider = TemplateHomePageWithProvider.bind({});
Provider.storyName = 'Provider 예제';

export const TwoProvider = TemplateHomePageWithTwoProvider.bind({});
TwoProvider.storyName = 'Two Provider 예제';

