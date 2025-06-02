import React, { useState, useEffect } from 'react';
import Input from '../../../shared/ui/Input/Input';
import DatePicker from 'react-datepicker';
import Button from '../../../shared/ui/Button/Button';
import { handleAddPhone, handleAddUserInfo } from '../../../services/userInfoHandlers'; 
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

const PersonalData = ({userInfo, onUpdateUserInfo}) => {
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [BirthdayDate, setBirthdayDate] = useState(null);
  const [Sex, setSex] = useState('');
  const [City, setCity] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const {t} = useTranslation();

  useEffect(() => {
    if (userInfo?.userInfo) {
      setName(userInfo.userInfo.Name || '');
      setSurname(userInfo.userInfo.Surname || '');
      setBirthdayDate(userInfo.userInfo.BirthdayDate ? new Date(userInfo.userInfo.BirthdayDate) : null);
      setSex(userInfo.userInfo.Sex || '');
      setCity(userInfo.userInfo.City || '');
      setEmail(userInfo.userInfo.Email || '');
      setPhoneNumber(userInfo.userInfo.PhoneNumber || '');
    }
  }, [userInfo]);

  const handleSave = async () => {
    const access_token = Cookies.get('access_token');
    if (!access_token) {
        toast.error('Ошибка авторизации! Войдите в аккаунт.');
        return;
    }

    try {
        await handleAddUserInfo(
            Name, Surname, 
            BirthdayDate,Sex, 
            City,Email,  setName, 
            setSurname, setBirthdayDate, 
            setSex, setCity, setEmail
        );
        if (onUpdateUserInfo) {
          await onUpdateUserInfo(); 
        }
    } catch (error) {
        console.error('Ошибка сохранения:', error);
    }
  };
  
  const onSubmitAddPhoneNumber = async () => {
    if (!PhoneNumber.trim()) {
        toast.error('Введите номер телефона');
        return;
    }
    try{
      await handleAddPhone(PhoneNumber, setPhoneNumber);
      if(onUpdateUserInfo){
        await onUpdateUserInfo();
      }
    }catch (error) {
      console.error('Ошибка сохранения:', error);
  }
  };

  const handleCancelUserData = () => {
    if (userInfo?.userInfo) {
      setName(userInfo.userInfo.Name || '');
      setSurname(userInfo.userInfo.Surname || '');
      setBirthdayDate(userInfo.userInfo.BirthdayDate ? new Date(userInfo.userInfo.BirthdayDate) : null);
      setSex(userInfo.userInfo.Sex || '');
      setCity(userInfo.userInfo.City || '');
      setEmail(userInfo.userInfo.Email || '');
    }
  };

  const handleCancelPhone = () => {
    setPhoneNumber(userInfo?.userInfo?.PhoneNumber || '');
  };

  return (
    <div className='info_about_user'>
      <div className="info_user_item">
        <div className="action">
          <p>{t('profile.writeAboutYourself')}</p>
          
          <Input
            type='text'
            className='inputInt-field'
            name='surname'
            label={t('profile.surname')}
            required
            value={Surname}
            onChange={e => setSurname(e.target.value)}
          />
        
          <Input
            type='text'
            className='inputInt-field'
            name='name'
            label={t('profile.name')}
            required
            value={Name}
            onChange={e => setName(e.target.value)}
          />
    
          <DatePicker
            className="input-b_day"
            dateFormat="dd/MM/yyyy"
            placeholderText={t('profile.dateOfBirth')}
            selected={BirthdayDate}
            onChange={date => setBirthdayDate(date)}
          />

          <div className="gender-selection">
            <p>{t('profile.gender')}</p>
            <label><input type="radio" name="gender" value="male" onChange={() => setSex('мужской')} />{t('profile.male')}</label>
            <label><input type="radio" name="gender" value="female" onChange={() => setSex('женский')} />{t('profile.female')}</label>
          </div>

          <Input
            type='text'
            className='inputInt-field'
            name='city'
            label={t('city')}
            required
            value={City}
            onChange={e => setCity(e.target.value)}
          />

          <Input
            type='email'
            className='inputInt-field'
            name='email'
            label={'Email'}
            required
            value={Email}
            onChange={e => setEmail(e.target.value)}
          />

        </div>

        <div className="save_cancellation_button">
          <Button
            text={t('Cancel')}  onClick={handleCancelUserData}
            style={{ backgroundColor: 'rgba(215, 201, 164)', fontWeight: 'light', color: 'black', border: '2px solid #625430', height: '4vh' }} 
          />
          <Button
            text={t('Save')}
            onClick={handleSave} 
            style={{ backgroundColor: 'white', fontWeight: 'light', color: 'black', border: '2px solid #625430', height: '4vh' }} 
          />
        </div>

        <div className="action_tel">
        <p>{t('profile.personalInformation')}</p>
          
          <Input
            type='tel'
            className='inputInt-field'
            name='number'
            label={`${t('profile.numberPhone')} ${t('profile.withCode')}`}
            required
            value={PhoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <label>
            {t('Enter')} <b><i>{t('profile.numberPhone')}</i></b>, {t('profile.canContact')}
          </label>
        </div>
        
        <div className="save_cancellation_button">
          <Button
            text={t('Cancel')} onClick={handleCancelPhone}
            style={{ backgroundColor: 'rgba(215, 201, 164)', fontWeight: 'light', color: 'black', border: '2px solid #625430', height: '4vh' }} 
          />
          <Button
            text={t('Cancel')}
            onClick={onSubmitAddPhoneNumber}
            // onClick={handleSave} 
            style={{ backgroundColor: 'white', fontWeight: 'light', color: 'black', border: '2px solid #625430', height: '4vh' }} 
          />
        </div>

      </div>
    </div>
  );
};

export default PersonalData;