import React from 'react';
import ReduxApp1 from './ReduxApp1';
import ReduxApp2 from './ReduxApp2';
import ReduxApp3 from './ReduxApp3';
import ADVReduxApp1 from './ADVReduxApp1'
import ADVReduxApp2 from './ADVReduxApp2'
import ADVReduxApp3 from './ADVReduxApp3'
import ADVReduxApp4 from './ADVReduxApp4'
import ADVReduxApp5 from './ADVReduxApp5'

export default {
  title: 'Redux App',
};

const Template1 = args => <ReduxApp1 {...args} />;
const Template2 = args => <ReduxApp2 {...args} />;
const Template3 = args => <ReduxApp3 {...args} />;
const Template4 = args => <ADVReduxApp1 {...args} />;
const Template5 = args => <ADVReduxApp2 {...args} />;
const Template6 = args => <ADVReduxApp3 {...args} />;
const Template7 = args => <ADVReduxApp4 {...args} />;
const Template8 = args => <ADVReduxApp5 {...args} />;

export const Basic = Template1.bind({});
Basic.storyName = 'ReduxApp1';

export const Basic2 = Template2.bind({});
Basic2.storyName = 'ReduxApp2';

export const Basic3 = Template3.bind({});
Basic3.storyName = 'ReduxApp3';

export const Basic4 = Template4.bind({});
Basic4.storyName = 'ADVReduxApp1';

export const Basic5 = Template5.bind({});
Basic5.storyName = 'ADVReduxApp2';

export const Basic6 = Template6.bind({});
Basic6.storyName = 'ADVReduxApp3';

export const Basic7 = Template7.bind({});
Basic7.storyName = 'ADVReduxApp4';

export const Basic8 = Template8.bind({});
Basic8.storyName = 'ADVReduxApp5';