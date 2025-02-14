import { useNavigate } from 'react-router-dom';
import {handleResetPassword } from '../../model/authHandlers'
import { toast } from 'react-toastify';
import { useState, useEffect } from "react";


export const useRecoveryForm = () => {
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate('')
    const [buttonWidth, setButtonWidth] = useState("32%");/*размер кнопки*/

    useEffect(() => {
        const handleResize = () => {
          setButtonWidth(window.innerWidth <= 768 ? "70%" : "32%");
        };
        window.addEventListener("resize", handleResize);
        handleResize(); 
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    const handleBackToLogin = () => {
      navigate('/SignIn'); 
    };

    const onSubmitResetPassword = async (e) => {
      e.preventDefault();
       if(Password !== confirmPassword){
        toast.error('Пароли не совпадают. Проверьте введенные данные!');
        setPassword('')
        setConfirmPassword('')
        return;
       }
       const result = await handleResetPassword(e, Email, setEmail, Password, setPassword, navigate);
        if (result && !result.success) {
            toast.error(result.message || 'Ошибка при сбросе пароля, попробуйте еще раз.');
        }
    }

    return {
        confirmPassword, setConfirmPassword,
        showConfirmPassword, setShowConfirmPassword,
        Email, setEmail,
        Password, setPassword,
        showPassword, setShowPassword,
        buttonWidth,
        handleBackToLogin,
        onSubmitResetPassword
    };
}