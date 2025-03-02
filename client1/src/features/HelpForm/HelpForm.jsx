import React from 'react'
import './HelpForm.css'
import Button from '../../shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'

const HelpForm = () => {
    
  const navigate = useNavigate();

  const handleClick =() =>{
    navigate('./FindTask');
  }

  return (
    <div className='helpForm_component'>
        <div className="text_information">
            <p style={{fontFamily:'Pricedown'}}><b>Помочь с выбором ответственного исполнителя?</b></p>
            <p>Привет, быстрее оформляй заказ и мы быстро найдем хорошего исполнителя</p>
        </div>
        
       <Button 
        text="Оформить заявку"
        style={{backgroundColor: '#EE5300', color:'black',border: '2px solid #EE5300', width:'60%'}}
        onClick={handleClick}
            />
    </div>
  )
}

export default HelpForm