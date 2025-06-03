import React from 'react'
import Input from '../../../shared/ui/Input/Input'
import Button from '../../../shared/ui/Button/Button'
import {handleRegisterSubmit} from '../../../services/authHandlers'
import '../styles/FormStyles.css'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const RegisterForm = ({
    UserName, setName,
    Email, setEmail,
    Password, setPassword,
    togglePasswordVisibility,showPassword,
    onBackToLogin
}) => {

  const navigate = useNavigate()
  const {t} = useTranslation();

  const onSubmit =(e) =>{
    handleRegisterSubmit(e, UserName, Email, Password, setName, setEmail, setPassword, navigate);
  }
  
  return (
    <form className='forms' onSubmit={onSubmit}>
      <h1>{t('login')}<br/><hr/></h1>
        <Input 
                type='text' 
                name='username' 
                label={t('username')}
                required={true} 
                value={UserName}
                onChange={(e) => setName(e.target.value)}
            />
            <Input 
                type='email'
                name='email' 
                label={'Email'}
                required={true} 
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
                type={showPassword ? 'text' : 'password'} 
                name='password' 
                label={t('password')}
                required={true}
                showToggleButton 
                togglePasswordVisibility={togglePasswordVisibility}
                isPasswordVisible={showPassword}
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit"  text={t('register')}
             style={{ backgroundColor: 'rgba(215, 201, 164)', 
            color: 'black', border: '2px solid #998756', fontWeight:'bold',  width:'100%', height:'5vh'}} />
         
             <p title='Вернуться для входа в систему, если есть аккаунт' style={{ cursor: 'pointer', fontWeight:'bold' }} onClick={onBackToLogin}>
             {t('alreadyHaveAnAccount')} <span style={{ color:'#998756'}}> {t('login')}</span></p>
    </form>
  )
}

export default RegisterForm