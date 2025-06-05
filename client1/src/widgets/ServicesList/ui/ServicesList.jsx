import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import services from '../model/servicesData';
import './ServicesList.css';
import Button from '../../../shared/ui/Button/Button';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicesList = () => {
  const location = useLocation();
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth<=480);
  const {t} = useTranslation();

  const isActiveService = (service) => {
    const params = new URLSearchParams(location.search);
    return params.get('service') === t(service.key);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      if(window.innerWidth > 480) {
        setShowAll(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleServices = (isMobile && !showAll) ? services.slice(0,6) : services;

  return (
    <div className='services_component'>
      {visibleServices.map((service, index) => (
        <NavLink
          to={`/CreatingTask?service=${encodeURIComponent(t(service.key))}`}
          key={index}
          style={{ textDecoration: 'none' }}
        >
          <div 
            className={`service_item ${isActiveService(service) ? 'active-service' : ''}`}
          >
            <span className="service-icon">{service.icon}</span> {t(service.key)}
          </div>
        </NavLink>
      ))}
      {isMobile && services.length > 6 && (
        <Button 
          onClick={toggleShowAll} 
          text={showAll ? t('HideCategories') : t('ShowAllCategories')}
          style={{ backgroundColor: 'white', color: 'gray', border: '2px solid rgb(162, 139, 76)', width:'100%', height:'4.5vh', fontWeight:'light' }} 
        />
      )}
    </div>
  );
};

export default ServicesList;

