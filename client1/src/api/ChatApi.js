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

  async getChatMessage(chatId) {
    try {
      const response = await api.get(`/chats/getMessages/${chatId}`);
      return response.data;
    } catch (error) {
      console.error(`Ошибка: `, error.message);
    }
  }

  async createMessage(chatId, content) {
    try {
      const response = await api.post('/chats/createMessage', {
        chatId,
        content,
      });
      return response.data;
    } catch (error) {
      console.error(`Ошибка: `, error.message);
    }
  }
  async createChatBetweenTwoUsers(userId1, userId2) {
    try {
      const response = await api.post('/chats/createChat', {
        userId1,
        userId2,
      });
      return response.data;
    } catch (error) {
      console.error(`Ошибка: `, error.message);
    }
  }
}

const ChatApi = new Chat();
export default ChatApi;
