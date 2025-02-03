import React from 'react'
import './FindTask.css'
import InputService from '../../components/InputService/InputService'

const FindTask = () => {
  return (
    <div className='findTask_component'>
        <div className="find_task_item">
            <div className="place_for_find_task">
                <h1>Все задания</h1>
                <InputService placeholder="Например, требуется курьер, доставить товар" />
            </div>
            
        </div>
    </div>
  )
}

export default FindTask