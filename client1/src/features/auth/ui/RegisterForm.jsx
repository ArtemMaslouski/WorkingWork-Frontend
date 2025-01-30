import React from 'react'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'


const RegisterForm = ({
    username, setUsername,
    email, setEmail,
    password, setPassword,
    togglePasswordVisibility,showPassword
}) => {
  return (
    <form>
        <Input 
                type='text' 
                name='username' 
                label={'Имя пользователя'} 
                required={true} 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input 
                type={showPassword ? 'text' : 'password'} 
                name='password' 
                label={'Пароль'}
                required={true}
                showToggleButton 
                togglePasswordVisibility={togglePasswordVisibility}
                isPasswordVisible={showPassword}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Input 
                type='text'
                name='email' 
                label={'Email'}
                required={true} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Button type="submit" text={'Зарегистрироваться'} />
    </form>
  )
}

export default RegisterForm