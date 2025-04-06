import axios from 'axios'
import {baseURL} from '../constants/someConstants'
import Cookies from 'js-cookie';
// import { toast } from 'react-toastify';

class Auth {
    
    async registerUser({ UserName, Email, Password }) {
        try {
            const response = await axios.post(`${baseURL}/auth/create-user`, {
                UserName, Email,Password
            });
            return response.data;
        } catch (error) {
            // console.error('Ошибка при регистрации:', error.response?.data || error.message);
            throw error;
        }
    }

    async login({Email, Password}){
        try{
            const response = await axios.post(`${baseURL}/auth/login`,{
                Email, Password
            });
            return response.data;
        }catch(error){
            console.error('Ошибка при регистрации:', error.response?.data || error.message);
            throw error;
        }
    }

    async getUsers(){
        try{
            const response = await axios.get(`${baseURL}/auth/get-users`);
            return response.data;
        }catch(error){
            console.error('Ошибка при регистрации:', error.response?.data || error.message);
            throw error;
        }
    }    

    async sendVerificationEmail(Email) {
        try {
            const response = await axios.post(`${baseURL}/auth/send`, { Email });
            return response.data;
           
        } catch (error) {
            console.error('Ошибка при отправке письма:', error.response?.data || error.message);
            throw error;
        }
    }

    async verificateUserWithCodeFromEmail(Code, Email){
        try{
            const response = await axios.post(`${baseURL}/auth/forgotPassword`, { Code,Email });
            return response.data;
        }catch (error) {
            console.log('Ошибка при отправке кода и почты')
            throw error;
        }
    }

    async resetPassword(Email, Password){
        try{
            const response = await axios.post(`${baseURL}/auth/resetPassword`, {Email, Password});
            return response.data;
        }catch(error){
            console.log('Ошибка при изменении пароля')
            throw error;
        }
    }

    async deleteUser() {
       
        try {
            const access_token = Cookies.get('access_token'); 
            console.log('токен',access_token)
            if (!access_token) {
                throw new Error('Токен не найден.');
            }
    
            console.log('Отправка запроса на удаление пользователя');
    
            const response = await axios.delete(`${baseURL}/auth/delete-users`, {
                headers: { Authorization: `Bearer ${access_token}` },
            });
    
            return response; 
        } catch (error) {
            console.error('Ошибка удаления пользователя:', error.response?.data || error.message);
            throw error; 
        }
    }
}

const AuthPeople = new Auth();
export default AuthPeople;
