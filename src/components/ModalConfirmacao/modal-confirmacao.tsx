import React from 'react';
import styles from './modal-confirmacao.module.css';

type ModalConfirmacaoProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
};

export const ModalConfirmacao: React.FC<ModalConfirmacaoProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <header className={styles.modalHeader}>
          <h2>{title}</h2>
          <button onClick={onClose} className={styles.modalCloseButton}>X</button>
        </header>
        <div className={styles.modalContent}>
          {content}
        </div>
        <footer className={styles.modalFooter}>
          <button onClick={onClose} className={styles.modalConfirmButton}>
            Confirmar
          </button>
          <button onClick={onClose} className={styles.modalCancelButton}>
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  );
};
