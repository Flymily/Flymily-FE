import { api } from './api';

export const getContenidoComunidad = () => api.get('/posts-comunidad/view/all');

export const updateContenidoComunidad = (nuevoContenido) => 
  api.put('/posts-comunidad/view/all', { contenido: nuevoContenido });