import { apiProtected } from './api';

export const createFormApi = async (data) => {
  const response = await apiProtected.post('/posts-comunidad/auth/create', data);
  return response.data;
};

export const updateFormApi = async (id, data) => {
  const response = await apiProtected.put(`/posts-comunidad/auth/update/${id}`, data);
  return response.data;
};

export const deleteFormApi = async (id) => {
  const response = await apiProtected.delete(`/posts-comunidad/auth/delete/${id}`);
  return response.data;
};