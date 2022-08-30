import React, { useState } from 'react';
import Modal from './Modal';
import Button from '../04/Button';
import Text from '../04/Text';
import { ModalContext1 } from './ModalContext';

function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  function handleClose() {
    setShowModal(false);
  }

  function handleOpen() {
    setShowModal(true);
  }

  // 지금과 같은 방식은 모달 내용이 바뀔 때마다 모달 컴포넌트를 계속 새로 만들어야 함
  return (
    <ModalContext1.Provider value={{ openModal: handleOpen, closeModal: handleClose }}>
      {children}
      {showModal && (
        <Modal>
          <div>
            <Text>정말로 삭제하시겠습니까?</Text>
          </div>
          <Button primary>예</Button>
          <Button onPress={() => setShowModal(false)}>닫기</Button>
        </Modal>
      )}
    </ModalContext1.Provider>
  );
}

export default ModalProvider;
