import api from './axiosInstance';
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
    Description,
  }) {
    try {
      const access_token = Cookies.get('access_token');
      if (!access_token) {
        throw new Error('Токен не найден. Пользователь не авторизован.');
      }
      const formattedBeginAt = BeginAt ? new Date(BeginAt).toISOString() : null;
      const formattedEndAt = EndAt ? new Date(EndAt).toISOString() : null;
      
      const response = await api.post('/tasks/create', {
        Category,
        Subcategory,
        Address,
        AddressEnd,
        BeginAt: formattedBeginAt,
        EndAt: formattedEndAt,
        Description,
      });

      return response.data;
    } catch (error) {
      console.error('Ошибка при создании задания:', error.response?.data || error.message);
      throw error;
    }
  }

  async getAllTasks() {
    try {
      const response = await api.get('/tasks/get');
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении заданий:', error.response?.data || error.message);
      throw error;
    }
  }

  async deleteTask({ id }) {
    try {
      const response = await api.delete('/tasks/delete', {
        data: { id },
      });
      return response.data;
    } catch (error) {
      console.error('Ошибка при удалении задания:', error.response?.data || error.message);
      throw error;
    }
  }

  async refreshTasks({ id, Category, Subcategory, Address, AddressEnd, BeginAt, EndAt, Description }) {
    try {
      const access_token = Cookies.get('access_token');
      if (!access_token) {
        throw new Error('Токен не найден. Пользователь не авторизован.');
      }

      const formattedBeginAt = BeginAt ? new Date(BeginAt).toISOString() : null;
      const formattedEndAt = EndAt ? new Date(EndAt).toISOString() : null;

      if (!formattedBeginAt || !formattedEndAt) {
        throw new Error('Некорректный формат даты');
      }

      const response = await api.put(`/tasks/refresh/${id}`, {
        Category,
        Subcategory,
        Address,
        AddressEnd,
        BeginAt: formattedBeginAt,
        EndAt: formattedEndAt,
        Description
      });
      return response.data;
    } catch (error) {
      console.error('Ошибка при обновлении задания:', error.response?.data || error.message);
      throw error;
    }
  }

  async getUserTasks() {
    try {
      const access_token = Cookies.get('access_token');
      if (!access_token) throw new Error('Не найден токен');
  
      const response = await api.get('/tasks/userTask');
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении заданий пользователя:', error.response?.data || error.message);
      throw error;
    }
  }
}

const TaskApi = new Tasks();
export default TaskApi;
