import React, { useEffect, useState } from "react";
import { mockViajes } from "../../../mocks/mockViajes";
import styles from "./GestionViajes.module.css";

const GestionViajes = () => {
  const [viajes, setViajes] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setViajes(mockViajes);
    }, 500);
  }, []);

  return (
    <div className={styles.gestionContainer}>
      <h3>Listado de viajes</h3>
      {viajes.length === 0 ? (
        <p>Cargando viajes...</p>
      ) : (
        <div className={styles.lista}>
          {viajes.map((viaje) => (
            <div key={viaje.id} className={styles.card}>
              <img
                src={viaje.imagen}
                alt={viaje.titulo}
                className={styles.imagenAdmin}
              />
              <h4>{viaje.titulo}</h4>
              <p>{viaje.descripcion}</p>
              <div className={styles.botones}>
                <button className={styles.editar}>✏️ Editar</button>
                <button className={styles.eliminar}>🗑 Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GestionViajes;