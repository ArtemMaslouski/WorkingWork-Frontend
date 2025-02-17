import React from 'react'
import './InputService.css'
import { FaSearch } from "react-icons/fa";

const InputService = ({ placeholder }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-field"
        placeholder={placeholder || 'Услуги и предложения'}
      />
      <button className="search-button">
        <FaSearch size={25}/>
      </button>
    </div>
  )
}

export default InputService