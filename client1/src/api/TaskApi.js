import axios from 'axios'
import { baseURL } from '../constants/someConstants'

class Tasks {
    async createTask ({ Category, Subcategory,Address,BeginAt,EndAt, Description}){
        try{
            const response = await axios.post(`${baseURL}/tasks/create`,{
                Category, Subcategory,Address,BeginAt,
                EndAt, Description
            });
            return response.data;
        }catch (error){
            console.error('Ошибка при создании задания:', error.response?.data || error.message);
            throw error;
        }
    }

    async getAllTasks(){
        try{
            const response = await axios.get(`${baseURL}/tasks/get`);
            return response.data;
        }catch(error){
            console.error('Ошибка при регистрации:', error.response?.data || error.message);
            throw error;
        }
    }

    async deleteTask ({id}){
        try {
            const response = await axios.delete(`${baseURL}/tasks/delete`, { data: { id } });
            return response.data;
        } catch (error) {
            console.error('Ошибка при удалении пользователя:', error.response?.data || error.message);
            throw error;
        }
    }

    async refreshTasks({id,Category, Subcategory,Address,BeginAt,EndAt, Description}){
        const response = await axios.put(`${baseURL}/tasks/refresh/${id}`,Category, Subcategory,Address,BeginAt,EndAt, Description);
        return response.data;
    } catch (error) {
        console.error('Ошибка при удалении пользователя:', error.response?.data || error.message);
        throw error;
    }
    
}

const TaskApi = new Tasks();
export default TaskApi;
