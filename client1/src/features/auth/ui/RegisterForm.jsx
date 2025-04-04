import React from 'react'
import Input from '../../../shared/ui/Input/Input'
import Button from '../../../shared/ui/Button/Button'
import {handleRegisterSubmit} from '../../../services/authHandlers'
import '../styles/FormStyles.css'
import { useNavigate } from 'react-router-dom'

const RegisterForm = ({
    UserName, setName,
    Email, setEmail,
    Password, setPassword,
    togglePasswordVisibility,showPassword,
    onBackToLogin
}) => {

  const navigate = useNavigate()

  const onSubmit =(e) =>{
    handleRegisterSubmit(e, UserName, Email, Password, setName, setEmail, setPassword, navigate);
  }
  
  return (
    <form className='forms' onSubmit={onSubmit}>
      <h1>Зарегистрироваться<br/><hr/></h1>
        <Input 
                type='text' 
                name='username' 
                label={'Имя пользователя'} 
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
                label={'Пароль'}
                required={true}
                showToggleButton 
                togglePasswordVisibility={togglePasswordVisibility}
                isPasswordVisible={showPassword}
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit"  text={'Зарегистрироваться'}
             style={{ backgroundColor: '#EE5300', 
            color: 'black', border: '2px solid #EE5300', fontWeight:'bold',  width:'100%'}} />
         
             <p title='Вернуться для входа в систему, если есть аккаунт' style={{ cursor: 'pointer', fontWeight:'bold' }} onClick={onBackToLogin}>
             Уже есть аккаунт? <span style={{ color:'#EE5300'}}>Вход</span></p>
    </form>
  )
}

export default RegisterForm