import axios from 'axios';
const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const refreshResponse = await api.post('/auth/refresh');
        if (refreshResponse.status === 200) {
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.error('Не удалось обновить токен: ', refreshError);
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);
