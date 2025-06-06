import { useEffect } from 'react';
import { getAllViajes } from '../../services/viajes';

const PruebaConexion = () => {
  useEffect(() => {
    getAllViajes()
      .then(response => {
        console.log('✅ Conectado al backend:', response.data);
      })
      .catch(error => {
        console.error('❌ Error al conectar con el backend:', error);
      });
  }, []);

  return <div>Probando conexión con backend...</div>;
};

export default PruebaConexion;