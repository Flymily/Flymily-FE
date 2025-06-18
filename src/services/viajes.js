import { api } from './api';
import { apiProtected } from './apiProtected';

export const getAllViajesPublicos = () =>api.get('/viajes/filtrar/detalle/all');
export const getAllViajes        = () => api.get('/viajes/filtrar/detalle/all');


export const createViaje = body => apiProtected.post('/viajes/crear', body);