import axios from 'axios';

export const apiProtected = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

apiProtected.interceptors.request.use(cfg => {
  const auth = localStorage.getItem('auth');
  if (auth) cfg.headers.Authorization = `Basic ${auth}`;
  return cfg;
});