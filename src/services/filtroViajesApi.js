import { apiPublic } from './api';

export const filtroViajesApi = (filtroPayload) => apiPublic.post('/viajes/filtrar', filtroPayload);