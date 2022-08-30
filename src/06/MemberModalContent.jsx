import React from 'react';
import Button from '../04/Button';
import Text from '../04/Text';
import Input from '../03/Input';
import { Consumer2 } from './ModalContext';

function MemberModalContent(props) {
  return (
    <Consumer2>
    {({ actions }) => (
      <div>
        <div>
          <Text>회원가입</Text>
          <Input label='이메일' name='email'/>
          <Input label='이름' name='name'/>
          <Input label='비밀번호' name='password'/>
        </div>
        <Button primary>가입하기</Button>
        <Button onPress={actions.closeModal}>닫기</Button>
      </div>
    )}
  </Consumer2>
  );
}

export default MemberModalContent;