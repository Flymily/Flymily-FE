import { api } from './api';

export const getContenidoComunidad = () => api.get('/comunidad');

export const updateContenidoComunidad = (nuevoContenido) =>
  api.put('/comunidad', { contenido: nuevoContenido });