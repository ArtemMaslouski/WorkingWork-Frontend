import React, {useState} from 'react'
import './Profile.css'
import { NavLink } from 'react-router-dom'
import Notification from '../../shared/ui/Notification/Notification'
import PhotoUploader from '../../features/PhotoUploader/PhotoUploader'
import { IoMdSettings } from "react-icons/io";
import HelpFormExecutor from '../../features/Forms/HelpFormExecutor/HelpFormExecutor'
import AboutuserInfo from './LinksPages/AboutuserInfo'
import Additionl from './LinksPages/Additional'
import PersonalData from './LinksPages/PersonalData'
import Settings from './LinksPages/Settings'

const Profile = () => {
  const name = localStorage.getItem('UserName')
  // const [photo, setPhoto] = useState(null); 
  const [activeTab, setActiveTab] = useState('AboutUserInfo')

  const handlePhotoChange = (newPhoto) => {
    // setPhoto(newPhoto); 
  };

  const handleTabClick = (tab) =>{
    setActiveTab(tab)
  }

  return (
    <div className='Profile_page'>
      <div className="profile_component">
        <div className="profile_user_photo_age">
          <h3>Здравствуйте, {name}!</h3>
        </div>

        <div className="notification_form">
          <Notification/>
        </div>
        
      </div>
      <div className="photoUpload">
        <PhotoUploader onPhotoChange={handlePhotoChange}/>
      </div>

      <div className="link_about_user">
        <div className="links_profile">
          <NavLink
            onClick={() => handleTabClick('AboutUserInfo')}
            style={{ color: activeTab === 'AboutUserInfo' ? '#EE5300' : 'black' }}
          >
            Обо Мне
          </NavLink>
          <NavLink
            onClick={() => handleTabClick('personalData')}
            style={{ color: activeTab === 'personalData' ? '#EE5300' : 'black' }}
          >
            Личные Данные
          </NavLink>
          <NavLink
            onClick={() => handleTabClick('additional')}
            style={{ color: activeTab === 'additional' ? '#EE5300' : 'black' }}
          >
            Дополнительно
          </NavLink>
          <NavLink
            onClick={() => handleTabClick('settings')}
            style={{ color: activeTab === 'settings' ? '#EE5300' : 'black' }}
          >
            <IoMdSettings size={25} color={activeTab === 'settings' ? '#EE5300' : 'gray'} />
          </NavLink>
        </div>
        <div className="line">
          <hr style={{ width: '100%' }} />
        </div>
      </div>
      {activeTab === 'AboutUserInfo' && <AboutuserInfo/>}
      {activeTab === 'personalData' && <PersonalData/>}
      {activeTab === 'additional' && <Additionl/>}
      {activeTab === 'settings' && <Settings/>}
      
      <div className="help_form_executor">
        <HelpFormExecutor />
      </div>
    
    </div>
  )
}

export default Profile