import React from 'react';
import '../styles/FormStyles.css'
import Input from '../../../shared/ui/Input/Input';
import Button from '../../../shared/ui/Button/Button';
import { useRecoveryForm } from '../lib/hooks/useRecoveryForm';

const RecoveryForm = () => {
    
  const{
    confirmPassword,setConfirmPassword,
    showConfirmPassword,setShowConfirmPassword,
    Email, setEmail,
    Password, setPassword,
    showPassword, setShowPassword,
    buttonWidth,
    handleBackToLogin,
    onSubmitResetPassword
  } = useRecoveryForm ()
   
    
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
                color: 'black', border: '2px solid #EE5300', fontWeight:'bold', width:'100%'}} 
            />

            <p title="Вернуться для входа в систему" style={{ cursor: 'pointer', 
              fontWeight: 'bold' }} onClick={handleBackToLogin}>Вернуться на страницу
              <span style={{ color: '#EE5300' }}> Вход</span>
            </p>
        </form>
    );
};

export default RecoveryForm;
