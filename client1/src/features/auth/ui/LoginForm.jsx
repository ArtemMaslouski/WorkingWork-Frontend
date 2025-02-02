import React from 'react'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import './LoginForm.css'
// import AuthPeople from '../model/api.js'

const LoginForm = ({ email, setEmail, password, setPassword, 
  togglePasswordVisibility, showPassword, onSubmit,onSwitchToRegister,onSwitchToForgotPassword }) => {
  return (
    <form className="forms" onSubmit={onSubmit}>
        <h1>Вход<br/><hr/></h1>
        <Input 
                type='email' 
                name='email' 
                label={'Email'}
                required={true} 
                value={email}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" text={'Войти'} 
            style={{ backgroundColor: '#EE5300', 
            color: 'black', border: '2px solid #EE5300', fontWeight:'bold'}} 
            />

          <p style={{ cursor: 'pointer', color: 'black', fontWeight:'bold' }} onClick={onSwitchToForgotPassword}>
            Забыли пароль?
          </p>

          <p style={{ cursor: 'pointer', color: 'black', fontWeight:'bold' }} onClick={onSwitchToRegister}>
          У вас ещё нет аккаунта? <span style={{ color:'#EE5300'}}>Зарегистрироваться</span> 
          </p>
    </form>
  )
}

export default LoginForm