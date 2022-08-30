import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { ModalContext2 } from './ModalContext';

export default function createModalProvider(ContentMap = {}) {
  return function ModalProvider({ children }) {
    const [showModal, setShowModal] = useState(false);
    const [contentId, setContentId] = useState('');
    const [modalProps, setModalProps] = useState({});

    function handleClose() {
      setShowModal(false);
    }

    function handleOpen(contentId, modalProps) {
      setContentId(contentId);
      setShowModal(true);
      setModalProps(modalProps);
    }

    //처음에 useState로 연결하려고 했는데 계속 오류 발생
    //훅스를 사용하는 것과 직접 할당하는 것의 차이점은??
    const ModalContent = ContentMap[contentId]; 
    const value = {
      actions: {
        openModal: handleOpen,
        closeModal: handleClose,
      },
    };

    return (
      <ModalContext2.Provider value={value}>
        {children}
        {showModal && ModalContent && (
          <Modal>
            <ModalContent {...modalProps} />
          </Modal>
        )}
      </ModalContext2.Provider>
    );
  };
}
