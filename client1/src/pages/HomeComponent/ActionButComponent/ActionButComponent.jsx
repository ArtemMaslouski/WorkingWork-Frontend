import React from 'react'
import './ActionButComponent.css'
import Button from '../../../components/Button/Button'

const ActionButComponent = () => {
  return (
    <div className='action_component'>
        <div className="find_help_component">
            <p>Ищите проверенных специалистов или выгодные заказы с помощью сервиса</p>

            <div className="action_button">
                <Button   
                    text="Найти исполнителя" 
                    style={{ backgroundColor: '#EE5300', color: 'black', border: '2px solid #EE5300' }} 
                />
                <Button
                    text="Стать исполнителем" 
                    style={{ backgroundColor: 'white', color: 'black', border: '2px solid #EE5300'  }} />
            </div>
        </div>
    </div>
  )
}

export default ActionButComponent