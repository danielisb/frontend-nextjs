import { useState, useEffect } from 'react';

type CounterProps = {
  initialCount: number;
  onMount: () => void;
  onUnmount: () => void;
  onUpdate: (count: number) => void;
  onComplete: () => void;
};

export const Counter: React.FC<CounterProps> = ({ initialCount, onMount, onUnmount, onUpdate, onComplete }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    onMount();
    console.log('Componente montado!');

    return () => {
      onUnmount();
      console.log('Componente desmontado!');
    };
  }, []);

  useEffect(() => {
    onUpdate(count);
    console.log('Componente atualizado!');

    if (count >= 10) {
      onComplete();
    }
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleIncrement}>Incrementar +</button>
    </div>
  );
};
