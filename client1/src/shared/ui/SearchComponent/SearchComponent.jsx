import React, { useState } from 'react';
import './SearchComponent.css';
import { FaSearch } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const SearchComponent = () => {
    const [work, setWork] = useState('');
    const [city, setCity] = useState('');
    const cities = ['Минск', 'Брест', 'Борисов', 'Витебск'];

    const {t} = useTranslation();

    return (
        <div className="app-container">
            <div className="search-component">
                <input 
                    type="text" 
                    placeholder={t('whatWork')} 
                    value={work}
                    onChange={(e) => setWork(e.target.value)}
                    className="work-input"
                />
                <select 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    className="city-select"
                >
                    <option value="" disabled>{t('city')}</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    ))}
                </select>
                <button className="search-button">
                        <FaSearch size={25}/>
                    </button>
            </div>
        </div>
    );
};

export default SearchComponent;