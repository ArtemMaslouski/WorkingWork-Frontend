import React from 'react';
import Input from '../../../components/Input/Input';
import { CiLock } from "react-icons/ci";
import Button from '../../../components/Button/Button';
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
  // const [showCodeInput, setShowCodeInput] = useState(false);
  // const [Code, setCode] = useState('');
  // const [isCodeSent, setIsCodeSent] = useState(false);
  // const navigate = useNavigate();

  // const onSendEmail = async (e) => {
  //   const success = await handleSendVerificationEmail(e, Email, setEmail);
  //   if (success) {
  //     setShowCodeInput(true);
  //     setIsCodeSent(true);
  //     console.log("Код отправлен на email.");
  //   } else {
  //     console.log("Не удалось отправить код на email.");
  //   }
  // };

  // // Проверка кода из email
  // const onVerifyCode = async (e) => {
  //   e.preventDefault();
  //   await handleVerificateUserWithCodeFromEmail(Code, setCode, Email, setEmail, navigate);
  // };
  

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
