import React, { useState } from 'react';
import './HomeIntro.css';
import InputService from '../../../shared/ui/InputService/InputService';
import Person from '../../../shared/assets/photo/mainPerson.jpg';
import { useNavigate } from 'react-router-dom';
import Filter from '../../../features/filter/Filter';
import serviceDetails from '../../../pages/CreatingTask/model/serviceDetails';
import { useTranslation } from 'react-i18next';

const HomeIntro = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const {t} = useTranslation();

  const handleSearchClick = () => {
    if (searchQuery.trim() !== '') {
      navigate(`/find-task?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/find-task');
    }
  };

  const handleFilterApply = (filters) => {
    const queryParams = new URLSearchParams(filters).toString();
    navigate(`/find-task?${queryParams}`);
  };

  
  return (
    <div className='homeIntro_component'>
      <div className="overlay">
        <div className="intro_item">
          <h1>{t('freeFromWorries')}</h1>
          <p>{t('proForTask')}</p>
          <InputService
            placeholder={t('servicesAndOffers')}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSearchClick={handleSearchClick}
            onFilterClick={() => setIsFilterOpen(true)} 
          />
          <p className='text_state'>{t('BecomeAPerformer')}</p>
        </div>
        <div className="image_mainPage">
            <img src={Person} alt='main phooto in project'/>
        </div>
      </div>
      <Filter 
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onFilterApply={handleFilterApply}
        serviceDetails={serviceDetails}
      />

    </div>
  );
};

export default HomeIntro;
