import styles from "./ModalViaje.module.css";

const ModalViaje = ({ viaje, onClose }) => {
  if (!viaje) {
    console.warn("⚠️ No hay datos de viaje recibidos");
    return null;
  }

  const ciudadSalida = viaje.ciudadSalida ?? "Sin ciudad";
  const paisSalida = viaje.paisSalida ?? "Sin país";
  const ciudadDestino = viaje.ciudadDestino ?? "Sin ciudad";
  const paisDestino = viaje.paisDestino ?? "Sin país";
  const tipoV = viaje.tipoViaje ?? "No disponible";
  const tipoT = viaje.transporte ?? "No disponible";
  const rangos = Array.isArray(viaje.rangosEdad)? viaje.rangosEdad.join(", "): "No especificado";
  console.log(viaje);
  return (
    <div className={styles.overlay} data-testid="modal-viaje">
      <div className={styles.modal}>
        <button aria-label="Cerrar" onClick={() => onClose()}>
          <span className="icon">❌</span>
        </button>

        <img src={viaje.imgPath} alt={viaje.title} className={styles.imagen} />

        <h2 className={styles.titulo}>{viaje.title}</h2>
        <p className={styles.descripcion}>{viaje.description}</p>

        <div className={styles.detalle}>
          <p><strong>Número de adultos:</strong> {viaje.numAdultos}</p>
          <p><strong>Fecha de ida:</strong> {viaje.fechaDeIda}</p>
          <p><strong>Número de niños:</strong> {viaje.numNinos}</p>
          <p><strong>Fecha de vuelta:</strong> {viaje.fechaDeVuelta}</p>
          <p><strong>Salida:</strong> {ciudadSalida}, {paisSalida}</p>
          <p><strong>Presupuesto:</strong> {viaje.presupuesto} €</p>
          <p><strong>Destino:</strong> {ciudadDestino}, {paisDestino}</p>
          <p><strong>Grupo o privado:</strong>{" "}{viaje.grupoOPrivado ? "Grupo" : "Privado"}</p>
          <p><strong>Accesible movilidad reducida:</strong>{" "}{viaje.discapacidadMovilRed ? "Sí" : "No"}</p>
          <p><strong>Organizado o a medida:</strong>{" "}{viaje.organizadoOMedida ? "A medida" : "Organizado"}</p>
          <p><strong>Tipo de viaje:</strong> {viaje.tipoViaje || "No disponible"}</p>
          <p><strong>Transporte:</strong> {viaje.transporte || "No disponible"}</p>
          <p><strong>Rango de edad:</strong> {Array.isArray(viaje.rangosEdad) && viaje.rangosEdad.length > 0 ? viaje.rangosEdad.join(", ") : "No especificado"}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalViaje;
