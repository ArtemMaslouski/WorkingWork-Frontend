import axios from 'axios';

class Chat {
  async getChats() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/chats/get-chats`,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      console.log('nlvnsdlkv');
      console.log(process.env.REACT_APP_URL);
      console.error(
        'Ошибка при получении чатов: ',
        error.response?.data || error.message
      );
      throw error;
    }
  }
}

const ChatEntity = new Chat();
export default ChatEntity;
