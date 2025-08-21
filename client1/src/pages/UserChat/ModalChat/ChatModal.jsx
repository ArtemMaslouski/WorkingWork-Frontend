import React, { useState, useEffect, useRef } from 'react';
import ChatApi from '../../../api/ChatApi';
import './ChatModal.css';

// Функция для дополнения сообщения полем sender
function addSenderToMessage(msg, currentUserId, currentUserName = 'Вы') {
  if (!msg.sender) {
    return {
      ...msg,
      sender: {
        id: msg.senderId,
        UserName:
          msg.senderId === currentUserId ? currentUserName : 'Пользователь',
      },
    };
  }
  return msg;
}

const ChatModal = ({
  isOpen,
  onClose,
  chat,
  onSend,
  currentUserId,
  socket,
}) => {
  const [message, setMessage] = useState('');
  const [fetchMessage, setFetchMessage] = useState([]);
  const bottomRef = useRef(null);

  // Загрузка сообщений при открытии/смене чата
  useEffect(() => {
    if (isOpen && chat) {
      ChatApi.getChatMessage(chat.id)
        .then((data) => {
          const enriched = data.map((msg) =>
            addSenderToMessage(msg, currentUserId)
          );
          setFetchMessage(enriched);
        })
        .catch((err) => console.error('Ошибка: ', err.message));
    }
  }, [isOpen, chat, currentUserId]);

  // Очистка состояния при закрытии модалки
  useEffect(() => {
    if (!isOpen) {
      setFetchMessage([]);
      setMessage('');
    }
  }, [isOpen]);

  // Автоскролл при изменении сообщений
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [fetchMessage]);

  // Обработка новых сообщений через сокет
  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMsg) => {
      if (chat && newMsg.chatId === chat.id) {
        const enrichedMsg = addSenderToMessage(newMsg, currentUserId);
        setFetchMessage((prev) => [...prev, enrichedMsg]);
      }
    };

    socket.on('newMessage', handleNewMessage);

    return () => {
      socket.off('newMessage', handleNewMessage);
    };
  }, [socket, chat, currentUserId]);

  if (!isOpen || !chat) return null;

  const handleSend = async () => {
    if (!message.trim()) return;

    try {
      const messageForSending = await ChatApi.createMessage(chat.id, message);

      // Дополняем sender для рендера
      const messageWithSender = addSenderToMessage(
        messageForSending,
        currentUserId
      );

      setFetchMessage((prev) => [...prev, messageWithSender]);
      setMessage('');

      if (onSend) onSend(chat.id, messageWithSender);
    } catch (error) {
      console.error('Ошибка отправки сообщения: ', error.message);
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
          {fetchMessage.map((msg) => {
            console.log(msg);
            console.log(currentUserId);
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
