import { createContext, useContext, useState } from 'react';
import { IToastMessage } from '@/types/toast-message';

type ToastContextType = {
  messages: IToastMessage[];
  addMessage: (message: IToastMessage) => void;
  removeMessage: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const addMessage = (message: IToastMessage) => {
    setMessages((prev) => [...prev, message]);

    setTimeout(() => {
      removeMessage(message.id);
    }, 3000);
  };

  const removeMessage = (id: string) => {
    setMessages((prev) => prev.filter((message) => message.id !== id));
  };

  return (
    <ToastContext.Provider value={{ messages, addMessage, removeMessage }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
