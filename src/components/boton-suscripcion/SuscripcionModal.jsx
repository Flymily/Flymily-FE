import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./SuscripcionModal.module.css";

const SuscripcionModal = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [suscrito, setSuscrito] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSuscrito(true);
    reset();
    setTimeout(() => {
      setMostrarModal(false);
      setSuscrito(false);
    }, 2000);
  };

  return (
    <>
      <div className={styles.botonWrapper}>
        <button
          className={styles.abrirBtn}onClick={() => setMostrarModal(true)}>
          Recibe las últimas novedades
        </button>
      </div>

      {mostrarModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Suscríbete a nuestras novedades</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <label htmlFor="nombre">Nombre:</label>
              <input
                id="nombre"
                type="text"
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                })}
                className={errors.nombre ? styles.errorInput : ""}
              />
              {errors.nombre && (
                <span className={styles.error}>{errors.nombre.message}</span>
              )}

              <label htmlFor="email">Correo electrónico:</label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Correo inválido",
                  },
                })}
                className={errors.email ? styles.errorInput : ""}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email.message}</span>
              )}

              <label className={styles.terminos}>
                <input
                  type="checkbox"
                  {...register("acepta", {
                    required: "Debes aceptar los términos",
                  })}
                />
                Acepto los términos y condiciones y el tratamiento de mis datos.
              </label>
              {errors.acepta && (
                <span className={styles.error}>{errors.acepta.message}</span>
              )}

              <button type="submit" className={styles.btnEnviar}>
                Suscribirse
              </button>
              {suscrito && (
                <p className={styles.success}>¡Gracias por suscribirte!</p>
              )}
            </form>

            <button
              className={styles.cerrarBtn}
              onClick={() => setMostrarModal(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SuscripcionModal;
