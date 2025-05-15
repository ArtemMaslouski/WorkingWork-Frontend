import axios from 'axios';
//import { baseURL } from '../constants/someConstants';
import Cookies from 'js-cookie';

class Tasks {
  async createTask({
    Category,
    Subcategory,
    Address,
    AddressEnd,
    BeginAt,
    EndAt,
    Description,я
  }) {
    try {
      const access_token = Cookies.get('access_token'); // Получаем токен из кук
      if (!access_token) {
        throw new Error('Токен не найден. Пользователь не авторизован.');
      }

      const response = await axios.post(
        `${process.env.REACT_APP_URL}/tasks/create`,
        {
          Category,
          Subcategory,
          Address,
          AddressEnd,
          BeginAt: new Date(BeginAt).toISOString(),
          EndAt: new Date(EndAt).toISOString(),
          Description,
        },
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      console.error(
        'Ошибка при создании задания:',
        error.response?.data || error.message
      );
      throw error;
    }
  }

  async getAllTasks() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/tasks/get`
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

  async deleteTask({ id }) {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_URL}/tasks/delete`,
        {
          data: { id },
        }
      );
      return response.data;
    } catch (error) {
      console.error(
        'Ошибка при удалении пользователя:',
        error.response?.data || error.message
      );
      throw error;
    }
  }

  async refreshTasks({
    id,
    Category,
    Subcategory,
    Address,
    AddressEnd,
    BeginAt,
    EndAt,
    Description,
  }) {
    const response = await axios.put(
      `${process.env.REACT_APP_URL}/tasks/refresh/${id}`,
      Category,
      Subcategory,
      Address,
      BeginAt,
      EndAt,
      Description
    );
    return response.data;
  }
  catch(error) {
    console.error(
      'Ошибка при удалении пользователя:',
      error.response?.data || error.message
    );
    throw error;
  }

  async getUserTasks() {
    try {
      const access_token = Cookies.get('access_token');
      if (!access_token) throw new Error('Не найден токен');
  
      const response = await axios.get(`${process.env.REACT_APP_URL}/tasks/userTask`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении заданий пользователя:', error.response?.data || error.message);
      throw error;
    }
  }
  
  
}

const TaskApi = new Tasks();
export default TaskApi;
