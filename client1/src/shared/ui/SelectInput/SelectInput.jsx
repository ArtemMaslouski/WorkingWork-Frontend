import React from 'react';

const SelectInput = ({ id, label, value, options, onChange, required }) => {
    return (
        <div className="input-group">
            {/* <label htmlFor={id}>{label}</label> */}
            <select 
                id={id}
                className='input-field'
                value={value}
                onChange={onChange}
                required={required}
            >
                <option value="">{`Выберите ${label.toLowerCase()}`}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;