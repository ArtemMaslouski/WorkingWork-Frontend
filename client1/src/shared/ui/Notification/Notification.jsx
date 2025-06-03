import React from 'react'
import { MdOutlineDone } from "react-icons/md";
import './Notification.css'
import { useTranslation } from 'react-i18next';

const Notification = () => {
  const {t} = useTranslation();

  return (
    <div className='notification_item'>
        <div className="emblem_done">
            <MdOutlineDone size={30}/>
        </div>
        <div className="text_item">
            <p>{t('profile.becomePerformer')}<br/>{t('profile.startEarning')}</p>
        </div>
    </div>
  )
}

export default Notification