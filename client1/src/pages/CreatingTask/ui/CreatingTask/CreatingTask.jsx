import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './CreatingTask.css';
import ServicesList from '../../../../widgets/ServicesList/ui/ServicesList';
import serviceDetails from '../../model/serviceDetails'

const CreatingTask = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedService = queryParams.get('service');
  
  const serviceDetail = selectedService ? serviceDetails[selectedService] : null;

  return (
    <div className='create_task_component'>
      <div className="place_for_tasks">
        <div className="servicesList">
          <ServicesList />
        </div>
      </div>
      <div className="subcategories_item">
        {selectedService && serviceDetail && (
          <div className="image-container">
            <h2 className="service-title">{selectedService}</h2>
            <img 
              src={serviceDetail.image} 
              alt={selectedService} 
              className="service-image"
            />
           <div className="task_links">
              {serviceDetail.links.map((link, index) => (
                <NavLink 
                key={index} 
                to={`/OrderForm?service=${selectedService}&subcategory=${encodeURIComponent(link.name)}`} 
                className="task-link"
              >
                {link.name}
              </NavLink>
              
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatingTask;