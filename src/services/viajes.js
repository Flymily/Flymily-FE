import { api } from './api';

//export const getViajes = () => api.get('/viaje');
export const getAllViajes = () => api.get('/viaje');

export const createViaje = (viaje, ciudadSalida, paisSalida, ciudadDestino, paisDestino, tipoViaje, transporte) => {
  return api.post(
    `/viaje/${ciudadSalida}/${paisSalida}/${ciudadDestino}/${paisDestino}/${tipoViaje}/${transporte}`,
    viaje
  );
};

