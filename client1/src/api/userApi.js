import axios from 'axios';
//import { baseURL } from '../constants/someConstants';
import Cookies from 'js-cookie';
// import { toast } from 'react-toastify';

class Auth {
  async registerUser({ UserName, Email, Password }) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/auth/create-user`,
        {
          UserName,
          Email,
          Password,
        }
      );
      return response.data;
    } catch (error) {
      // console.error('Ошибка при регистрации:', error.response?.data || error.message);
      throw error;
    }
  }

  async login({ Email, Password }) {
    console.log('test1');
    console.log('Login');
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/auth/login`,
        {
          Email,
          Password,
        }
      );
      return response.data;
    } catch (error) {
      console.log(process.env.REACT_APP_URL);
      console.error(
        'Ошибка при регистрации:',
        error.response?.data || error.message
      );
      throw error;
    }
  }

  async getUsers() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/auth/get-users`
      );
      return response.data;
    } catch (error) {
      console.error(
        'Ошибка при регистрации:',
        error.response?.data || error.message
      );
      throw error;
    }
  }

  async sendVerificationEmail(Email) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/auth/send`,
        {
          Email,
        }
      );
      return response.data;
    } catch (error) {
      console.error(
        'Ошибка при отправке письма:',
        error.response?.data || error.message
      );
      throw error;
    }
  }

  async verificateUserWithCodeFromEmail(Code, Email) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/auth/forgotPassword`,
        { Code, Email }
      );
      return response.data;
    } catch (error) {
      console.log('Ошибка при отправке кода и почты');
      throw error;
    }
  }

  async resetPassword(Email, Password) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/auth/resetPassword`,
        { Email, Password }
      );
      return response.data;
    } catch (error) {
      console.log('Ошибка при изменении пароля');
      throw error;
    }
  }

  async deleteUser() {
    try {
      const access_token = Cookies.get('access_token');
      console.log('токен', access_token);

      if (!access_token) {
        throw new Error('Токен не найден.');
      }

      console.log('Отправка запроса на удаление пользователя');

      await axios.delete(`${process.env.REACT_APP_URL}/auth/delete-users`, {
        withCredentials: true,
      });

      // return response.data;
    } catch (error) {
      console.error(
        'Ошибка удаления пользователя:',
        error.response?.data || error.message
      );
      throw error;
    }
  }
}

const AuthPeople = new Auth();
export default AuthPeople;
