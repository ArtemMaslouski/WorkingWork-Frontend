import React from 'react';
import { useLocation } from 'react-router-dom';
import './CreatingTask.css';
import ServicesList from '../../features/ServicesList/ui/ServicesList';

const CreatingTask = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedService = queryParams.get('service');

  return (
    <div className='create_task_component'>
      <div className="place_for_tasks">
        <div className="servicesList">
          <ServicesList />
        </div>

        <div className="subcategories_item">
          {selectedService && (
            <h2> {selectedService}</h2>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default CreatingTask;