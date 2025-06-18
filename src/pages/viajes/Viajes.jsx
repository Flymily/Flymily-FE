import React, { useEffect, useState } from "react";
import styles from "./Viajes.module.css";
import ModalViaje from "../../components/modalViaje/ModalViaje";
import { getAllViajesPublicos } from '../../services/viajes';

const Viajes = () => {
  const [viajes, setViajes] = useState([]);
  const [viajeSeleccionado, setViajeSeleccionado] = useState(null);

  useEffect(() => {
    const fetchViajes = async () => {
      try {
        const response = await getAllViajesPublicos();
        console.log("Viajes desde la API:", response.data);
        console.log("✳️ Viajes recibidos:", response.data);
        setViajes(response.data);
      } catch (error) {
        console.error("❌ Error al cargar viajes:", error);
      }
    };

    fetchViajes();
  }, []);

  return (
    <div className={styles.viajesContainer}>
      <h2 className={styles.titulo}>Viajes destacados</h2>

      {viajes.length === 0 ? (
        <p className={styles.mensaje}>Cargando viajes...</p>
      ) : (
        <div className={styles.grid}>
          {viajes.map((viaje) => (
            <div
              key={viaje.id}
              className={styles.card}
              onClick={() => setViajeSeleccionado(viaje)}
              style={{ cursor: "pointer" }}
            >
              <img src={viaje.imgPath} alt={viaje.title} className={styles.imagenViaje} />
              <h3>{viaje.title}</h3>
              <p>{viaje.description.length > 80 
                  ? viaje.description.slice(0, 80) + "..." 
                  : viaje.description}</p>
              <span className={styles.tipo}>{viaje.tipo}</span>
            </div>
          ))}
        </div>
      )}
      {viajeSeleccionado && (
        <ModalViaje
          viaje={viajeSeleccionado}
          onClose={() => setViajeSeleccionado(null)}
        />
      )}
    </div>
  );
};

export default Viajes;