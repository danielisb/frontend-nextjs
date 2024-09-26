/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from '@/styles/context-api.module.css';
import { ToastMessage } from '@/components/ToastMessage';
import { useToast } from '@/contexts/ToastProvider';
import { IToastMessage } from '@/types/toast-message';
import { v4 as uuidv4 } from 'uuid';

export default function ContextApi() {
  const { messages, addMessage } = useToast();

  function handleSuccessButtonClick() {
    const successMessage: IToastMessage = {
      id: uuidv4(),
      message: 'Mensagem de sucesso disparada!',
      type: 'success',
    };
    addMessage(successMessage);
  }

  function handleErrorButtonClick() {
    const errorMessage: IToastMessage = {
      id: uuidv4(),
      message: 'Mensagem de erro disparada!',
      type: 'error',
    };
    addMessage(errorMessage);
  }

  return (
    <>
      <div className={styles.container}>
        <button type="button" onClick={handleSuccessButtonClick}>
          Disparar mensagem de sucesso
        </button>
        <button type="button" onClick={handleErrorButtonClick}>
          Disparar mensagem de erro
        </button>
      </div>

      <div className={styles['toast-container']}>
        {messages.map((message) => (
          <ToastMessage key={message.id} content={message} />
        ))}
      </div>
    </>
  );
}
