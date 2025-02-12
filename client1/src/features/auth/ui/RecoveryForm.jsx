import React from 'react';
import '../styles/FormStyles.css'
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import {handleResetPassword } from '../model/eventHandler'
import { toast } from 'react-toastify';
import { useState, useEffect } from "react";

const RecoveryForm = () => {
    
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
    
    return (
        <form className="forms" onSubmit={onSubmitResetPassword}>
            <h1>Восстановление аккаунта<br /><hr /></h1>
            <Input
                type="text"
                name="Email"
                label="Email"
                required
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                type={showPassword ? 'text' : 'password'}
                name="Password"
                label="Пароль"
                required
                showToggleButton
                togglePasswordVisibility={() => setShowPassword(!showPassword)}
                isPasswordVisible={showPassword}
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                label="Повторите пароль"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                showToggleButton
                togglePasswordVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
                isPasswordVisible={showConfirmPassword}
            />
            <Button type="submit" text={'Войти'}
                style={{width: buttonWidth, backgroundColor: '#EE5300',
                color: 'black', border: '2px solid #EE5300', fontWeight:'bold'}} 
            />

            <p title="Вернуться для входа в систему" style={{ cursor: 'pointer', 
              fontWeight: 'bold' }} onClick={handleBackToLogin}>Вернуться на страницу
              <span style={{ color: '#EE5300' }}> Вход</span>
            </p>
        </form>
    );
};

export default RecoveryForm;
