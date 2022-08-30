import React, { useState } from 'react';
import Button from '../04/Button';
import Text from '../04/Text';
import Modal from './Modal';

function ButtonWithModal(props) {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <Button onPress={() => setShowModal(true)}>삭제</Button>
      {showModal && (
        <Modal>
          <div>
            <Text>정말로 삭제하시겠습니까?</Text>
          </div>
          <Button primary>예</Button>
          <Button onPress={() => setShowModal(false)}>닫기</Button>
        </Modal>
      )}
    </>
  );
}

export default ButtonWithModal;
