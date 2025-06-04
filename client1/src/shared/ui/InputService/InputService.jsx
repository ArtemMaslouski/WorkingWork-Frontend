import React, { useState, useEffect, useRef } from 'react'
import './InputService.css'
import { FaSearch } from "react-icons/fa";
import { MdOutlineFilterList } from "react-icons/md";
import serviceDetails from '../../../pages/CreatingTask/model/serviceDetails';
import { useTranslation } from 'react-i18next';

const InputService = ({ 
  placeholder, 
  onFilterClick,
  searchQuery,
  onSearchChange,
  onSearchClick
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getSuggestions = (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const results = [];

    //категории
    Object.keys(serviceDetails).forEach(category => {
      const serviceKey = category.split('.')[1];
      const translatedCategory = t(`services.${serviceKey}`);
      
      // Проверяем совпадение в переведенном тексте
      if (translatedCategory.toLowerCase().includes(lowerCaseQuery)) {
        results.push({ 
          type: 'category', 
          name: translatedCategory,
          originalKey: category 
        });
      }

      //подкатегории
      if (serviceDetails[category].links) {
        serviceDetails[category].links.forEach(link => {
          const translatedSubcategory = t(link.name);
          
          // Проверяем совпадение в переведенном тексте
          if (translatedSubcategory.toLowerCase().includes(lowerCaseQuery)) {
            results.push({ 
              type: 'subcategory', 
              name: translatedSubcategory,
              category: translatedCategory,
              originalKey: link.name
            });
          }
        });
      }
    });

    setSuggestions(results.slice(0, 5)); // 5 ответов
  };

  const handleInputChange = (value) => {
    onSearchChange(value);
    getSuggestions(value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion.name);
    setShowSuggestions(false);
  };

  return (
    <div className="input-container" ref={suggestionsRef}>
      <input
        type="text"
        className="input-field"
        placeholder={placeholder || t('servicesAndOffers')}
        value={searchQuery}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
      />

      {showSuggestions && suggestions.length > 0 && (
        <div className="suggestions-dropdown">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <span className="suggestion-type">
                {suggestion.type === 'category' ? t('category') + ':' : t('subcategory') + ':'}
              </span>
              <span className="suggestion-name">{suggestion.name}</span>
              {suggestion.type === 'subcategory' && (
                <span className="suggestion-category">({suggestion.category})</span>
              )}
            </div>
          ))}
        </div>
      )}

      {onFilterClick && (
        <button className="search-button" onClick={onFilterClick}>
          <MdOutlineFilterList size={30}/>
        </button>
      )}

      <button className="search-button" onClick={onSearchClick}>
        <FaSearch size={30}/>
      </button>
    </div>
  );
};

export default InputService;