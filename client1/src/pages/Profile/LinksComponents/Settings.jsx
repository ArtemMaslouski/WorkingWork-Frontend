import React, { useState } from 'react';
import Input from '../../../shared/ui/Input/Input';
import Button from '../../../shared/ui/Button/Button';
import { handleDeleteUser } from '../../../services/authHandlers';
import { toast } from "react-toastify";
import {handleChangePassword } from '../../../services/userInfoHandlers'
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const {t} = useTranslation();
  
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (setShow) => {
    setShow((prev) => !prev);
  };

  const onSubmitChangePassword = async (e) => {
    e.preventDefault();
    
    if (newPassword.length < 8) {
      toast.error('Пароль должен содержать минимум 8 символов');
      return;
    }
  
    if (newPassword !== confirmPassword) {
      toast.error('Пароли не совпадают');
      return;
    }
  
    await handleChangePassword(password, newPassword, confirmPassword, setPassword, setNewPassword, setConfirmPassword);
  };
  
  const onSubmitDeleteUser = async () => {
    const confirmed = window.confirm(
      'Вы уверены, что хотите удалить свой профиль?'
    );
    if (confirmed) {
      await handleDeleteUser();
    }
  };

  return (
    <div className='info_about_user'>
      <div className='info_user_item'>
        <div className='action'>
          <div className='text_for_password'>
            <p>
              <b>{t('profile.ChangePassword')}</b>
            </p>
            <span>{t('profile.createNewPas')}:</span>
            <li>
              {t('profile.length')} <b>8</b> {t('profile.characters')};
            </li>
            <li>{t('profile.capLatinLat')};</li>
            <li>{t('profile.lowLatinLat')};</li>
            <li>
              {t('profile.numOrSpecSymb')} <b>%,#,$</b> {t('profile.andOther')}.
            </li>
          </div>

          <div className='place_for_change_password'>
            <Input
              type={showPassword ? 'text' : 'password'}
              name='password'
              label={t('profile.CurrentPassword')}
              showToggleButton
              togglePasswordVisibility={() =>
                togglePasswordVisibility(setShowPassword)
              }
              isPasswordVisible={showPassword}
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // readOnly={true}
            />
            <Input
              type={showNewPassword ? 'text' : 'password'}
              className='inputInt-field'
              name='new_password'
              label={t('profile.newPassword')}
              showToggleButton
              togglePasswordVisibility={() =>
                togglePasswordVisibility(setShowNewPassword)
              }
              isPasswordVisible={showNewPassword}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              className='inputInt-field'
              name='new_password_again'
              label={t('profile.RepeatPassword')}
              showToggleButton
              togglePasswordVisibility={() =>
                togglePasswordVisibility(setShowConfirmPassword)
              }
              isPasswordVisible={showConfirmPassword}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              text={`${t('Save')} ${t('password')}`}
              style={{
                backgroundColor: 'rgba(215, 201, 164)',
                fontWeight: 'light',
                color: 'black',
                border: '2px solid #625430',
                height: '4vh',
              }}
              onClick={onSubmitChangePassword}
            />
          </div>

          <div className='delete_profile'>
            <p>
              <b>{`${t('delete')} ${t('profile.profile')}`}</b>
            </p>
            <span>{t('profile.ifYouDelete')}</span>
            <Button
              text={`${t('delete')} ${t('profile.profile')}`}
              style={{
                backgroundColor: 'rgba(215, 201, 164)',
                fontWeight: 'light',
                color: 'black',
                border: '2px solid #625430',
                height: '4vh',
              }}
              onClick={onSubmitDeleteUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
