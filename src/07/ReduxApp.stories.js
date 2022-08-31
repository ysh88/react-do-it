import React from 'react';
import ReduxApp from './ReduxApp';
import ReduxApp2 from './ReduxApp2';
import ReduxApp3 from './ReduxApp3';
import ADVReduxApp1 from './ADVReduxApp1'
import ADVReduxApp2 from './ADVReduxApp2'

export default {
  title: 'Redux App',
};

const Template1 = args => <ReduxApp {...args} />;
const Template2 = args => <ReduxApp2 {...args} />;
const Template3 = args => <ReduxApp3 {...args} />;
const Template4 = args => <ADVReduxApp1 {...args} />;
const Template5 = args => <ADVReduxApp2 {...args} />;

export const Basic = Template1.bind({});
Basic.storyName = '기본 스토어 설정';

export const Basic2 = Template2.bind({});
Basic2.storyName = 'dispatch 예제';

export const Basic3 = Template3.bind({});
Basic3.storyName = '기본 리듀서 예제';

export const Basic4 = Template4.bind({});
Basic4.storyName = 'ADVReduxApp1';

export const Basic5 = Template5.bind({});
Basic5.storyName = 'ADVReduxApp2';