import axios from 'axios'
import {baseURL} from '../constants/someConstants'

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

    async addMobilePhone(PhoneNumber) {
        try{
            const response  = await axios.post(`${baseURL}/user-info/add-phone-number`);
            return response.data;
        }catch(error){
            console.log('Ошибка добавления номера телефона',  error.response);
            throw error;
        }
    }

    async addUserInfo({Name, Surname, BirthdayDate, Sex, City, Email}){
        try{
            const response = await axios.post(`${baseURL}/user-info/add-user-info`)
            return response.data;
        }catch(error){
            console.log('Ошибка добавления информации о пользователя', error.response);
            return response;
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
