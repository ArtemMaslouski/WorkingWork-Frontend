import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './CreatingTask.css';
import ServicesList from '../../../../widgets/ServicesList/ui/ServicesList';
import serviceDetails from '../../model/serviceDetails';
import services from '../../../../widgets/ServicesList/model/servicesData';
import { useTranslation } from 'react-i18next';

const CreatingTask = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedServiceName = queryParams.get('service');
  const { t } = useTranslation();

  const selectedService = services.find(service => {
    const translatedName = t(service.key);
    return translatedName === selectedServiceName;
  });

  // Get service details using the original key
  const serviceDetail = selectedService ? serviceDetails[selectedService.key] : null;

  return (
    <div className='create_task_component'>
      <div className="place_for_tasks">
        <div className="servicesList">
          <ServicesList />
        </div>
      </div>
      <div className="subcategories_item">
        {selectedServiceName && serviceDetail && (
          <div className="image-container">
            <h2 className="service-title">{selectedServiceName}</h2>
            <img 
              src={serviceDetail.image} 
              alt={selectedServiceName} 
              className="service-image"
            />
            <div className="task_links">
              {serviceDetail.links.map((link, index) => (
                <NavLink 
                  key={index}
                  to={`/OrderForm?service=${encodeURIComponent(selectedServiceName)}&subcategory=${encodeURIComponent(t(link.name))}`} 
                  className="task-link"
                >
                  {t(link.name)}
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