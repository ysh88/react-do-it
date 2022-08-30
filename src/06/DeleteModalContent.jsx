import React from 'react';
import Button from '../04/Button';
import Text from '../04/Text';
import { Consumer2 } from './ModalContext';

function DeleteModalContent({ id, name }) {
  return (
    <div>
      <div>
        <Text>{name}을 정말로 삭제하시겠습니까?</Text>
      </div>
      <Button primary>예</Button>
      <Button>닫기</Button>
    </div>
  );
}

export default DeleteModalContent;

/* 
 <Consumer2>
      {({ actions }) => (
        <div>
          <div>
            <Text>정말로 삭제하시겠습니까?</Text>
          </div>
          <Button primary>예</Button>
          <Button onPress={actions.closeModal}>닫기</Button>
        </div>
      )}
    </Consumer2>
*/
