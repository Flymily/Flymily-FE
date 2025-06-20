import { useEffect, useState } from 'react';
import { getAllViajes } from '../../../services/viajes';
import styles from './viajeLista.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import ConfirmDialog from '../../ui/ConfirmDialog'; 


const ViajeLista = ({ onEdit, reload, esAdmin}) => {
  const [viajes, setViajes] = useState([]);
  const [idAEliminar, setIdAEliminar] = useState(null);

  const cargarViajes = async () => {
    try {
      const res = await getAllViajes();
      const data = res.data;
      const lista = Array.isArray(data) ? data : data.viajes || [];
      setViajes(lista);
    } catch (err) {
      console.error('❌ Error al obtener viajes', err);
      setViajes([]);
    }
  };

  useEffect(() => {
    cargarViajes();
  }, [reload]);

  const confirmarEliminar = async () => {
    try {
      await axios.delete(`/api/viajes/${idAEliminar}`);
      setIdAEliminar(null);
      cargarViajes();
    } catch (err) {
      console.error('❌ Error al eliminar', err);
    }
  };

  return (
    <div className={styles.lista}>
      <h2>Viajes publicados</h2>
      <div className={styles.grid}>
        {viajes.length > 0 ? (
          viajes.map((viaje) => (
            <div key={viaje.id} className={styles.card}>
              <img
                src={viaje.imgPath}
                alt={viaje.title}
                className={styles.imagen}
              />
              <h3>{viaje.title}</h3>
              <p><strong>Destino:</strong> {viaje.ciudadDestino}, {viaje.paisDestino}</p>
              <p><strong>Salida:</strong> {viaje.ciudadSalida} - {viaje.fechaDeIda}</p>
              {esAdmin && (
                <p><strong>Agencia:</strong> {viaje.agencia}</p>
              )}
              <div className={styles.botones}>
                <button onClick={() => onEdit(viaje)}>
                  <FaEdit /> Editar
                </button>
                <button onClick={() => setIdAEliminar(viaje.id)}>
                  <FaTrash /> Eliminar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay viajes disponibles.</p>
        )}
      </div>

      {idAEliminar !== null && (
        <ConfirmDialog
          mensaje="¿Deseas eliminar este viaje?"
          onConfirmar={confirmarEliminar}
          onCancelar={() => setIdAEliminar(null)}
        />
      )}
    </div>
  );
};

export default ViajeLista;
