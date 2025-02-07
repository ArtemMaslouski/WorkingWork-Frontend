import React, { useState } from 'react';
import Input from '../../../components/Input/Input';
import { CiLock } from "react-icons/ci";
import Button from '../../../components/Button/Button';
import { handleSubmit } from '../model/eventHandler';

const ForgotPasswordForm = ({ Email, setEmail, onBackToLogin }) => {
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [code, setCode] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault(); 
    if (handleSubmit(e, Email, setShowCodeInput)) {
      setShowCodeInput(true);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='Lock_icon'><CiLock size={50} /></div>
        <h1>Не удается войти?<br/><hr/></h1>
        <span>Введите свой email, и мы отправим вам код для восстановления доступа</span>
        
        <Input
          type='email'
          name='email'
          label='Email'
          value={Email} 
          onChange={(e) => setEmail(e.target.value)} 
          required={true}
        />
         {/* Если email валиден, появляется поле для кода */}
        {showCodeInput && (
            <Input
              type='text'
              name='code'
              label='Введите код'
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required={true}
              
            />
          )} 
        <Button 
          text='Отправить' 
          style={{ backgroundColor: '#EE5300', color: 'black', border: '2px solid #EE5300', fontWeight:'bold' }} 
        />

        <p title='Вернуться к входу' 
          style={{ cursor: 'pointer', color: '#EE5300', fontWeight:'bold' }} 
          onClick={onBackToLogin}> Вернуться к входу</p>
    </form>
  );
};

export default ForgotPasswordForm;
