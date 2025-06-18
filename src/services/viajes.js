import { api } from './api';

export const getAllViajesPublicos = () => api.get('/viajes/filtrar/detalle/all');
export const getViajes = () => api.get('/viajes/filtrar/detalle/all');
export const getAllViajes = () => api.get('/viajes/filtrar/detalle/all');

export const createViaje = (viaje, ciudadSalida, paisSalida, ciudadDestino, paisDestino, tipoViaje, transporte) => {
  return api.post(
    `/viajes/filtrar/detalle/all/${ciudadSalida}/${paisSalida}/${ciudadDestino}/${paisDestino}/${tipoViaje}/${transporte}`,
    viaje
  );
};

