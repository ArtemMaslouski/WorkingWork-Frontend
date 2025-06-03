import React from 'react';
import './SelectInput.css'

const SelectInput = ({ id, label, value, options, onChange, required }) => {
    const getLabelText = (label) => {
        if (typeof label === 'string') {
            return label.toLowerCase();
        }
        if (React.isValidElement(label)) {
            return label.props.children?.toLowerCase() || '';
        }
        return '';
    };

    return (
        <div className="input-group">
            
            <select 
                id={id}
                className='input-select'
                value={value}
                onChange={onChange}
                required={required}
            >
                <option value="" disabled>{`Выберите ${getLabelText(label)}`}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;