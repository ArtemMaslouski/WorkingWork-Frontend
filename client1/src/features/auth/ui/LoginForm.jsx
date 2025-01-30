import React from 'react'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import './LoginForm.css'

const LoginForm = ({ email, setEmail, password, setPassword, togglePasswordVisibility, showPassword, onSubmit }) => {
  return (
    <form>
        <h1>Вход и регистрация<br/><hr/></h1>
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
            {/* <Button type="submit" text={'Войти'} 
            style={{ backgroundColor: '#EE5300', 
            color: 'black', border: '2px solid #EE5300'}} 
            /> */}
    </form>
  )
}

export default LoginForm