import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

const axiosService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const login = async (email, contraseña) => {
  try {
    const response = await axiosService.post('/auth/login', { email, contraseña });
    return response.data;
  } catch (error) {
    console.error('Error en login:', error.response?.data || error.message);
    throw error;
  }
};