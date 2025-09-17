import React, { useState, useEffect, useRef } from 'react';
import ChatApi from '../../../api/ChatApi';
import './ChatModal.css';

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

function insertAnotherUser(chat, currentUserId) {
  if (!chat?.participants) return null;
  const anotherUser = chat.participants.find(
    (participant) => participant.userId !== currentUserId
  );
  return anotherUser?.user?.UserName || 'Пользователь';
}

const ChatModal = ({ isOpen, onClose, chat, currentUserId, socket }) => {
  const [message, setMessage] = useState('');
  const [fetchMessage, setFetchMessage] = useState([]);
  const bottomRef = useRef(null);

  const otherUser = insertAnotherUser(chat, currentUserId);

  // Загружаем историю
  useEffect(() => {
    if (isOpen && chat?.id) {
      socket.emit('joinChat', { chatId: chat.id });

      ChatApi.getChatMessage(chat.id)
        .then((data) => {
          const enriched = data.map((msg) =>
            addSenderToMessage(msg, currentUserId)
          );
          setFetchMessage(enriched);
        })
        .catch((err) => console.error(err));
    }
  }, [isOpen, chat, currentUserId, socket]);

  // Автоскролл
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [fetchMessage]);

  // Ловим новые сообщения
  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMsg) => {
      if (chat?.id && newMsg.chatId === chat.id) {
        const enriched = addSenderToMessage(newMsg, currentUserId);

        setFetchMessage((prev) => {
          // Убираем временное сообщение, если оно есть
          const withoutPending = prev.filter(
            (m) => !(m.status === 'pending' && m.content === enriched.content)
          );
          return [...withoutPending, enriched];
        });
      }
    };

    socket.on('newMessage', handleNewMessage);
    return () => socket.off('newMessage', handleNewMessage);
  }, [socket, chat, currentUserId]);

  // Отправка сообщения
  const handleSend = () => {
    if (!message.trim()) return;

    // Добавляем временное сообщение (pending)
    const tempMsg = {
      id: `temp-${Date.now()}`,
      chatId: chat.id,
      senderId: currentUserId,
      content: message,
      sender: { id: currentUserId, UserName: 'Вы' },
      status: 'pending',
    };
    setFetchMessage((prev) => [...prev, tempMsg]);

    // Отправляем на сервер
    socket.emit('sendMessage', {
      chatId: chat.id,
      content: message,
    });

    // Очищаем input
    setMessage('');
  };

  if (!isOpen || !chat?.id) return null;

  return (
    <div className='chat_modal_overlay'>
      <div className='chat_modal_container'>
        <div className='chat_modal_header'>
          <div className='chat_modal_title'>Чат с {otherUser}</div>
          <button className='chat_modal_close' onClick={onClose}>
            ×
          </button>
        </div>
        <div className='chat_modal_body'>
          {fetchMessage.map((msg) => {
            const isSelf = msg.sender.id === currentUserId;
            return (
              <div
                key={msg.id}
                className={`chat_message ${isSelf ? 'self' : 'other'} ${
                  msg.status === 'pending' ? 'pending' : ''
                }`}
              >
                <div className='chat_message_sender'>{msg.sender.UserName}</div>
                <div className='chat_message_text'>{msg.content}</div>
                {msg.status === 'pending' && (
                  <div className='chat_message_status'>Отправляется...</div>
                )}
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>
        <div className='chat_modal_footer'>
          <input
            type='text'
            value={message}
            placeholder='Введите сообщение...'
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
