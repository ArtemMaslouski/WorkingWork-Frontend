import React from 'react';
import './SelectInput.css'

const SelectInput = ({ id, label, value, options, onChange, required }) => {
    return (
        <div className="input-group">
            
            <select 
                id={id}
                className='input-select'
                value={value}
                onChange={onChange}
                required={required}
            >
                <option value="" disabled>{`Выберите ${label.toLowerCase()}`}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;