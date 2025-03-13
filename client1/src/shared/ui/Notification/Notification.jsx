import React from 'react'
import { MdOutlineDone } from "react-icons/md";
import './Notification.css'

const Notification = () => {
  return (
    <div className='notification_item'>
        <div className="emblem_done">
            <MdOutlineDone size={35}/>
        </div>
        <div className="text_item">
            <p>Станьте исполнителем и<br/>начните зарабатывать!</p>
        </div>
    </div>
  )
}

export default Notification