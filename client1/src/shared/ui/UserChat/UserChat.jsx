import React, { useState, useRef, useEffect } from 'react';
import './UserChat.css';
import { IoMdSend } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import InputService from '../InputService/InputService';

const UserChat = ({ 
    messages = [], 
    onSendMessage,
    users = [], // Список пользователей для поиска
    onUserSelect, // Обработчик выбора пользователя
    currentUser // Текущий выбранный пользователь
}) => {
    const [newMessage, setNewMessage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [showUserSearch, setShowUserSearch] = useState(false);
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);

    // Автоматическая прокрутка к последнему сообщению
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            onSendMessage(newMessage);
            setNewMessage('');
        }
    };

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('ru-RU', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    };

    const handleSearchClick = () => {
        setShowUserSearch(!showUserSearch);
    };

    const handleUserSelect = (user) => {
        onUserSelect(user);
        setShowUserSearch(false);
        setSearchQuery('');
    };

    return (
        <div className="chat-container" ref={chatContainerRef}>
            <div className="chat-header">
                <div className="chat-header-content">
                    {currentUser ? (
                        <div className="current-user-info">
                            <div className="user-avatar">
                                {currentUser.avatar ? (
                                    <img src={currentUser.avatar} alt={currentUser.name} />
                                ) : (
                                    <div className="avatar-placeholder">
                                        {currentUser.name.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <div className="user-name">{currentUser.name}</div>
                        </div>
                    ) : (
                        <div className="select-user-prompt">
                            Выберите пользователя для начала общения
                        </div>
                    )}
                    <button className="search-users-button" onClick={handleSearchClick}>
                        <FaSearch size={20} />
                    </button>
                </div>
                {showUserSearch && (
                    <div className="user-search-container">
                        <InputService
                            placeholder="Поиск пользователей..."
                            searchQuery={searchQuery}
                            onSearchChange={setSearchQuery}
                            onSearchClick={() => {}}
                        />
                        <div className="users-list">
                            {users
                                .filter(user => 
                                    user.name.toLowerCase().includes(searchQuery.toLowerCase())
                                )
                                .map(user => (
                                    <div 
                                        key={user.id} 
                                        className="user-item"
                                        onClick={() => handleUserSelect(user)}
                                    >
                                        <div className="user-avatar">
                                            {user.avatar ? (
                                                <img src={user.avatar} alt={user.name} />
                                            ) : (
                                                <div className="avatar-placeholder">
                                                    {user.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                        <div className="user-info">
                                            <div className="user-name">{user.name}</div>
                                            <div className="user-status">{user.status || 'Онлайн'}</div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div 
                        key={index} 
                        className={`message ${message.isCurrentUser ? 'sent' : 'received'}`}
                    >
                        <div className="message-content">
                            <div className="message-text">{message.text}</div>
                            <div className="message-time">{formatTime(message.timestamp)}</div>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            
            <form className="chat-input-container" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Введите сообщение..."
                    className="chat-input"
                    disabled={!currentUser}
                />
                <button 
                    type="submit" 
                    className="send-button"
                    disabled={!currentUser}
                >
                    <IoMdSend size={24} />
                </button>
            </form>
        </div>
    );
};

export default UserChat; 