import React, { useEffect, useState } from 'react';
import './StyleForInfoForm.css';
import Button from '../../../shared/ui/Button/Button';
import { handleAddDescription } from '../../../services/userInfoHandlers'
import { useTranslation } from 'react-i18next';

const AboutuserInfo = ({ userInfo, onUpdateUserInfo }) => {
  const [description, setDescription] = useState('');
  const {t} = useTranslation();

  useEffect(() => {
    if (userInfo?.userInfo?.Description) {
      setDescription(userInfo.userInfo.Description); 
    }
  }, [userInfo]); 

  const handleCancel = () => {
    if (userInfo?.userInfo?.Description) {
      setDescription(userInfo.userInfo.Description); 
    } else {
      setDescription('');
    }
  };

  const handleSave = async () => {
    await handleAddDescription(description);
    if (onUpdateUserInfo) {
      await onUpdateUserInfo(); 
    }
  };

  return (
    <div className='info_about_user'>
      <div className="info_user_item">
        <div className="action">
          <p>{t('profile.DescribeYourExp')}</p>
          <textarea
            name="taskDescription"
            className="textarea-field"
            placeholder= {t('profile.writeAboutYourself')}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="save_cancellation_button">
          <Button
            text={t('Cancel')}
            onClick={handleCancel}
            style={{
              backgroundColor: 'rgba(215, 201, 164)',
              fontWeight: 'light',
              color: 'black',
              border: '2px solid #625430',
              height: '4vh'
            }}
          />
          <Button
            text={t('Save')}
            onClick={handleSave}
            style={{
              backgroundColor: 'white',
              fontWeight: 'light',
              color: 'black',
              border: '2px solid #625430',
              height: '4vh'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutuserInfo;
