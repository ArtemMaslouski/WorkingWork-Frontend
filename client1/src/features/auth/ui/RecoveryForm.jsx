import React,{useState} from 'react'
import './FormStyles.css'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'

const RecoveryForm = ( {
  Email, setEmail,
  Password, setPassword, 
  togglePasswordVisibility,showPassword, setShowPassword, onBackToLogin}) => {

    const [confirmPassword,setConfirmPassword] = useState('')
    // const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] =useState(false)
  return (
    <form className='forms'>
        <h1>Восстановление аккаунта<br/><hr/></h1>
        <Input
          type='text' 
          name='username' 
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
          togglePasswordVisibility={() => setShowPassword(!showPassword)}
          isPasswordVisible={showPassword}
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input 
          type={showConfirmPassword ? 'text' : 'password'} 
          name='confirmPassword' 
          label={'Повторите пароль'}
          required={true}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          showToggleButton 
          togglePasswordVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
          isPasswordVisible={showConfirmPassword}
        />
        <Button type="submit"
          text={'Подтвердить'}
          style={{ backgroundColor: '#EE5300', 
          color: 'black', border: '2px solid #EE5300', fontWeight:'bold'}} 
        />
        <p title='Вернуться для входа в систему, если есть аккаунт' style={{ cursor: 'pointer', fontWeight:'bold' }} onClick={onBackToLogin}>
        Вернуться на страницу<span style={{ color:'#EE5300'}}> Вход</span></p>
    </form>
  )
}

export default RecoveryForm