import React from 'react';
import Button from '../04/Button';
import Text from '../04/Text';
import withHoC from '../05/withHoC';

export default {
  title: 'WithHoC',
  component: withHoC,
  args: {
    children: '안녕하세요',
  },
};

//1. 하이어오더 컴포넌트에 기존 컴포넌트 전달 => 기능이 추가된 확장 컴포넌트 반환
//  withHoC(Button) === ButtonWithHoC = props => <Button {...props}>
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

//2. 확장컴포넌트에 기존 props 전달
//  ButtonWithHoc(props) => <Button {...props} />;
export const Basic = Template.bind({});
Basic.args = {};
Basic.storyName = '기본 설정';

export const Large = Template.bind({});
Large.args = {
  large: true,
};
Large.storyName = 'large 예제';
