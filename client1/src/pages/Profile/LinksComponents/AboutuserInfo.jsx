import React, { useEffect, useState } from 'react';
import './StyleForInfoForm.css';
import Button from '../../../shared/ui/Button/Button';
import { handleAddDescription } from '../../../services/userInfoHandlers'

const AboutuserInfo = ({ userInfo, onUpdateUserInfo }) => {
  const [description, setDescription] = useState('');

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
          <p>Опишите свой опыт, навыки и преимущества в определенной сфере</p>
          <textarea
            name="taskDescription"
            className="textarea-field"
            placeholder="Напишите о себе подробнее"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="save_cancellation_button">
          <Button
            text='Отмена'
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
            text='Сохранить'
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
