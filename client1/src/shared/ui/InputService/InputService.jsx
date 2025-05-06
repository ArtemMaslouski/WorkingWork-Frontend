import React from 'react'
import './InputService.css'
import { FaSearch } from "react-icons/fa";
import { MdOutlineFilterList } from "react-icons/md";

const InputService = ({ 
  placeholder, 
  onFilterClick,
  searchQuery,
  onSearchChange,
  onSearchClick
}) => {
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-field"
        placeholder={placeholder || 'Услуги и предложения'}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <button className="search-button" onClick={onFilterClick}>
        <MdOutlineFilterList size={30}/>
      </button>

      <button className="search-button" onClick={onSearchClick}>
        <FaSearch size={30}/>
      </button>
    </div>
  );
};


export default InputService