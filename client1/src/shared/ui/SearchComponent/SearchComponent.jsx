import React, { useState } from 'react';
import './SearchComponent.css';
import { FaSearch } from "react-icons/fa";

const SearchComponent = () => {
    const [work, setWork] = useState('');
    const [city, setCity] = useState('');
    const cities = ['Минск', 'Брест', 'Борисов', 'Витебск'];


    return (
        <div className="app-container">
            <div className="search-component">
                <input 
                    type="text" 
                    placeholder="Какую работу вам нужно выполнить?" 
                    value={work}
                    onChange={(e) => setWork(e.target.value)}
                    className="work-input"
                />
                <select 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    className="city-select"
                >
                    <option value="" disabled>Город</option>
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