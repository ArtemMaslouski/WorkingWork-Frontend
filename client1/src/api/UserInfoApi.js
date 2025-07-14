import api from './axiosInstance';
import Cookies from 'js-cookie';

class UserInfo {
  async changePassword({ OldPassword, Password, NewPassword }) {
    try {
      const access_token = Cookies.get('access_token');
      if (!access_token) throw new Error('Не найден токен');
      
      const response = await api.post('/user-info/change-password', {
        OldPassword,
        Password,
        NewPassword
      });
      return response.data;
    } catch (error) {
      console.error('Ошибка при изменении пароля:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
      throw error;
    }
  }

  async addDescription({ Description }) {
    try {
      const access_token = Cookies.get('access_token');
      if (!access_token) throw new Error('Не найден токен');

      const response = await api.post('/user-info/add-description', { Description });
      return response.data;
    } catch (error) {
      console.error('Ошибка при добавлении описания:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
      throw error;
    }
  }

  async getUserInfo() {
    try {
      const response = await api.get('/user-info/get-info');
      return response.data;
    } catch (error) {
      console.error('Ошибка получения данных пользователя:', error);
      throw error;
    }
  }

  async addMobilePhone({ PhoneNumber }) {
    try {
      const access_token = Cookies.get('access_token');
      if (!access_token) throw new Error('Не найден токен');

      const response = await api.post('/user-info/add-phone-number', { PhoneNumber });
      return response.data;
    } catch (error) {
      console.error('Ошибка добавления номера телефона:', error.response?.data || error.message);
      throw error;
    }
  }

  async addUserInfo({ Name, Surname, BirthdayDate, Sex, City, Email }) {
    try {
      const access_token = Cookies.get('access_token');
      if (!access_token) throw new Error('Не найден токен');

      const formattedDate = BirthdayDate ? new Date(BirthdayDate).toISOString() : null;
      
      const response = await api.post('/user-info/add-user-info', {
        Name,
        Surname,
        BirthdayDate: formattedDate,
        Sex,
        City,
        Email
      });
      return response.data;
    } catch (error) {
      console.error('Ошибка сохранения данных:', error.response?.data || error.message);
      throw error;
    }
  }

  async uploadFilePhoto(file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await api.post('/user-info/upload-avatar', formData);
      return response.data;
    } catch (error) {
      console.error('Ошибка загрузки фото:', error.response?.data || error.message);
      return null;
    }
  }
}

const UsInfo = new UserInfo();
export default UsInfo;
