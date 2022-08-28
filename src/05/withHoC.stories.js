import React from 'react';
import Button from '../04/Button';
import Text from '../04/Text';
import withHoC from '../05/withHoC';

export default {
  title: 'WithHoC',
};
const ButtonWithHoC = withHoC(Button);
const TextWithHoC = withHoC(Text);

const Template = args => {
  return (
    <>
      <ButtonWithHoC {...args} />
      <TextWithHoC {...args} />
    </>
  );
};
export const Basic = Template.bind({});
Basic.args = {
  children: '안녕하세요',
};
Basic.storyName = '기본 설정';

export const Large = Template.bind({});
Large.args = {
  large: true,
  children: '안녕하세요',
};
Large.storyName = 'large 예제';
