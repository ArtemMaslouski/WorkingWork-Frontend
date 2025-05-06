import axios from 'axios';
import Cookies from 'js-cookie';
import { baseURL } from '../constants/someConstants';

const apiClient = axios.create({
    baseURL,
    withCredentials: true,
});

apiClient.interceptors.request.use(
    (config) => {
        const token = Cookies.get('access_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Проверка на 401 и чтобы это не был повторный запрос на обновление токена
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // Попробуем обновить токен
                const refreshResponse = await axios.post(
                    `${baseURL}/auth/refresh-token`, // 👉 ЗАМЕНИ путь, если другой
                    {},
                    { withCredentials: true }
                );

                const newAccessToken = refreshResponse.data.access_token;
                Cookies.set('access_token', newAccessToken);

                // Обновляем заголовок и повторяем оригинальный запрос
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return apiClient(originalRequest);
            } catch (refreshError) {
                console.error('Не удалось обновить токен', refreshError);
                // 👉 Тут можешь добавить редирект на login или очистку куков
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default apiClient;
