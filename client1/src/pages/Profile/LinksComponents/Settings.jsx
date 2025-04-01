import React, { useState } from 'react';
import Input from '../../../shared/ui/Input/Input';
import Button from '../../../shared/ui/Button/Button';
import { handleDeleteUser } from '../../../services/authHandlers';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Settings = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // const navigate = useNavigate();

  const togglePasswordVisibility = (setShow) => {
    setShow(prev => !prev);
  };


  const onSubmitDeleteUser = async () => {
    const confirmed = window.confirm("Вы уверены, что хотите удалить свой профиль?");
    if (confirmed) {
        await handleDeleteUser();
    }
};



  return (
    <div className='info_about_user'>
      <div className="info_user_item">
        <div className="action">
          <div className="text_for_password">
            <p><b>Изменить пароль</b></p>
            <span>Придумайте новый пароль с такими требованиями:</span>
            <li>длина не менее <b>8</b> символов;</li>
            <li>заглавные латинские буквы;</li>
            <li>строчные латинские буквы;</li>
            <li>цифры или специальные символы <b>%,#,$</b> и другие.</li>
          </div>
          
          <div className="place_for_change_password">
            <Input
              type={showPassword ? 'text' : 'password'} 
              name='password' 
              label={'Действующий пароль'} 
              showToggleButton 
              togglePasswordVisibility={() => togglePasswordVisibility(setShowPassword)} 
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
              label={'Новый пароль'}
              showToggleButton
              togglePasswordVisibility={() => togglePasswordVisibility(setShowNewPassword)}
              isPasswordVisible={showNewPassword}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              className='inputInt-field'
              name='new_password_again'
              label={'Повторите пароль'}
              showToggleButton
              togglePasswordVisibility={() => togglePasswordVisibility(setShowConfirmPassword)}
              isPasswordVisible={showConfirmPassword}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              text='Сохранить пароль'
              style={{ backgroundColor: '#EE5300',fontWeight:'light', color: 'black', border: '2px solid #EE5300',  height:'4vh' }}
            />

          </div>

          <div className="delete_profile">
            <p><b>Удалить профиль</b></p>
            <span>При удалении профиля, восстановить будет невозможно!</span>
            <Button
              text='Удалить профиль'
              style={{ backgroundColor: '#EE5300',fontWeight:'light', color: 'black', border: '2px solid #EE5300',  height:'4vh' }}
              onClick={onSubmitDeleteUser}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings;