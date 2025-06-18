import { useState } from 'react';
import ViajeFormulario from './ViajeFormulario';
import ViajeLista from './ViajeLista';
import styles from './gestionViajes.module.css';

const GestionViajes = () => {
  const [viajeEditando, setViajeEditando] = useState(null);
  const [reload, setReload] = useState(false);

  const manejarRecarga = () => {
    setReload(!reload);
    setViajeEditando(null);
  };

return (
  <div className={styles.panel}>
    <div className={styles.contenido}>
      <ViajeFormulario viajeEditando={viajeEditando} onSuccess={manejarRecarga} />
      <ViajeLista onEdit={setViajeEditando} reload={reload} />
    </div>
  </div>
  );
}
export default GestionViajes;