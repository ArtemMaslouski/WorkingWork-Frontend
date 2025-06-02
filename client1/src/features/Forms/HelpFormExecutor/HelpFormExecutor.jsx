import React from 'react'
import '../HelpFormСustomer/HelpFormСustomer.css'
import Button from '../../../shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const HelpFormExecutor = () => {
    
  const navigate = useNavigate();
  const {t} = useTranslation();

  const handleClick =() =>{
    navigate('/FindTask');
  }

  return (
    <div className='helpForm_component_ex'>
        <div className="text_information">
            <p style={{ fontSize:'0.9rem'}}><b>{t('HelpMeFindTask')}</b></p>
            <p style={{fontSize:'0.8rem'}}>{t('FulfillOrders')} <b>Working Work</b>{t('OnlyAdultUsers')}</p>
        </div>
        
       <Button 
        text={t('findTask')}
        style={{ backgroundColor: 'rgba(215, 201, 164)', color:'black',border: '2px solid #625430', width:'60%', height:'4vh'}}
        onClick={handleClick}/>
    </div>
  )
}

export default HelpFormExecutor