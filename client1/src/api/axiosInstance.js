import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
  withCredentials: true,
});

// Функция для обновления токена
const refreshToken = async () => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_URL}/auth/refresh`, {}, {
      withCredentials: true
    });
    return response.data.access_token;
  } catch (error) {
    return null;
  }
};

// Перехватчик запросов
api.interceptors.request.use(
  async (config) => {
    const token = Cookies.get('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Ошибка в перехватчике запросов:', error);
    return Promise.reject(error);
  }
);

// Перехватчик ответов
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Если это ошибка 401 и запрос еще не повторялся
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newToken = await refreshToken();
        if (newToken) {
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.error('Ошибка при обновлении токена:', refreshError);
      }
    }

    // Если это ошибка 500, пробуем обновить токен и повторить запрос
    if (error.response?.status === 500 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await refreshToken();
        if (newToken) {
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.error('Ошибка при обновлении токена:', refreshError);
      }
    }

    // Логируем информацию об ошибке
    console.error('Ошибка запроса:', {
      url: originalRequest.url,
      method: originalRequest.method,
      status: error.response?.status,
      data: error.response?.data
    });

    return Promise.reject(error);
  }
);

// Функция для принудительного обновления токена
// export const forceTokenRefresh = async () => {
//   return await refreshToken();
// };

export default api;
