import React, { useState, useEffect } from 'react';
import './FindTask.css';
import InputService from '../../shared/ui/InputService/InputService';
import TaskApi from '../../api/TaskApi';
import Button from '../../shared/ui/Button/Button'

const FindTask = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await TaskApi.getAllTasks();
        setTasks(tasksData);
      } catch (error) {
        setError(error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className='findTask_component'>
      <div className="find_task_item">
        <div className="place_for_find_task">
          <h1>Все задания</h1>
          <InputService placeholder="Например, требуется курьер, доставить товар" />
        </div>
      </div>

      <div className="all_tasks">
        {error ? (
          <p>Ошибка при загрузке данных: {error.message}</p>
        ) : tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id} className="task_item_border">

              <div className="emblem_exercise">
                {/* <p>llsdldsd,clk</p> */}
              </div>

              <div className="tasks">
                <h3>{task.Category} / {task.Subcategory}</h3>
                <p>Адресс назначения: {task.Address}</p>
                <p>
                  Начало выполнения: <b>{new Date(task.BeginAt).toLocaleDateString('ru-RU')}</b> --- 
                  Окончание выполнения: <b>{new Date(task.EndAt).toLocaleDateString('ru-RU')}</b>
                </p>
                <p>Описание задания: {task.Description}</p>
                
              </div>
               
               <div className="response_button">
               <Button   
                    text="Откликнуться" 
                    style={{ backgroundColor: 'rgba(215, 201, 164)',fontWeight:'light', color: 'black', border: '2px solid #998756', width:'100%', height:'5vh'
                    
                     }} 
                />
               </div>
            
            </div>
          ))
        ) : (
          <p>Задания не найдены.</p>
        )}
      </div>
    </div>
  );
};

export default FindTask;
