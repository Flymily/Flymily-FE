import { useEffect, useState } from 'react';
import { getAllViajes } from '../../../services/viajes';
import styles from './viajeLista.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';

const ViajeLista = ({ onEdit, reload }) => {
  const [viajes, setViajes] = useState([]);

  const cargarViajes = async () => {
    try {
      const res = await getAllViajes();

      // Verifica si es un array directo o viene dentro de una propiedad
      const data = res.data;
      const lista = Array.isArray(data) ? data : data.viajes || [];

      setViajes(lista);
    } catch (err) {
      console.error('❌ Error al obtener viajes', err);
      setViajes([]); // Previene crash si hay error
    }
  };

  useEffect(() => {
    cargarViajes();
  }, [reload]);

  const eliminarViaje = async (id) => {
    try {
      await axios.delete(`/api/viajes/${id}`);
      cargarViajes();
    } catch (err) {
      console.error('❌ Error al eliminar', err);
    }
  };

  return (
    <div className={styles.lista}>
      <h2>Viajes publicados</h2>
      <div className={styles.grid}>
        {Array.isArray(viajes) && viajes.length > 0 ? (
          viajes.map((viaje) => (
            <div key={viaje.id} className={styles.card}>
              <img
                src={viaje.imgPath}
                alt={viaje.title}
                className={styles.imagen}
              />
              <h3>{viaje.title}</h3>
              <p>
                <strong>Destino:</strong> {viaje.ciudadDestino}, {viaje.paisDestino}
              </p>
              <p>
                <strong>Salida:</strong> {viaje.ciudadSalida} - {viaje.fechaDeIda}
              </p>
              <p>
                <strong>Agencia:</strong> {viaje.agencia}
              </p>
              <div className={styles.botones}>
                <button onClick={() => onEdit(viaje)}>
                  <FaEdit /> Editar
                </button>
                <button onClick={() => eliminarViaje(viaje.id)}>
                  <FaTrash /> Eliminar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay viajes disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ViajeLista;
