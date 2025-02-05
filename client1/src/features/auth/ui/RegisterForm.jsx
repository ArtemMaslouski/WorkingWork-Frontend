import React from 'react'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'

const RegisterForm = ({
    username, setUsername,
    email, setEmail,
    password, setPassword,
    togglePasswordVisibility,showPassword,
    onBackToLogin
}) => {

  return (
    <form className='forms'>
      <h1>Зарегистрироваться<br/><hr/></h1>
        <Input 
                type='text' 
                name='username' 
                label={'Имя пользователя'} 
                required={true} 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input 
                type='text'
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
                required={true}
                showToggleButton 
                togglePasswordVisibility={togglePasswordVisibility}
                isPasswordVisible={showPassword}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" text={'Зарегистрироваться'} 
             style={{ backgroundColor: '#EE5300', 
            color: 'black', border: '2px solid #EE5300', fontWeight:'bold'}} />
         
             <p title='Вернуться для входа в систему, если есть аккаунт' style={{ cursor: 'pointer', fontWeight:'bold' }} onClick={onBackToLogin}>
             Уже есть аккаунт? <span style={{ color:'#EE5300'}}>Вход</span> 
      </p>
    </form>
  )
}

export default RegisterForm