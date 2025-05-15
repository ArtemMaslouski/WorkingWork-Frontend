import './Filter.css';
import React, { useEffect, useState, useRef } from 'react';
import Button from '../../shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';

const Filter = ({ isOpen, onClose, onFilterApply,serviceDetails}) => {
  const categories = Object.keys(serviceDetails);
  const [subcategories, setSubcategories] = useState([]);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const [filters, setFilters] = React.useState({
    category: '',
    subcategory: '',
    addressFrom: '',
    addressTo: '',
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    if (filters.category && serviceDetails[filters.category]) {
      setSubcategories(serviceDetails[filters.category].links || []);
    } else {
      setSubcategories([]);
    }
    setFilters(prev => ({ ...prev, subcategory: '' }));
  }, [filters.category, serviceDetails]);
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // const handleApply = () => {
  //   onFilterApply(filters);
  //   onClose();
  // };
  const handleApply = () => {
    onFilterApply(filters);
    
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.set(key, value);
    });

    navigate(`/find-task?${queryParams.toString()}`);
    onClose();
  };

  const handleReset = () => {
    const emptyFilters = {
      category: '',
      subcategory: '',
      addressFrom: '',
      addressTo: '',
      startDate: '',
      endDate: ''
    };
    setFilters(emptyFilters);
    onFilterApply(emptyFilters);
    onClose();
  };
  

  if (!isOpen) return null;

  return (
    <div className="filter-modal">
      <div className="filter-content" ref={modalRef}>
        <h2>Фильтры</h2>

        {/* Категория */}
        <div className="filter-field">
          <label>Категория:</label>
          <select
            value={filters.category}
            onChange={(e) => setFilters({
              ...filters,
              category: e.target.value
            })}
          >
            <option value="">-- Выберите категорию --</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Подкатегория */}
        <div className="filter-field">
          <label>Подкатегория:</label>
          <select
            value={filters.subcategory}
            onChange={(e) => setFilters({ ...filters, subcategory: e.target.value })}
            disabled={!filters.category} 
          >
            <option value="">-- Выберите подкатегорию --</option>
            {subcategories.map((subcat) => (
              <option key={subcat.name} value={subcat.name}>
                {subcat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Адрес (куда) */}
        <div className="filter-field">
          <label>Адрес:</label>
          <input
            type="text"
            placeholder="Введите адрес (куда)"
            value={filters.addressTo}
            onChange={(e) =>
              setFilters({ ...filters, addressTo: e.target.value })
            }
          />
        </div>

        {/* Дата начала */}
        <div className="filter-field">
          <label>Дата начала (с):</label>
          <input
            type="date"
            value={filters.startDate}
            onChange={(e) =>
              setFilters({ ...filters, startDate: e.target.value })
            }
          />
        </div>

        {/* Дата окончания */}
        <div className="filter-field">
          <label>Дата окончания (по):</label>
          <input
            type="date"
            value={filters.endDate}
            onChange={(e) =>
              setFilters({ ...filters, endDate: e.target.value })
            }
          />
        </div>

        <div className="filter-buttons">
          <Button onClick={handleReset} text='Сбросить фильтр' 
          style={{ backgroundColor: 'rgba(215, 201, 164)', 
            color: 'black', border: '2px solid #998756', fontWeight:'bold', width:'50%'}}/>
          
          <Button onClick={handleApply} text='Применить' 
          style={{ backgroundColor: 'rgba(215, 201, 164)', 
            color: 'black', border: '2px solid #998756', fontWeight:'bold', width:'50%'}}/>
        </div>
      </div>
    </div>
  );
};

export default Filter; 