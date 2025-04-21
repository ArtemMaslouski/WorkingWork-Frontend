import React from 'react'
import './ActionButComponent.css'
import Button from '../../../shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'


const ActionButComponent = () => {

  const navigate = useNavigate();
  
    const handleClickCreate =() =>{
      navigate('./CreatingTask');
    }
    const handleClickFind =() =>{
      navigate('./FindTask');
    }


  return (
    <div className='action_component'>
        <div className="find_help_component">
            <p>Ищите проверенных специалистов или выгодные заказы с помощью сервиса</p>

            <div className="action_button">
                <Button   
                    text="Найти исполнителя" 
                    onClick={handleClickCreate}
                    style={{ backgroundColor: 'rgba(215, 201, 164)',fontWeight:'light', color: 'black', border: '2px solid #625430', width:'65%', height:'6vh', fontSize:'1rem' }} 
                />
                <Button
                    text="Стать исполнителем" 
                    onClick={handleClickFind}
                    style={{ backgroundColor: 'white',fontWeight:'light', color: 'black', border: '2px solid #625430',width:'65%',height:'6vh', fontSize:'1rem '}} />
            </div>
        </div>
    </div>
  )
}

export default ActionButComponent