import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import services from '../model/servicesData';
import './ServicesList.css';
import { useLocation } from 'react-router-dom';
import Button from '../../../shared/ui/Button/Button';

const ServicesList = () => {
  const location = useLocation();
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth<=480);

  const isActiveService  = (serviceName) => {
    const params = new URLSearchParams(location.search);
    return params.get('service') === serviceName;
  };

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  useEffect (()=>{
    const handleResize = () =>{
      setIsMobile(window.innerWidth <= 480);
      if(window.innerWidth > 480){
        setShowAll(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    
  }, []);

  const visibleServices = (isMobile && !showAll) ? services.slice(0,6):services;

 
  return (
    <div className='services_component'>
      {visibleServices.map((service, index) => (
        <NavLink 
            to={`/CreatingTask?service=${encodeURIComponent(service.name)}`} 
            key={index}>
          <div 
            className={`service_item ${isActiveService(service.name) ? 'active-service' : ''}`}>
            {service.icon} {service.name}
          </div>
        </NavLink>
      ))}
      {isMobile && services.length > 6 &&(
        <Button onClick={toggleShowAll} text={showAll ? 'Скрыть категории' : 'Показать все категории'}
        style={{ backgroundColor: 'white', color: 'gray', border: '2px solid #6b6f62',width:'100%',height:'4.5vh', fontWeight:'light' }} 
       />
      )}
    </div>
  );
};

export default ServicesList;

