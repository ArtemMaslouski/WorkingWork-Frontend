import React, { useState, useRef } from 'react';
import './PhotoUploader.css';
import Button from '../../shared/ui/Button/Button';
import { toast } from 'react-toastify';
import { handleUploadFilePhoto } from '../../services/userInfoHandlers'; // Import the upload function
import { baseURL } from '../../constants/someConstants';

const PhotoUploader = ({ onPhotoChange, currentPhoto }) => {
  const [photo, setPhoto] = useState(currentPhoto || null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handlePhotoChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.match('image.*')) {
      toast.error('Пожалуйста, выберите файл изображения');
      return;
    }

    if (file.size > 5 * 1024 * 1024) { 
      toast.error('Файл слишком большой (максимум 5MB)');
      return;
    }

    setIsUploading(true);
    
    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);

      const response = await handleUploadFilePhoto(file);
      
      if (response?.userInfo?.Photo?.url) {
        console.log(response)
        onPhotoChange(`${baseURL}${response.userInfo.Photo.url}`);
      }
      
    } catch (error) {
      console.error('Upload error:', error);
      setPhoto(null); 
    } finally {
      setIsUploading(false);
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
            disabled={isUploading}
          />
          <Button
            text={isUploading ? "Загрузка..." : "Изменить фото"}
            onClick={handleButtonClick}
            disabled={isUploading}
            style={{
              backgroundColor: 'white',
              color: isUploading ? '#aaa' : 'gray',
              border: '1px solid #625430',
              width: '200px',
              height: '5vh',
              marginTop: '1vh',
              cursor: isUploading ? 'not-allowed' : 'pointer'
            }}
          />
        </div>
      </div>
      <div className="info_about_user">
      </div>
    </div>
  );
};

export default PhotoUploader;