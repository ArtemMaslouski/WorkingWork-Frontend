import { React, useState } from 'react';
import './SignIn.css';
import { FaArrowLeftLong } from "react-icons/fa6";
import { LoginForm, RegisterForm, ForgotPasswordForm } from '../../features/auth/index.js';

const SignIn = () => {
    const [currentForm, setCurrentForm] = useState('login');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            togglePasswordVisibility={togglePasswordVisibility}
                            showPassword={showPassword}
                            onSwitchToRegister={() => setCurrentForm('register')}
                            onSwitchToForgotPassword={() => setCurrentForm('ForgotPasswordForm')}
                        />
                    )}
                    {currentForm === 'register' && (
                        <RegisterForm
                            username={name}
                            setUsername={setName}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            togglePasswordVisibility={togglePasswordVisibility}
                            showPassword={showPassword}
                            onBackToLogin={handleBackToLogin}
                        />
                    )}
                    {currentForm === 'ForgotPasswordForm' && (
                        <ForgotPasswordForm
                            email={email}
                            setEmail={setEmail}
                            onBackToLogin={handleBackToLogin}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignIn;