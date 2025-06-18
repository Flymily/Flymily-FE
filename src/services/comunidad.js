import { api } from './api';

export const getContenidoComunidad = () => api.get('/posts-comunidad');

export const updateContenidoComunidad = (nuevoContenido) => 
  api.put('/posts-comunidad', { contenido: nuevoContenido });