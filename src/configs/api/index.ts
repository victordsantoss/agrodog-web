import { AuthStorage } from '@/storages/authStorage';
import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})


api.interceptors.request.use(
  (config) => {
    const token = AuthStorage.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Aqui verificar o tipo de erro, se for 401 limpar dados de local storage e mandá-lo para a tela de login
    return Promise.reject(error);
  }
);