import React, { useEffect, useState } from 'react';
import './FindTask.css';
import InputService from '../../components/InputService/InputService';
import AuthPeople from '../../api/api'; 

const FindTask = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await AuthPeople.getUsers();
        setUsers(usersData); // Убедитесь, что данные правильно устанавливаются
      } catch (error) {
        setError(error); 
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='findTask_component'>
      <div className="find_task_item">
        <div className="place_for_find_task">
          <h1>Все задания</h1>
          <InputService placeholder="Например, требуется курьер, доставить товар" />
        </div>
      </div>
      <div className="all_users">
        {error ? (
          <p>Ошибка при загрузке данных: {error.message}</p>
        ) : users.length > 0 ? (
          users.map((user) => (
            <div key={user.id}>
              <p>ID: {user.id}</p>
              <p>Имя пользователя: {user.UserName}</p>
              <p>Email: {user.Email}</p>
            </div>
          ))
        ) : (
          <p>Пользователи не найдены.</p>
        )}
      </div>
    </div>
  );
};

export default FindTask;