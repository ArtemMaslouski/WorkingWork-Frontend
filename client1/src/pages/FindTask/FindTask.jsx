import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './FindTask.css';
import InputService from '../../shared/ui/InputService/InputService';
import TaskApi from '../../api/TaskApi';
import Button from '../../shared/ui/Button/Button';
import Filter from '../../features/filter/Filter';
import serviceDetails from '../CreatingTask/model/serviceDetails';
import { filterTasks } from '../../shared/utils/filterTask';
import { searchTasks } from '../../shared/utils/searchTasks';
import { MdOutlineDescription } from 'react-icons/md';
import { IoCalendarOutline } from 'react-icons/io5';
import { GiFinishLine } from 'react-icons/gi';
import { LuFlagTriangleRight } from 'react-icons/lu';
import { useLocation } from 'react-router-dom';
import Loader from '../../shared/ui/Loader/Loader';
import { useTranslation } from 'react-i18next';
import { useTaskTranslation } from '../../hooks/useTaskTranslation';
import ChatApi from '../../api/ChatApi';
import AuthPeople from '../../api/userApi';
import { jwtDecode } from 'jwt-decode';

const FindTask = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNoTasks, setShowNoTasks] = useState(false);
  const { translatedTasks } = useTaskTranslation(filteredTasks);
  const { t } = useTranslation();
  const location = useLocation();
  const [socket, setSocket] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    const setupSocket = async () => {
      try {
        const token = await AuthPeople.getAccessToken();
        const user = jwtDecode(token);
        setCurrentUserId(user.sub);

        const socketConnection = io(process.env.REACT_APP_URL, {
          auth: { token },
        });

        // Обработка приглашения в чат второго пользователя
        socketConnection.on('inviteToChat', ({ chatId }) => {
          console.log('Приглашение в чат:', chatId);
          socketConnection.emit('joinChat', { chatId });
          alert('Вас пригласили в чат!');
        });

        socketConnection.on('joinedChat', ({ chatId }) => {
          console.log(`Вы присоединились к чату ${chatId}`);
        });

        socketConnection.on('sendMessage', (data) => {
          console.error('Ошибка от сервера:', data.message);
          alert(`Ошибка: ${data.message}`);
        });

        setSocket(socketConnection);
      } catch (err) {
        console.error('Ошибка соединения с socket.io:', err);
      }
    };

    setupSocket();

    return () => {
      if (socket) socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');

    if (search) {
      setSearchQuery(search);
      const results = searchTasks(tasks, search);
      setFilteredTasks(results);
      return;
    }

    const filtersFromUrl = {
      category: params.get('category') || '',
      subcategory: params.get('subcategory') || '',
      addressFrom: params.get('addressFrom') || '',
      addressTo: params.get('addressTo') || '',
      startDate: params.get('startDate') || '',
      endDate: params.get('endDate') || '',
    };

    const filtered = filterTasks(tasks, filtersFromUrl);
    setFilteredTasks(filtered);
  }, [tasks, location.search]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await TaskApi.getAllTasks();
        setTasks(tasksData);
        setFilteredTasks(tasksData);
      } catch (error) {
        setError(error);
      }
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (filteredTasks.length === 0) {
        setShowNoTasks(true);
      }
    }, 1600);

    return () => clearTimeout(timeout);
  }, [filteredTasks]);

  const TriggerforClicking = async (task, ownerUserId) => {
    if (!socket || !currentUserId) {
      alert('Соединение не установлено или неавторизованный пользователь');
      return;
    }

    try {
      const chat = await ChatApi.createChatBetweenTwoUsers(
        currentUserId,
        ownerUserId
      );

      if (chat && chat.id) {
        socket.emit('joinChat', { chatId: chat.id });

        socket.once('joinedChat', ({ chatId }) => {
          // Отправка приглашения второму пользователю опциональна,
          // если сервер уже отправляет приглашение, дублировать можно не обязательно
          socket.emit('sendInvitation', { userId: ownerUserId, chatId });
          socket.emit('sendMessage', {
            chatId,
            content: 'Тестовое сообщение',
          });
          alert('Чат был создан и пользователи присоединены');
        });
      } else {
        alert('Ошибка: не удалось получить chatId');
      }
    } catch (error) {
      console.error('Ошибка при создании чата:', error);
      alert('Не удалось создать чат');
    }
  };

  const handleFilterApply = (filters) => {
    const filtered = filterTasks(tasks, filters);
    setFilteredTasks(filtered);
  };

  const handleSearchClick = () => {
    const results = searchTasks(tasks, searchQuery);
    setFilteredTasks(results);
  };

  return (
    <div className='findTask_component'>
      <div className='find_task_item'>
        <div className='place_for_find_task'>
          <h1>{t('AllTasks')}</h1>
          <InputService
            placeholder={t('Delivery')}
            onFilterClick={() => setIsFilterOpen(true)}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSearchClick={handleSearchClick}
          />
        </div>
      </div>

      <div className='all_tasks'>
        {translatedTasks.length > 0 ? (
          translatedTasks.map((task) => (
            <div key={task.id} className='task_item_border'>
              <div className='tasks'>
                <h3>
                  {task.Category} / {task.Subcategory}
                </h3>
                <p>
                  <i>
                    <LuFlagTriangleRight size={20} />{' '}
                    {`${t('destination')} ${t('address')}`}:
                  </i>{' '}
                  {task.Address}
                </p>
                <p>
                  <i>
                    <IoCalendarOutline size={20} /> {t('start')}:
                  </i>{' '}
                  <b>{new Date(task.BeginAt).toLocaleDateString('ru-RU')}</b>
                  <br />
                  <i>
                    <GiFinishLine size={20} /> {t('ending')}:
                  </i>{' '}
                  <b>{new Date(task.EndAt).toLocaleDateString('ru-RU')}</b>
                </p>
                <p>
                  <i>
                    <MdOutlineDescription size={20} /> {t('description')}:
                  </i>{' '}
                  {task.Description}
                </p>
              </div>
              <div className='response_button'>
                <Button
                  onClick={() => TriggerforClicking(task, task.UserId)}
                  text={t('respond')}
                  style={{
                    backgroundColor: 'rgba(215, 201, 164)',
                    fontWeight: 'light',
                    color: 'black',
                    border: '2px solid #998756',
                    width: '100%',
                    height: '5vh',
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <Loader
            error={error}
            isLoading={!showNoTasks && !error && filteredTasks.length === 0}
            isEmpty={showNoTasks}
          />
        )}
      </div>

      <Filter
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onFilterApply={handleFilterApply}
        serviceDetails={serviceDetails}
      />
    </div>
  );
};

export default FindTask;
