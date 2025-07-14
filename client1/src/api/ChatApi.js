import api from './axiosInstance';

class Chat {
  async getUserChats() {
    try {
      const response = await api.get('/chats/get-chats');
      return response.data;
    } catch (error) {
      console.error(`Ошибка: `, error.message);
    }
  }
}

const ChatApi = new Chat();
export default ChatApi;
