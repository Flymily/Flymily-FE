import axios from 'axios';

export const api = axios.create({
  baseURL: '/api',
  withCredentials: true
});

export const apiPublic = axios.create({
  baseURL: '/api',
  withCredentials: false 
});

export const apiProtected = axios.create({
  baseURL: '/api',
  withCredentials: true
});
