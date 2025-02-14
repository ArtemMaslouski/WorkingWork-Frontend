import { handleSendVerificationEmail, handleVerificateUserWithCodeFromEmail } from '../../model/authHandlers';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useForgotPassword = (Email, setEmail) =>{
    
    const [showCodeInput, setShowCodeInput] = useState(false);
    const [Code, setCode] = useState('');
    const [isCodeSent, setIsCodeSent] = useState(false);
    const navigate = useNavigate();

    const onSendEmail = async (e) => {
        const success = await handleSendVerificationEmail(e, Email, setEmail);
        if (success) {
          setShowCodeInput(true);
          setIsCodeSent(true);
          console.log("Код отправлен на email.");
        } else {
          console.log("Не удалось отправить код на email.");
        }
      };
    
      // Проверка кода из email
      const onVerifyCode = async (e) => {
        e.preventDefault();
        await handleVerificateUserWithCodeFromEmail(Code, setCode, Email, setEmail, navigate);
      };
      
      return {
        showCodeInput,
        Code,
        isCodeSent,
        setCode,
        onSendEmail,
        onVerifyCode,
    };
}