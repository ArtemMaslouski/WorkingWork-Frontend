import React from 'react';
import '../styles/FormStyles.css'
import Input from '../../../shared/ui/Input/Input';
import Button from '../../../shared/ui/Button/Button';
import { useRecoveryForm } from '../lib/hooks/useRecoveryForm';
import { useTranslation } from 'react-i18next';


const RecoveryForm = () => {
    const {t} = useTranslation();
  const{
    confirmPassword,setConfirmPassword,
    showConfirmPassword,setShowConfirmPassword,
    Email, setEmail,
    Password, setPassword,
    showPassword, setShowPassword,
    
    handleBackToLogin,
    onSubmitResetPassword
  } = useRecoveryForm ()
   
    
    return (
        <div className='signIn_registration_component'>
            <div className="element_forms">
                <form className="forms" onSubmit={onSubmitResetPassword}>
                    <h1>{t('AccountRecovery')}<br /><hr /></h1>
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
                        label={t('password')}
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
                        label={t('RepeatPassword')}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        showToggleButton
                        togglePasswordVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
                        isPasswordVisible={showConfirmPassword}
                    />
                    <Button type="submit" text={t('confirm')}
                        style={{backgroundColor: '#998756',
                        color: 'black', border: '2px solid #998756', fontWeight:'bold', width:'100%', height:'5vh'}} 
                    />

                    <p title="Вернуться для входа в систему" style={{ cursor: 'pointer', 
                    fontWeight: 'bold' }} onClick={handleBackToLogin}>{t('returnToPage')}
                    <span style={{ color: '#998756' }}>{t('login')}</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RecoveryForm;
