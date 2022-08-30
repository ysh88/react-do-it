import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import DeleteModalContent from './DeleteModalContent';
import { ModalContext2 } from './ModalContext';

export default function createModalProvider(ContentMap = {}) {
  return function ModalProvider({ children }) {
    const [showModal, setShowModal] = useState(false);
    const [modalProps, setModalProps] = useState({});
    const [modalContent, setModalContent] = useState(null);

    function handleClose() {
      setShowModal(false);
    }

    function handleOpen(contentId, modalProps) {
      setShowModal(true);
      setModalProps(modalProps);
      setModalContent(ContentMap[contentId]);
    }
    function ModalContent(props) {
      console.log(modalContent);
      return modalContent;
    }

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
