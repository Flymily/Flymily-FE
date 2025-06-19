import styles from './ConfirmDialog.module.css';

const ConfirmDialog = ({ mensaje, onConfirmar, onCancelar }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3 className={styles.titulo}>¡Eii! Cuidado </h3>
        <p className={styles.mensaje}>{mensaje}</p>
        <div className={styles.botones}>
          <button className={styles.si} onClick={onConfirmar}>Sí, eliminar</button>
          <button className={styles.no} onClick={onCancelar}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;