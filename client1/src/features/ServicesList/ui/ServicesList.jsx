import React from 'react';
import { NavLink } from 'react-router-dom';
import services from '../model/servicesData';
import './ServicesList.css';

import { useLocation } from 'react-router-dom';

const ServicesList = () => {
  const location = useLocation();

  const isActiveService  = (serviceName) => {
    const params = new URLSearchParams(location.search);
    return params.get('service') === serviceName;
  };

  return (
    <div className='services_component'>
      {services.map((service, index) => (
        <NavLink 
            to={`/CreatingTask?service=${encodeURIComponent(service.name)}`} 
            key={index}>
          <div 
            className={`service_item ${isActiveService(service.name) ? 'active-service' : ''}`}>
            {service.icon} {service.name}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default ServicesList;