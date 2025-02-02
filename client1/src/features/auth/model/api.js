import axios from 'axios'

class Auth {
    static baseURL = 'https://workingworld-backend.onrender.com/auth'

    async registerUser({ UserName, Email, Password }) {
        try {
            const response = await axios.post(`${Auth.baseURL}/create-user`, {
                UserName,
                Email,
                Password
            });
            return response.data;
        } catch (error) {
            console.error('Ошибка при регистрации:', error.response?.data || error.message);
            throw error;
        }
    }

    async login({UserName, Password}){
        try{
            const response = await axios.post(`${Auth.baseURL}/login`,{
                UserName, Password
            });
            return response.data;
        }catch(error){
            console.error('Ошибка при регистрации:', error.response?.data || error.message);
            throw error;
        }
    }

    async getUsers(){
        try{
            const response = await axios.get(`${Auth.baseURL}/get-users`);
            return response.data;
        }catch(error){
            console.error('Ошибка при регистрации:', error.response?.data || error.message);
            throw error;
        }
    }

    // Удаление пользователя по ID
    async deleteUser({ id }) {
        try {
            const response = await axios.delete(`${Auth.baseURL}/delete-users`, { data: { id } });
            return response.data;
        } catch (error) {
            console.error('Ошибка при удалении пользователя:', error.response?.data || error.message);
            throw error;
        }
    }
    async deleteUser(UserName) {//удаление по имени
        try {
            const response = await axios.delete(`${Auth.baseURL}/delete-users`, { data: { Login: UserName } });
            return response.data;
        } catch (error) {
            console.error('Ошибка при удалении пользователя:', error.response?.data || error.message);
            throw error;
        }
    }

    async sendVerificationEmail(Email) {
        try {
            const response = await axios.post(`${Auth.baseURL}/send`, { Email });
            return response.data;
        } catch (error) {
            console.error('Ошибка при отправке письма:', error.response?.data || error.message);
            throw error;
        }
    }

    async test() {//тестовая для авторизации
        try {
            const response = await axios.get(`${Auth.baseURL}/test`, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error('Ошибка при тестовом запросе:', error.response?.data || error.message);
            throw error;
        }
    }



}

const AuthPeople = new Auth();
export default AuthPeople;
