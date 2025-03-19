import React, { useState, useRef } from 'react';
import './PhotoUploader.css';
import Button from '../../shared/ui/Button/Button';

const PhotoUploader = ({ onPhotoChange }) => {
  const [photo, setPhoto] = useState(null);
  const [age, setAge] = useState(null);
  const [estimates, setEstimates] = useState(null);

  const name = localStorage.getItem('UserName')
  const fileInputRef = useRef(null); 

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        if (onPhotoChange) { 
          onPhotoChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); 
  };

  return (
    <div className="photo_image_uploader">
      <div className="image_button_comp">

        <div className="images">
          {photo ? (
            <img src={photo} alt="Uploaded" className="photo" />
          ) : (
            <div className="placeholder">Нет фото</div>
          )}
        </div>
        <div className="button_uploader">
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={fileInputRef} 
            onChange={handlePhotoChange}
          />
          <Button
            text="Изменить фото"
            onClick={handleButtonClick} 
            style={{
              backgroundColor: 'white',
              color: 'gray',
              border: '1px solid #EE5300',
              width: '150px',
              height: '4vh',
              marginTop: '1vh'
            }}
          />
          
          </div>
        </div>
        <div className="info_about_user">
          <p className="underlined">{name}</p>
          <p className="underlined">{age} лет</p>
          <p className="underlined">{estimates} оценок</p>
        </div>
    </div>
  );
};

export default PhotoUploader;
