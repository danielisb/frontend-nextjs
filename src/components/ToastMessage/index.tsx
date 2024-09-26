import { IToastMessage } from '@/types/toast-message';
import styles from './toast-message.module.css';

type ToastMessageProps = {
  content: IToastMessage;
};

export const ToastMessage = ({ content }: ToastMessageProps) => {
  return (
    <div className={`${styles.toast} ${styles[content.type]}`}>
      {content.message}
    </div>
  );
};
