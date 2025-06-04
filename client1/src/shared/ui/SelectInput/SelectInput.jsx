import React from 'react';
import './SelectInput.css'
import { useTranslation } from 'react-i18next';

const SelectInput = ({ id, label, value, options, onChange, required }) => {

    const { t } = useTranslation();  

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
                <option value="" disabled>{`${t('Enter')} ${getLabelText(label)}`}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;