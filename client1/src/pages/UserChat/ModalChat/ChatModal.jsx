import React, { useState, useEffect, useRef } from 'react';
import ChatApi from '../../../api/ChatApi';
import './ChatModal.css';

const ChatModal = ({ isOpen, onClose, chat, onSend, currentUserId }) => {
  const [message, setMessage] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chat?.messages]);

  if (!isOpen || !chat) return null;

  const handleSend = async () => {
    try {
      console.log(message);

      const messageForSending = await ChatApi.createMessage(chat.id, message);
      return messageForSending;
    } catch (error) {
      console.error('Ошибка: ', error.message);
    }
  };

  return (
    <div className='chat_modal_overlay'>
      <div className='chat_modal_container'>
        <div className='chat_modal_header'>
          <div className='chat_modal_title'>
            Чат с {chat.user?.UserName || 'Пользователем'}
          </div>
          <button className='chat_modal_close' onClick={onClose}>
            ×
          </button>
        </div>

        <div className='chat_modal_body'>
          {chat.messages.map((msg) => {
            const isSelf = msg.sender.id === currentUserId;

            return (
              <div
                key={msg.id}
                className={`chat_message ${isSelf ? 'self' : 'other'}`}
              >
                <div className='chat_message_sender'>{msg.sender.UserName}</div>
                <div className='chat_message_text'>{msg.content}</div>
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        <div className='chat_modal_footer'>
          <input
            type='text'
            placeholder='Введите сообщение...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
