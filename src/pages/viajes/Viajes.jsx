import React, { useEffect, useState } from "react";
import styles from "./Viajes.module.css";
//import { getViajes } from '../../services/viajes';

import { getAllViajesPublicos } from '../../services/viajes';

const Viajes = () => {
  const [viajes, setViajes] = useState([]);

  useEffect(() => {
    const fetchViajes = async () => {
      try {
        const response = await getAllViajesPublicos();
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
            <div key={viaje.id} className={styles.card}>
              <img src={viaje.imagen} alt={viaje.titulo} className={styles.imagenViaje} />
              <h3>{viaje.titulo}</h3>
              <p>{viaje.descripcion}</p>
              <span className={styles.tipo}>{viaje.tipo}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Viajes;