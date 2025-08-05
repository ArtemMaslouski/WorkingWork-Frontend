import React, { useEffect, Fragment, useState } from 'react';
import './UserChat.css';
import { MdOutlineMenu } from 'react-icons/md';
import { TfiWrite } from 'react-icons/tfi';
import { IoIosArchive } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import ChatApi from '../../api/ChatApi';
import avatarImg from '../../images/photo_2025-05-27_12-39-41.jpg';
import deafultImg from '../../images/No_Name_Avatar.jpg';
import ChatModal from './ModalChat/ChatModal';

const UserChat = () => {
  const { t } = useTranslation();

  const [chats, setChats] = useState([]);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    const fetchUserChats = async () => {
      try {
        const data = await ChatApi.getUserChats();
        setChats(data);
      } catch (error) {
        setError(t('chat.loadError') || 'Ошибка загрузки чатов');
      } finally {
        setLoading(false);
      }
    };
    fetchUserChats();
  }, [t]);

  const handleSendMessage = async (chatId, content) => {
    try {
      const newMessage = await ChatApi.sendMessage(chatId, content); // <- напиши такой метод
      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === chatId
            ? { ...chat, messages: [...chat.messages, newMessage] }
            : chat
        )
      );
    } catch (error) {
      console.error('Ошибка отправки сообщения:', error);
    }
  };

  return (
    <div className='userChat_component'>
      <div className='userChat'>
        <div className='menu_chat'>
          <div className='menu_and_name'>
            <MdOutlineMenu size={25} />
            {t('chat.chat')}
          </div>
          <div className='menu_emblems'>
            <TfiWrite size={25} />
            <IoIosArchive size={30} />
          </div>
        </div>
        <div className='chats_item'>
          {chats.map((chat) => (
            <Fragment key={chat.id}>
              {chat.messages.map((message) => (
                <div
                  key={message.id}
                  className='dialog_container'
                  onClick={() => setSelectedChat(chat)}
                >
                  <img
                    className='user_photo'
                    src={avatarImg}
                    alt={deafultImg}
                  />
                  <div className='user_info'>
                    <div className='user_nickName'>
                      {message.sender.UserName}
                    </div>
                    <div className='user_message'>{message.content}</div>
                  </div>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Модалка */}
      <ChatModal
        isOpen={!!selectedChat}
        onClose={() => setSelectedChat(null)}
        chat={selectedChat}
        onSend={handleSendMessage}
      />
    </div>
  );
};

export default UserChat;
