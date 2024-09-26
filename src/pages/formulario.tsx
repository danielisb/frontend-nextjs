/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import { useForm } from 'react-hook-form';
import styles from '@/styles/formulario.module.css';

type FormData = {
  name: string;
  email: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar o usuário');
      }

      const result = await response.json();
      console.log('Usuário criado:', result);

      reset();
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Ocorreu um erro ao criar o usuário.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Nome"
              {...register('name', { required: 'O nome é obrigatório' })}
            />
            {errors.name && 
				<p className={styles.error}>{errors.name.message}</p>
			}
          </div>

          <div>
            <input
              type="email"
              placeholder="E-mail"
              {...register('email', {
                required: 'O e-mail é obrigatório',
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: 'E-mail inválido',
                },
              })}
            />
            {errors.email &&
				<p className={styles.error}>{errors.email.message}</p>
			}
          </div>

          <button type="submit" data-type="confirm" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </div>
  );
}
