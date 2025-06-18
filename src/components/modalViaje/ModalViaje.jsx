import React from "react";
import styles from "./ModalViaje.module.css";

const ModalViaje = ({ viaje, onClose }) => {
  if (!viaje) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.cerrar} onClick={onClose}>✖</button>

        <img src={viaje.imgPath} alt={viaje.title} className={styles.imagen} />

        <h2 className={styles.titulo}>{viaje.title}</h2>
        <p className={styles.descripcion}>{viaje.description}</p>

        <div className={styles.detalle}>
          <p><strong>Número de adultos:</strong> {viaje.numAdultos}</p>
          <p><strong>Fecha de ida:</strong> {viaje.fechaDeIda || "Por confirmar"}</p>
          <p><strong>Número de niños:</strong> {viaje.numNinos}</p>
          <p><strong>Fecha de vuelta:</strong> {viaje.fechaDeVuelta || "Por confirmar"}</p>
          <p><strong>Salida:</strong> {viaje.localidadSalida?.ciudad || "Sin ciudad"}, {viaje.localidadSalida?.pais || "Sin país"}</p>
          <p><strong>Presupuesto:</strong> {viaje.presupuesto} €</p>
          <p><strong>Destino:</strong> {viaje.localidadDestino?.ciudad || "Sin ciudad"}, {viaje.localidadDestino?.pais || "Sin país"}</p>
          <p><strong>Grupo o privado:</strong> {viaje.grupoOPrivado ? "Grupo" : "Privado"}</p>
          <p><strong>Accesible movilidad reducida:</strong> {viaje.discapacidadMovilRed ? "Sí" : "No"}</p>
          <p><strong>Organizado o a medida:</strong> {viaje.organizadoOMedida ? "A medida" : "Organizado"}</p>
          <p><strong>Tipo de viaje:</strong> {viaje.tipoViaje?.tipoViaje || "No disponible"}</p>
          <p><strong>Transporte:</strong> {viaje.transporte?.tipoTransporte || "No disponible"}</p>
          <p><strong>Rango de edad:</strong> {Array.isArray(viaje.edadRangos) && viaje.edadRangos.length > 0? viaje.edadRangos.map(r => r.descripcion).join(", "): "No especificado"}</p>
        </div>

      </div>
    </div>
  );
};

export default ModalViaje;