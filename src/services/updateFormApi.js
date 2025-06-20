import { apiProtected } from './api';

export const updateFormApi = async (id, data) => {
  const response = await apiProtected.put(`/posts-comunidad/auth/update/${id}`, data);
  return response.data;
};