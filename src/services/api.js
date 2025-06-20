// ⚠️ ya no usamos localStorage
import axios from 'axios';

export const api = axios.create({
  baseURL: '/api',
  withCredentials: true
});

export const apiProtected = axios.create({
  baseURL: '/api',
  withCredentials: true
});
