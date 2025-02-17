import React from 'react';
import Input from '../../../shared/ui/Input/Input';
import { CiLock } from "react-icons/ci";
import Button from '../../../shared/ui/Button/Button';
import '../styles/FormStyles.css'
import { useForgotPassword } from '../lib/hooks/useForgotPassword';

const ForgotPasswordForm = ({ Email, setEmail, onBackToLogin  }) => {
  const {
    showCodeInput,
    Code,
    isCodeSent,
    setCode,
    onSendEmail,
    onVerifyCode,
} = useForgotPassword(Email, setEmail);

  return (
    <form className='forms' onSubmit={showCodeInput ? onVerifyCode : onSendEmail}>
      <div className='Lock_icon'><CiLock size={50} /></div>
      <h1>Не удается войти?<br /><hr /></h1>
      <span>
        {!isCodeSent
          ? "Введите свой email, и мы отправим вам код для восстановления доступа"
          : "Введите код, отправленный на ваш email"}
      </span>

        <Input
          type='email'
          name='email'
          label='Email'
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      
      {/* Поле ввода кода, если email уже отправлен */}
      {showCodeInput && (
        <Input
          type='text'
          name='code'
          label='Введите код'
          value={Code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
      )}

      {/* Кнопка меняет текст в зависимости от этапа */}
      <Button
        text={showCodeInput ? 'Подтвердить код' : 'Отправить'}
        style={{ backgroundColor: '#EE5300', color: 'black', border: '2px solid #EE5300', fontWeight: 'bold' }}
      />

      <p
        title='Вернуться к входу'
        style={{ cursor: 'pointer', color: '#EE5300', fontWeight: 'bold' }}
        onClick={onBackToLogin}
      >
        Вернуться к входу
      </p>
    </form>
  );
};

export default ForgotPasswordForm;
