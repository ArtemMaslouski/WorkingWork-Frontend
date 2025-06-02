import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { handleGetUserTasks, handleDeleteTask, handleRefreshTasks } from '../../../services/tasksHandlers'; // Ensure this imports your delete function
import Button from '../../../shared/ui/Button/Button';
import serviceDetails from '../../CreatingTask/model/serviceDetails';
import RefreshTasks from '../../../features/RefreshTasks/RefreshTasks';
import Loader from '../../../shared/ui/Loader/Loader';
import { useTranslation } from 'react-i18next';
import { useTaskTranslation } from '../../../hooks/useTaskTranslation';

const MyExercise = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null); 
  const { t } = useTranslation();
  const { translatedTasks } = useTaskTranslation(tasks);

  useEffect(() => {
    handleGetUserTasks(setTasks).finally(() => setLoading(false));
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await handleDeleteTask(taskId);
      setTasks((prev) => prev.filter(task => task.id !== taskId));
    } catch {
      toast.error(t('errors.deleteTaskError'));
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
          {translatedTasks.map((task) => (
            <div className='element' key={task.id}>
              <b>{t('category')}:</b> {task.Category} <br />
              <b>{t('subcategory')}:</b> {task.Subcategory} <br />
              <b>{t('address')}:</b> {task.Address} <br />
              {task.Category === t('courierServices') && (
                <>
                  <b>{`${t('address')} ${t('to')}`}:</b> {task.AddressEnd} <br />
                </>
              )}
              
              <b>{t('start')}:</b> {new Date(task.BeginAt).toLocaleDateString('ru-RU')} <br />
              <b>{t('ending')}:</b> {new Date(task.EndAt).toLocaleDateString('ru-RU')} <br />
              <b>{t('description')}:</b> {task.Description} <br />

              <div className="but_change">
              <Button
                  text={t('edit')}
                  style={{ backgroundColor: 'rgba(215, 201, 164)', color: 'black', border: '2px solid #625430', height:'4vh', width:'150px' }}
                  onClick={() =>  setEditingTask(task)
                  }
                />

                <Button
                  text={t('delete')}
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
