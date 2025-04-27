import React, { useEffect, useState } from 'react';
import './Profile.css';
import { NavLink } from 'react-router-dom';
import Notification from '../../shared/ui/Notification/Notification';
import PhotoUploader from '../../features/PhotoUploader/PhotoUploader';
import { IoMdSettings } from "react-icons/io";
import HelpFormExecutor from '../../features/Forms/HelpFormExecutor/HelpFormExecutor';
import AboutuserInfo from './LinksComponents/AboutuserInfo';
import MyExercise from './LinksComponents/MyExercise';
import PersonalData from './LinksComponents/PersonalData';
import Settings from './LinksComponents/Settings';
import { handleGetUserInfo } from '../../services/userInfoHandlers';
// import { baseURL } from '../../services/axiosConfig'; // твой baseURL

const Profile = () => {
  const [activeTab, setActiveTab] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await handleGetUserInfo();
      if (data && data.length > 0) {
        const user = data[0];
        setUserInfo(user);
        if (user.userInfo?.PhotoId) {
          // const imageUrl = `${baseURL}/uploads/${user.userInfo.PhotoId}.png`;
          // setPhotoUrl(imageUrl);
        }
      }
    };

    fetchUserInfo();
  }, []);

  const handlePhotoChange = (newPhoto) => {
    setPhotoUrl(newPhoto);
  };

  const handleTabClick = (tab) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === tab ? '' : tab));
  };

  return (
    <div className="Profile_page">
      <div className="profile_component">
        <div className="profile_user_info">
          {userInfo ? (
            <>
              <div className="profile_photo">
                <div className="photo_up">
                   <PhotoUploader currentPhoto={photoUrl} onPhotoChange={handlePhotoChange}/>
                </div>

                <div className="info_user">
                  <h3>{userInfo.UserName}</h3>
                  <p><strong>Город:</strong> {userInfo.userInfo?.City || 'Не указан'}</p>
                  <p><strong>Обо мне:</strong> {userInfo.userInfo?.Description || 'Описание отсутствует'}</p>
               </div>
             
              </div>
            </>
          ) : (
            <p>Загрузка информации о пользователе...</p>
          )}
        </div>

        <div className="notification_form">
          <Notification/>
        </div>
      </div>

      <div className="link_about_user">
        <div className="links_profile">
          <NavLink onClick={() => handleTabClick('AboutUserInfo')} style={{ color: activeTab === 'AboutUserInfo' ? '#625430' : 'black' }}>
            Обо Мне
          </NavLink>
          <NavLink onClick={() => handleTabClick('personalData')} style={{ color: activeTab === 'personalData' ? '#625430' : 'black' }}>
            Личные Данные
          </NavLink>
          <NavLink onClick={() => handleTabClick('myExercise')} style={{ color: activeTab === 'myExercise' ? '#625430' : 'black' }}>
            Мои задания
          </NavLink>
          <NavLink onClick={() => handleTabClick('settings')} style={{ color: activeTab === 'settings' ? '#625430' : 'black' }}>
            <IoMdSettings size={25} color={activeTab === 'settings' ? '#625430' : 'gray'} />
          </NavLink>
        </div>
        <div className="line">
          <hr style={{ width: '100%' }} />
        </div>
      </div>

      {activeTab === 'AboutUserInfo' && <AboutuserInfo />}
      {activeTab === 'personalData' && <PersonalData />}
      {activeTab === 'myExercise' && <MyExercise />}
      {activeTab === 'settings' && <Settings />}

      <div className="help_form_executor">
        <HelpFormExecutor />
      </div>
    </div>
  );
};

export default Profile;
