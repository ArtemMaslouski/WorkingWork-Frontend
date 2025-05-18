import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { handleGetUserTasks, handleDeleteTask, handleRefreshTasks } from '../../../services/tasksHandlers'; // Ensure this imports your delete function
import Button from '../../../shared/ui/Button/Button';
import serviceDetails from '../../CreatingTask/model/serviceDetails';
import RefreshTasks from '../../../features/RefreshTasks/RefreshTasks';
import Loader from '../../../shared/ui/Loader/Loader';

const MyExercise = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null); 

  useEffect(() => {
    handleGetUserTasks(setTasks).finally(() => setLoading(false));
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await handleDeleteTask(taskId);
      setTasks((prev) => prev.filter(task => task.id !== taskId));
    } catch {
      toast.error('Ошибка при удалении задания');
    }
  };

  const handleUpdate = async (updatedTask) => {
      await handleRefreshTasks(updatedTask);
      await handleGetUserTasks(setTasks); 
  };

  return (
    <div className='tasks_user'>
      {editingTask && (
        <RefreshTasks
        isOpen={true}
        onClose={() => setEditingTask(null)}
        onSubmit={handleUpdate}
        serviceDetails={serviceDetails}
        initialData={editingTask}
      />
      )}

      <Loader
        isLoading={loading}
        isEmpty={!loading && tasks.length === 0}
      />

      {!loading && tasks.length > 0 && (
        <div className='task_element'>
          {tasks.map((task) => (
            <div className='element' key={task.id}>
              <b>Категория:</b> {task.Category} <br />
              <b>Подкатегория:</b> {task.Subcategory} <br />
              <b>Адрес:</b> {task.Address} <br />
              {task.Category === 'Курьерские услуги' && (
                <>
                  <b>Адрес назначения:</b> {task.AddressEnd} <br />
                </>
              )}
              
              <b>Начало:</b> {new Date(task.BeginAt).toLocaleDateString('ru-RU')} <br />
              <b>Окончание:</b> {new Date(task.EndAt).toLocaleDateString('ru-RU')} <br />
              <b>Описание:</b> {task.Description} <br />

              <div className="but_change">
              <Button
                  text="Редактировать"
                  style={{ backgroundColor: 'rgba(215, 201, 164)', color: 'black', border: '2px solid #625430', height:'4vh', width:'150px' }}
                  onClick={() =>  setEditingTask(task)
                  }
                />

                <Button
                  text="Удалить"
                  style={{ backgroundColor: 'rgba(215, 201, 164)', color: 'black', border: '2px solid #625430', height:'4vh', width:'150px' }}
                  onClick={() => handleDelete(task.id)}
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
