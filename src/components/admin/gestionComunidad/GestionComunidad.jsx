import { useState } from 'react';
import ComunidadFormulario from './ComunidadFormulario';
import ComunidadLista from './ComunidadLista';
import styles from './GestionComunidad.module.css';

const GestionComunidad = () => {
  const [postEditando, setPostEditando] = useState(null);
  const [reload, setReload] = useState(false);

  const manejarRecarga = () => {
    setReload(!reload);
    setPostEditando(null);
  };

  return (
    <div className={styles.panel}>
      <div className={styles.contenido}>
        <ComunidadFormulario postEditando={postEditando} onSuccess={manejarRecarga} />
        <ComunidadLista onEdit={setPostEditando} reload={reload} esAdmin={true} />
      </div>
    </div>
  );
};

export default GestionComunidad;
