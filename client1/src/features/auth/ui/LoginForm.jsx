import React from 'react'
import Input from '../../../shared/ui/Input/Input'
import Button from '../../../shared/ui/Button/Button'
import '../styles/FormStyles.css'
import { handleLoginSubmit } from '../../../services/authHandlers'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const LoginForm = ({ Email, setEmail, Password, 
  setPassword, togglePasswordVisibility, showPassword,
  onSwitchToRegister,onSwitchToForgotPassword }) => {
   
  const navigate = useNavigate()
  const {t} = useTranslation();

  const onSubmit= async (e)=>{
    await handleLoginSubmit(e,Email, setEmail,Password, setPassword, navigate)
  }
    
    return (
    <form className="forms" onSubmit={onSubmit}>
        <h1>{t('login')}<br/><hr/></h1>
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
                showToggleButton 
                togglePasswordVisibility={togglePasswordVisibility} 
                isPasswordVisible={showPassword}
                required={true}
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" text={t('login')}
            style={{ backgroundColor: 'rgba(215, 201, 164)', 
            color: 'black', border: '2px solid #998756', fontWeight:'bold', width:'100%', height:'5vh'}} 
            />

          <p title ='Если забыли пароль, перейдите на страницу, нажатием на текст, для восстановления пароля' style={{ cursor: 'pointer', color: 'black', fontWeight:'bold' }} onClick={onSwitchToForgotPassword}>
            {t('ForgotYourPassword')}
          </p>

          <p style={{ cursor: 'pointer', color: 'black', fontWeight:'bold' }} onClick={onSwitchToRegister}>
          {t('DontHaveAccount')}<span title={t('register')} style={{ color:' #998756'}}>{t('register')}</span> 
          </p>
    </form>
  )
}

export default LoginForm