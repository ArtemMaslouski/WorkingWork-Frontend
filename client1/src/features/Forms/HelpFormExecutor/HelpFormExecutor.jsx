import React from 'react'
import '../HelpFormСustomer/HelpFormСustomer.css'
import Button from '../../../shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'

const HelpFormExecutor = () => {
    
  const navigate = useNavigate();

  const handleClick =() =>{
    navigate('/FindTask');
  }

  return (
    <div className='helpForm_component_ex'>
        <div className="text_information">
            <p style={{fontFamily:'gta', fontSize:'0.9rem'}}><b>Помочь найти задание?</b></p>
            <p style={{fontFamily:'gta', fontSize:'0.8rem'}}>Выполнять заказы на <b>Working Work</b> могут только совершеннолетние пользователи,или лица, достгшие 16 лет, прошедшие процедуру подтверждения профиля.</p>
        </div>
        
       <Button 
        text="Найти заявку"
        style={{backgroundColor: '#EE5300', color:'black',border: '2px solid #EE5300', width:'60%', height:'4vh'}}
        onClick={handleClick}/>
    </div>
  )
}

export default HelpFormExecutor