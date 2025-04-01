import axios from 'axios'
import {baseURL} from '../constants/someConstants'
import Cookies from 'js-cookie';

class UserInfo {
    
    async changePassword({ OldPassword, Password, NewPassword }) {
        try {
            const response = await axios.post(`${baseURL}/user-info/change-password`, {
                OldPassword, Password, NewPassword
            });
            return response.data;
        } catch (error) {
            console.error('Ошибка при регистрации:', error.response?.data || error.message);
            throw error;
        }
    }

    async getUserInfo (){
        try{
            const response = await axios.get(`${baseURL}/user-info/get-info`);
            return response.data;

        }catch(error){
            console.log('Ошибка получения данных пользователя', error.response);
            throw error;
        }
    }

    async addMobilePhone({ PhoneNumber }) {
        try {
            const token = Cookies.get('access_token');
            if (!token) throw new Error('Не найден токен');
            
            const response = await axios.post(`${baseURL}/user-info/add-phone-number`, 
                { 
                    PhoneNumber 
                },
                { 
                    headers: { Authorization: `Bearer ${token}` },
                    withCredentials: true 
                }
            );
            console.log('ответ', response.data);  // Выводим ответ сервера
           
            return response.data;
        } catch (error) {
            console.error('Ошибка добавления номера телефона:', error.response?.data || error.message);
            throw error; // Бросаем ошибку дальше
        }
    }


    async addUserInfo({ Name, Surname, BirthdayDate, Sex, City, Email }) {
        
        try {
           
            const token = Cookies.get('access_token');
            console.log('Токен:', token); // Должен быть валидный JWT
            if (!token) {
            console.error('Токен не найден в куках');
        }
            const formattedDate = BirthdayDate ? new Date(BirthdayDate).toISOString() : null;
            console.log("Отправляемые данные:", { 
                Name, Surname, BirthdayDate: formattedDate, Sex, City, Email 
            });
    
            const response = await axios.post(`${baseURL}/user-info/add-user-info`, 
                { Name, Surname, BirthdayDate: formattedDate, Sex, City, Email },
                { 
                    headers: { Authorization: `Bearer ${token}` },
                    withCredentials: true
                }
            );
    
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
            const response = await axios.post(`${baseURL}/user-info/upload-avatar`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', 
                },
            });
            return response.data; 
        } catch (error) {
            console.log('Ошибка добавления информации о пользователе', error.response);
            return null; 
        }
    }
}


const UsInfo = new UserInfo();
export default UsInfo;
