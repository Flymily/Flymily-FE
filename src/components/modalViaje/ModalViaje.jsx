import React from "react";
import styles from "./ModalViaje.module.css";

const ModalViaje = ({ viaje, onClose }) => {
  if (!viaje) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.cerrar} onClick={onClose}>✖</button>

        <img src={viaje.imgPath} alt={viaje.title} className={styles.imagen} />

        <h2>{viaje.title}</h2>
        <p>{viaje.description}</p>

        <div className={styles.detalle}>
          <p><strong>Destino:</strong> {viaje.ciudadDestino}, {viaje.paisDestino}</p>
          <p><strong>Salida:</strong> {viaje.ciudadSalida}, {viaje.paisSalida}</p>
          <p><strong>Fechas:</strong> {viaje.fechaDeIda} - {viaje.fechaDeVuelta}</p>
          <p><strong>Tipo:</strong> {viaje.tipoViaje?.nombre}</p>
          <p><strong>Transporte:</strong> {viaje.transporte?.nombre}</p>
          <p><strong>Presupuesto:</strong> {viaje.presupuesto} €</p>
        </div>
      </div>
    </div>
  );
};

export default ModalViaje;