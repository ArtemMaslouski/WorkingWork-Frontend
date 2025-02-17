import React from 'react'
import Input from '../../../shared/ui/Input/Input'
import Button from '../../../shared/ui/Button/Button'
import '../styles/FormStyles.css'
import { handleLoginSubmit } from '../model/authHandlers'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ Email, setEmail, Password, 
  setPassword, togglePasswordVisibility, showPassword,
  onSwitchToRegister,onSwitchToForgotPassword }) => {
   
  const navigate = useNavigate()

  const onSubmit= async (e)=>{
    await handleLoginSubmit(e,Email, setEmail,Password, setPassword, navigate)
  }
    
    return (
    <form className="forms" onSubmit={onSubmit}>
        <h1>Вход<br/><hr/></h1>
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
                label={'Пароль'} 
                showToggleButton 
                togglePasswordVisibility={togglePasswordVisibility} 
                isPasswordVisible={showPassword}
                required={true}
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" text={'Войти'}
            style={{ backgroundColor: '#EE5300', 
            color: 'black', border: '2px solid #EE5300', fontWeight:'bold'}} 
            />

          <p title ='Если забыли пароль, перейдите на страницу, нажатием на текст, для восстановления пароля' style={{ cursor: 'pointer', color: 'black', fontWeight:'bold' }} onClick={onSwitchToForgotPassword}>
            Забыли пароль?
          </p>

          <p style={{ cursor: 'pointer', color: 'black', fontWeight:'bold' }} onClick={onSwitchToRegister}>
          У вас ещё нет аккаунта? <span title='Зарегистрироваться' style={{ color:'#EE5300'}}>Зарегистрироваться</span> 
          </p>
    </form>
  )
}

export default LoginForm