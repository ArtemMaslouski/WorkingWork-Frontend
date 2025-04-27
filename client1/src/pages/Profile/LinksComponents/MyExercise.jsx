import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { handleGetUserTasks, handleDeleteTask } from '../../../services/tasksHandlers'; // Ensure this imports your delete function
import Button from '../../../shared/ui/Button/Button';

const MyExercise = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserTasks = async () => {
      try {
        await handleGetUserTasks(setTasks);
        setLoading(false);
      } catch (error) {
        toast.error('Ошибка загрузки заданий');
        console.error('Ошибка:', error);
        setLoading(false);
      }
    };

    fetchUserTasks();
  }, []);

  const handleDelete = async (taskId) => {
    // const confirmed = window.confirm('Вы уверены, что хотите удалить это задание?');
    // if (confirmed) {
      try {
        await handleDeleteTask(taskId);
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId)); // Remove the task from the state
      } catch (error) {
        toast.error('Ошибка при удалении задания');
      // }
    }
  };

  if (loading) {
    return <p>Загрузка заданий...</p>;
  }

  return (
    <div className='tasks_user'>
      {tasks.length === 0 ? (
        <p>У вас пока нет заданий</p>
      ) : (
        <div className='task_element'>
          {tasks.map((task) => (
            <div className='element' key={task.id}>
              <b>Категория:</b> {task.Category} <br />
              <b>Подкатегория:</b> {task.Subcategory} <br />
              <b>Адрес:</b> {task.Address} <br />
              <b>Адрес назначения:</b> {task.AddressEnd} <br />
              <b>Начало:</b> {new Date(task.BeginAt).toLocaleString()} <br />
              <b>Окончание:</b> {new Date(task.EndAt).toLocaleString()} <br />
              <b>Описание:</b> {task.Description} <br />
              
               <div className="but_change">

                 <Button text="Удалить"
                style={{backgroundColor: 'rgba(215, 201, 164)', color:'black',border: '2px solid #625430'}}
                onClick={() => handleDelete(task.id)}/>
                  
                <Button text="Редактировать"
                style={{backgroundColor: 'rgba(215, 201, 164)', color:'black',border: '2px solid #625430'}}
                />
              </div>
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyExercise;