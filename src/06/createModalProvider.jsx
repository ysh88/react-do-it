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
