import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './Contacto.module.css';

const Contacto = () => {
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setEnviado(true);
    reset();
  };

  return (
    <div className={styles.contactContainer}>
      
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h1 className={styles.title}>Contacto</h1>
        <label>
          Nombre:
          <input
            type="text"
            {...register('nombre', { required: 'El nombre es obligatorio' })}
            className={errors.nombre ? styles.errorInput : ''}
          />
          {errors.nombre && <span className={styles.error}>{errors.nombre.message}</span>}
        </label>

        <label>
          Teléfono:
          <input
            type="tel"
            {...register('telefono', {
              required: 'El teléfono es obligatorio',
              pattern: {
                value: /^\d{9}$/,
                message: 'Debe tener 9 dígitos',
              },
            })}
            className={errors.telefono ? styles.errorInput : ''}
          />
          {errors.telefono && <span className={styles.error}>{errors.telefono.message}</span>}
        </label>

        <label>
          Correo electrónico:
          <input
            type="email"
            {...register('email', {
              required: 'El correo es obligatorio',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Correo inválido',
              },
            })}
            className={errors.email ? styles.errorInput : ''}
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </label>

        <label>
          Mensaje (máx. 200 caracteres):
          <textarea
            maxLength={200}
            {...register('mensaje', {
              required: 'El mensaje es obligatorio',
              maxLength: {
                value: 200,
                message: 'Máximo 200 caracteres',
              },
            })}
            className={errors.mensaje ? styles.errorInput : ''}
          />
          {errors.mensaje && <span className={styles.error}>{errors.mensaje.message}</span>}
        </label>

        <button type="submit" className={styles.button}>Enviar</button>

        {enviado && <p className={styles.success}>¡Mensaje enviado correctamente!</p>}
      </form>
    </div>
  );
};

export default Contacto;
