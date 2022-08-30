import React, { useState, useContext } from 'react';
import Modal from './Modal';
import { ModalContext2 } from './ModalContext';

export default function createModalProvider(ContentMap = {}) {
  return function ModalProvider({ children }) {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    function handleClose() {
      setShowModal(false);
    }

    function handleOpen(contentId) {
      setShowModal(true);
      setModalContent(ContentMap[contentId]);
    }

    const value = {
      state: {
        showModal,
        modalContent,
      },
      actions: {
        openModal: handleOpen,
        closeModal: handleClose,
      },
    };
    return (
      <ModalContext2.Provider value={value}>
        {children}
        {showModal && modalContent && <Modal>{modalContent}</Modal>}
      </ModalContext2.Provider>
    );
  };
}
