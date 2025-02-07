import { React, useState } from 'react';
import './SignIn.css';
import { LoginForm, RegisterForm, ForgotPasswordForm } from '../../features/auth/index.js';
// import RecoveryForm from '../../features/auth/ui/RecoveryForm.jsx';

const SignIn = () => {
    const [currentForm, setCurrentForm] = useState('login');
    const [UserName, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const handleBackToLogin = () => {
        setCurrentForm('login');
    };

    return (
        <div className='signIn_registration_component'>
            <div className="forms_comp">
                <div className="element_forms">
                    {currentForm === 'login' && (
                        <LoginForm
                            Email={Email}
                            setEmail={setEmail}
                            Password={Password}
                            UserName={UserName}
                            setName={setName}
                            setPassword={setPassword}
                            togglePasswordVisibility={togglePasswordVisibility}
                            showPassword={showPassword}
                            onSwitchToRegister={() => setCurrentForm('register')}
                            onSwitchToForgotPassword={() => setCurrentForm('ForgotPasswordForm')}
                        />
                    )}
                    {currentForm === 'register' && (
                        <RegisterForm
                            UserName={UserName}
                            setName={setName}
                            Email={Email}
                            setEmail={setEmail}
                            Password={Password}
                            setPassword={setPassword}
                            togglePasswordVisibility={togglePasswordVisibility}
                            showPassword={showPassword}
                            onBackToLogin={handleBackToLogin}
                        />
                    )}
                    {currentForm === 'ForgotPasswordForm' && (
                        <ForgotPasswordForm
                            Email={Email}
                            setEmail={setEmail}
                            onBackToLogin={handleBackToLogin}
                        />
                       
                    )}
                </div>
               {/* <RecoveryForm
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            username={name}
                            setUsername={setName}
                            togglePasswordVisibility={togglePasswordVisibility}
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                            onBackToLogin={handleBackToLogin}
                        /> */}
            </div>
        </div>
    );
};

export default SignIn;