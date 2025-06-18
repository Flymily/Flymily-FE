import axios from 'axios';

export const api = axios.create({
  baseURL: '/api',
});


api.interceptors.request.use((config) => {
  const auth = localStorage.getItem('auth');
  if (auth) config.headers.Authorization = `Basic ${auth}`;
  return config;
});