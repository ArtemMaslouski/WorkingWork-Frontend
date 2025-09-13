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

  // Загрузка сообщений при открытии чата
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

  // Автоскролл при новых сообщениях
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [fetchMessage]);

  // Подписка на новые сообщения через сокет
  useEffect(() => {
    if (!socket) return;
    const handleNewMessage = (newMsg) => {
      if (chat?.id && newMsg.chatId === chat.id) {
        const enriched = addSenderToMessage(newMsg, currentUserId);
        setFetchMessage((prev) => [...prev, enriched]);
      }
    };
    socket.on('newMessage', handleNewMessage);
    return () => socket.off('newMessage', handleNewMessage);
  }, [socket, chat, currentUserId]);

  const handleSend = async () => {
    if (!message.trim()) return;
    try {
      const msg = await ChatApi.createMessage(chat.id, message);
      const enriched = addSenderToMessage(msg, currentUserId);
      setFetchMessage((prev) => [...prev, enriched]);
      setMessage('');
    } catch (err) {
      console.error(err);
    }
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
