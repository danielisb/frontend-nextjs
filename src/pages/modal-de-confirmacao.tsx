/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from 'react';
import styles from '@/styles/modal.module.css';
import { ModalConfirmacao } from '../components/ModalConfirmacao/modal-confirmacao';

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <main className={styles.container}>
        <button type="button" onClick={() => setModalIsOpen(true)}>
          Abrir modal de confirmação
        </button>
      </main>

      <ModalConfirmacao
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        title="Confirmação"
        content={<p>Você tem certeza que deseja continuar?</p>}
      />
    </>
  );
}
