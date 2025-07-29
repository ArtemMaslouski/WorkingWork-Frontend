import React, { useEffect, useState } from 'react';
import './UserChat.css';
import { MdOutlineMenu } from 'react-icons/md';
import { TfiWrite } from 'react-icons/tfi';
import { IoIosArchive } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import ChatApi from '../../api/ChatApi';
import avatarImg from '../../images/photo_2025-05-27_12-39-41.jpg';

const UserChat = () => {
  const { t } = useTranslation();

  const [chats, setChats] = useState([]);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(null);
  const [time, setTime] = useState('');

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
            <>
              {chat.messages.map((message) => (
                <div className='dialog_container'>
                  <img className='user_photo' src={avatarImg} alt='Avatar' />
                  <div className='user_info'>
                    <div className='user_nickName'>
                      {message.sender.UserName}
                    </div>
                    <div className='user_message'>{message.content}</div>
                  </div>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserChat;
