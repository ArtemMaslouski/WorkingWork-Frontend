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

  // Find the service object that matches the selected name
  const selectedService = services.find(service => {
    const translatedName = t(service.name);
    return translatedName === selectedServiceName;
  });

  // Get service details using the original key
  const serviceDetail = selectedService ? serviceDetails[selectedService.name] : null;

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
            <h2 className="service-title">{t(selectedService.name)}</h2>
            <img 
              src={serviceDetail.image} 
              alt={t(selectedService.name)} 
              className="service-image"
            />
            <div className="task_links">
              {serviceDetail.links.map((link, index) => (
                <NavLink 
                  key={index}
                  to={`/OrderForm?service=${encodeURIComponent(t(selectedService.name))}&subcategory=${encodeURIComponent(t(link.name))}`} 
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