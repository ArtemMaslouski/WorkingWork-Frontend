import React, {useState} from 'react'
import './Profile.css'
import { NavLink } from 'react-router-dom'
import Notification from '../../shared/ui/Notification/Notification'
import PhotoUploader from '../../features/PhotoUploader/PhotoUploader'
import { IoMdSettings } from "react-icons/io";
import HelpFormExecutor from '../../features/Forms/HelpFormExecutor/HelpFormExecutor'
import AboutuserInfo from './LinksComponents/AboutuserInfo'
import MyExercise from './LinksComponents/MyExercise'
import PersonalData from './LinksComponents/PersonalData'
import Settings from './LinksComponents/Settings'

const Profile = () => {
  const name = localStorage.getItem('UserName')
  // const [photo, setPhoto] = useState(null); 
  const [activeTab, setActiveTab] = useState('')

  const handlePhotoChange = (newPhoto) => {
    // setPhoto(newPhoto); 
  };

  const handleTabClick = (tab) =>{
    //функция принимает предыдущее значение состояния и его меняет
    setActiveTab((prevActiveTab) => (prevActiveTab === tab ? '' : tab));
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
            onClick={() => handleTabClick('myExercise')}
            style={{ color: activeTab === 'myExercise' ? '#EE5300' : 'black' }}
          >
            Мои задания
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
      {activeTab === 'myExercise' && <MyExercise/>}
      {activeTab === 'settings' && <Settings/>}
      
      {/* <div className="full_info">
        <p>{name}</p>
      </div> */}

      <div className="help_form_executor">
        <HelpFormExecutor />
      </div>
    
    </div>
  )
}

export default Profile