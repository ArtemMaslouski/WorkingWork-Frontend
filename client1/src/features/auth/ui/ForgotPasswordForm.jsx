import React from 'react'
import Input from '../../../components/Input/Input'
import { CiLock } from "react-icons/ci";
import Button from '../../../components/Button/Button';

const ForgotPasswordForm = ({email, setEmail,onBackToLogin }) => {
  return (
    <form>
      <div className='Lock_icon'><CiLock size={50} /></div>
      <h1>Не удается войти?<br/><hr/></h1>
      <span>Введите свой электронный адрес и мы отправим вам ссылку для восстановления доступа к аккаунту</span>
        <Input
        type='email'
        name='email'
        label={'Email'}
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required={true}
        />
        <Button type='submit' text={'Отправить'}
        style={{ backgroundColor: '#EE5300', 
          color: 'black', border: '2px solid #EE5300', fontWeight:'bold'}} 
        />

      <p style={{ cursor: 'pointer', color: '#EE5300', fontWeight:'bold' }} onClick={onBackToLogin}>
        Вернуться к входу
      </p>
    </form>
  )
}

export default ForgotPasswordForm

// #EE5300