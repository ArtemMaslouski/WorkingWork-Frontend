import React from 'react'
import './HelpFormСustomer.css'
import Button from '../../../shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const HelpForm = () => {
    
  const navigate = useNavigate();
  const {t} = useTranslation();

  const handleClick =() =>{
    navigate('./CreatingTask');
  }

  return (
    <div className='helpForm_component'>
        <div className="text_information">
            <p style={{fontFamily:'gta', fontSize:'0.9rem'}}><b>{t('choosingExecutor')}</b></p>
            <p>{t('quicklyFind')}</p>
        </div>
        
       <Button 
        text={t('SubmitAnApplication')}
        style={{ backgroundColor: 'rgba(215, 201, 164)', color:'black',border: '2px solid #625430', width:'60%', height:'5vh'}}
        onClick={handleClick}
            />
    </div>
  )
}

export default HelpForm