import api from './axiosInstance';
//import { baseURL } from '../constants/someConstants';
import Cookies from 'js-cookie';
// import apiClient from './apiClient'

class Auth {
  async registerUser({ UserName, Email, Password }) {
    try {
      const response = await api.post('/auth/create-user', {
        UserName,
        Email,
        Password,
      });
      return response.data;
    } catch (error) {
      console.error('Ошибка при регистрации:', error.response?.data || error.message);
      throw error;
    }
  }

  async login({ Email, Password }) {
    try {
      const response = await api.post('/auth/login', {
        Email,
        Password,
      });
      return response.data;
    } catch (error) {
      console.error('Ошибка при входе:', error.response?.data || error.message);
      throw error;
    }
  }

  async getUsers() {
    try {
      const response = await api.get('/auth/get-users');
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении пользователей:', error.response?.data || error.message);
      throw error;
    }
  }

  async sendVerificationEmail(Email) {
    try {
      const response = await api.post('/auth/send', { Email });
      return response.data;
    } catch (error) {
      console.error('Ошибка при отправке письма:', error.response?.data || error.message);
      throw error;
    }
  }

  async verificateUserWithCodeFromEmail(Code, Email) {
    try {
      const response = await api.post('/auth/forgotPassword', { Code, Email });
      return response.data;
    } catch (error) {
      console.error('Ошибка при верификации кода:', error.response?.data || error.message);
      throw error;
    }
  }

  async resetPassword(Email, Password) {
    try {
      const response = await api.post('/auth/resetPassword', { Email, Password });
      return response.data;
    } catch (error) {
      console.error('Ошибка при сбросе пароля:', error.response?.data || error.message);
      throw error;
    }
  }

  async deleteUser() {
    try {
      const access_token = Cookies.get('access_token');
      if (!access_token) {
        throw new Error('Токен не найден.');
      }

      await api.delete('/auth/delete-users');
    } catch (error) {
      console.error('Ошибка удаления пользователя:', error.response?.data || error.message);
      throw error;
    }
  }
}

const AuthPeople = new Auth();
export default AuthPeople;
