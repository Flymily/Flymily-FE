import React, { useEffect, useState } from "react";
import styles from "./Viajes.module.css";
import { mockViajes } from "../../mocks/mockViajes";

const Viajes = () => {
  const [viajes, setViajes] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setViajes(mockViajes);
    }, 500);
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