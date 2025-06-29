import axios from 'axios';


export const authRequest = async (username, password) => {
  const encoded = btoa(`${username}:${password}`);
  const res = await fetch("/api/auth/login", {
    method: "GET",
    headers: {
      Authorization: `Basic ${encoded}`,
    },
    credentials: "include", 
  });
}
const BASE_URL = 'http://localhost:8080/api';

const axiosService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

export const login = async (username, password) => {
  try {
    const response = await axiosService.post('/auth/login', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error en login:', error.response?.data || error.message);
    throw error;
  }
}
export const loginRequest = async (username, password) => {
  const encoded = btoa(`${username}:${password}`);
  const res = await fetch('/api/auth/login', {
    method: 'GET',
    headers: { Authorization: `Basic ${encoded}` },
    credentials: 'include'
  });

  if (!res.ok) throw new Error('Credenciales incorrectas');
  return res.data;
  
};

export const logoutRequest = () => {
  return axiosService.post('/auth/logout');
}