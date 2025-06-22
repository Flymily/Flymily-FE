import styles from './PopupExito.module.css';

const PopupExito = ({ mensaje, onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupBox}>
        <p>{mensaje}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default PopupExito;