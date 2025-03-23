import axios from 'axios'
import {baseURL} from '../constants/someConstants'

class Auth {
    
    async registerUser({ UserName, Email, Password }) {
        try {
            const response = await axios.post(`${baseURL}/auth/create-user`, {
                UserName, Email,Password
            });
            return response.data;
        } catch (error) {
            console.error('Ошибка при регистрации:', error.response?.data || error.message);
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

    // async deleteUser({ id }) { 
    //     try {
    //         const response = await axios.delete(`${baseURL}/auth/delete-users`, { data: { id } });
    //         return response.data;
    //     } catch (error) {
    //         console.error('Ошибка при удалении пользователя:', error.response?.data || error.message);
    //         throw error;
    //     }
    // }
    

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

}

const AuthPeople = new Auth();
export default AuthPeople;
