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
import { baseURL } from '../../constants/someConstants'; 
import { useTranslation } from 'react-i18next';
import { useUserTranslation } from '../../hooks/useUserTranslation';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const { t } = useTranslation();
  const { translatedInfo, isTranslating } = useUserTranslation(userInfo);

  const fetchUserInfo = async () => {
    const data = await handleGetUserInfo();
    if (data && data.length > 0) {
      const user = data[0];
      setUserInfo(user);
      if (user.userInfo?.PhotoId) {
        const imageUrl = `${baseURL}/uploads/${user.userInfo.PhotoId}.png`;
        setPhotoUrl(imageUrl);
      }
    }
  };
  
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handlePhotoChange = (newPhoto) => {
    setPhotoUrl(newPhoto);
  };

  const handleTabClick = (tab) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === tab ? '' : tab));
  };

  const formatBirthday = (birthday) => {
    if (!birthday) return t('profile.notSpecified');
    
    const date = new Date(birthday);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
  
    const age = new Date().getFullYear() - year; 
  
    return `${day}.${month}.${year} (${age} лет)`;
  };

  return (
    <div className="Profile_page">
      <div className="profile_component">
        <div className="profile_user_info">
          <div className="profile_photo">
            <div className="photo_up">
              <PhotoUploader currentPhoto={photoUrl} onPhotoChange={handlePhotoChange} />
            </div>
    
            <div className="info_user">
              <h3>{`${translatedInfo.surname || ''} ${translatedInfo.name || ''}`.trim() || t('profile.NameNotSpecified')}</h3>
              <p><strong>{t('profile.gender')}:</strong><i> {translatedInfo.sex || t('profile.notSpecified')}</i></p>
              <p><strong>{t('city')}:</strong> {translatedInfo.city || t('profile.notSpecified')}</p>
              <p><strong>{t('profile.dateOfBirth')}:</strong> {formatBirthday(userInfo?.userInfo?.BirthdayDate) || t('profile.notSpecified')}</p>
              <p><strong>{t('profile.email')}:</strong> {userInfo?.userInfo?.Email || t('profile.notSpecified')}</p>
              <p><strong>{t('profile.numberPhone')}:</strong> {userInfo?.userInfo?.PhoneNumber || t('profile.notSpecified')}</p>
              <p><strong>{t('profile.aboutMe')}:</strong> {translatedInfo.description || t('profile.noDescription')}</p>
            </div>
          </div>
        </div>
  
        <div className="notification_form">
          <Notification />
        </div>
      </div>
  
      <div className="link_about_user">
        <div className="links_profile">
          <NavLink onClick={() => handleTabClick('AboutUserInfo')} style={{ color: activeTab === 'AboutUserInfo' ? '#625430' : 'black' }}>
            {t('profile.aboutMe')}
          </NavLink>
          <NavLink onClick={() => handleTabClick('personalData')} style={{ color: activeTab === 'personalData' ? '#625430' : 'black' }}>
            {t('profile.PersonalData')}
          </NavLink>
          <NavLink onClick={() => handleTabClick('myExercise')} style={{ color: activeTab === 'myExercise' ? '#625430' : 'black' }}>
            {t('profile.MyAssignments')}
          </NavLink>
          <NavLink onClick={() => handleTabClick('settings')} style={{ color: activeTab === 'settings' ? '#625430' : 'black' }}>
            <IoMdSettings size={25} color={activeTab === 'settings' ? '#625430' : 'gray'} />
          </NavLink>
        </div>
        <div className="line">
          <hr style={{ width: '100%' }} />
        </div>
      </div>
  
      {activeTab === 'AboutUserInfo' && <AboutuserInfo userInfo={userInfo} onUpdateUserInfo={fetchUserInfo} />}
      {activeTab === 'personalData' && <PersonalData userInfo={userInfo} onUpdateUserInfo={fetchUserInfo} />}
      {activeTab === 'myExercise' && <MyExercise />}
      {activeTab === 'settings' && <Settings />}
  
      <div className="help_form_executor">
        <HelpFormExecutor />
      </div>
    </div>  
  );
};

export default Profile;
