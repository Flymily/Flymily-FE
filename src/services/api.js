// ⚠️ ya no usamos localStorage
import axios from 'axios';

export const api = axios.create({
  baseURL: '/api',
  withCredentials: true
});


// 👉 Para endpoints que NO requieren cookies/sesión
export const apiPublic = axios.create({
  baseURL: '/api',
  withCredentials: false // 👈 importante
});

export const apiProtected = axios.create({
  baseURL: '/api',
  withCredentials: true
});
