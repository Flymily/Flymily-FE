import { apiPublic } from './api';

export const getAllTiposViajePublicos = () => apiPublic.get('/tipos-viaje/all');