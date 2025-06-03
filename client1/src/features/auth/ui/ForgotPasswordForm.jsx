import React from 'react';
import Input from '../../../shared/ui/Input/Input';
import { CiLock } from "react-icons/ci";
import Button from '../../../shared/ui/Button/Button';
import '../styles/FormStyles.css'
import { useForgotPassword } from '../lib/hooks/useForgotPassword';
import { useTranslation } from 'react-i18next';

const ForgotPasswordForm = ({ Email, setEmail, onBackToLogin  }) => {
  const {
    showCodeInput,
    Code,
    isCodeSent,
    setCode,
    onSendEmail,
    onVerifyCode,
} = useForgotPassword(Email, setEmail);
  const {t} = useTranslation();

  return (
    <form className='forms' onSubmit={showCodeInput ? onVerifyCode : onSendEmail}>
      <div className='Lock_icon'><CiLock size={50} /></div>
      <h1>{t('HavingTrouble')}<br /><hr /></h1>
      <span>
        {!isCodeSent
          ? t('enterYourEmail')
          : t('enterTheCode')}
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
          label={t('enterTheCode')}
          value={Code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
      )}

      {/* Кнопка меняет текст в зависимости от этапа */}
      <Button
        text={showCodeInput ? t('confirm') : t('send')}
        style={{ backgroundColor: 'rgba(215, 201, 164)', color: 'black', border: '2px solid #7d6e46', fontWeight: 'bold',  width:'100%', height:'5vh'}}
      />

      <p
        title={t('returnToEntrance')}
        style={{ cursor: 'pointer', color: '#7d6e46', fontWeight: 'bold' }}
        onClick={onBackToLogin}
      >
        {t('returnToEntrance')}
      </p>
    </form>
  );
};

export default ForgotPasswordForm;
