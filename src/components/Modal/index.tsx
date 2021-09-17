import { ReactNode, useEffect, useRef, useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  setIsOpen: () => void;
  isOpen: boolean;
  children: ReactNode;
}

function Modal({ setIsOpen, isOpen, children }: ModalProps) {
  const [modalStatus, setModalStatus] = useState(isOpen);

  const prevIsOpen = useRef<boolean>();

  useEffect(() => {
    prevIsOpen.current = isOpen;
  })

  const isOpenPreviousValue = prevIsOpen.current ?? isOpen;

  useEffect(() => {
    if (isOpenPreviousValue !== isOpen) {
      setModalStatus(isOpen);
    }
  }, [isOpen, isOpenPreviousValue])

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
