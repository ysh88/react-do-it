import React from 'react';
import { CounterWithCountState } from './withState';

export default {
  title: 'CounterWithCountState',
  component: CounterWithCountState,
};

const Template = args => <CounterWithCountState {...args} />;
export const Basic = Template.bind({});
Basic.storyName = 'CounterWithCountState';
