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

const UserChat = ({ socket, currentUserId }) => {
  const { t } = useTranslation();

  const [chats, setChats] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
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

  // Подписка на новые сообщения по сокету
  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      setChats((prevChats) => {
        const updatedChats = prevChats.map((chat) =>
          chat.id === newMessage.chatId
            ? { ...chat, messages: [...(chat.messages || []), newMessage] }
            : chat
        );

        setSelectedChat((prevSelected) => {
          if (prevSelected?.id === newMessage.chatId) {
            return (
              updatedChats.find((chat) => chat.id === newMessage.chatId) ||
              prevSelected
            );
          }
          return prevSelected;
        });

        return updatedChats;
      });
    };

    socket.on('newMessage', handleNewMessage);

    return () => {
      socket.off('newMessage', handleNewMessage);
    };
  }, [socket]);

  // Отправка сообщения и обновление состояний
  const handleSendMessage = async (chatId, content) => {
    try {
      const newMessage = await ChatApi.createMessage(chatId, content);

      setChats((prevChats) => {
        const updatedChats = prevChats.map((chat) =>
          chat.id === chatId
            ? { ...chat, messages: [...(chat.messages || []), newMessage] }
            : chat
        );

        setSelectedChat((prevSelected) => {
          if (prevSelected?.id === chatId) {
            return (
              updatedChats.find((chat) => chat.id === chatId) || prevSelected
            );
          }
          return prevSelected;
        });

        return updatedChats;
      });
    } catch (error) {
      console.error('Ошибка отправки сообщения:', error);
    }
  };

  if (loading) {
    return <div>{t('chat.loading') || 'Загрузка...'}</div>;
  }

  if (error) {
    return <div className='error'>{error}</div>;
  }

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
          {chats.map((chat) => {
            const lastMessage =
              chat.messages && chat.messages.length > 0
                ? chat.messages[chat.messages.length - 1]
                : null;
            return (
              <Fragment key={chat.id}>
                {lastMessage && (
                  <div
                    className='dialog_container'
                    onClick={() => setSelectedChat(chat)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      className='user_photo'
                      src={avatarImg}
                      alt={deafultImg}
                    />
                    <div className='user_info'>
                      <div className='user_nickName'>
                        {lastMessage.sender?.UserName || 'Пользователь'}
                      </div>
                      <div className='user_message'>{lastMessage.content}</div>
                    </div>
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      <ChatModal
        isOpen={!!selectedChat}
        onClose={() => setSelectedChat(null)}
        chat={selectedChat}
        onSend={handleSendMessage}
        currentUserId={currentUserId}
        socket={socket}
      />
    </div>
  );
};

export default UserChat;
