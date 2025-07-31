import { React, useState } from 'react';
import './SignIn.css';
import {
  LoginForm,
  RegisterForm,
  ForgotPasswordForm,
} from '../../features/auth/index.js';
import { handleLoginSubmit } from '../../services/authHandlers.js';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

const SignIn = () => {
  const [currentForm, setCurrentForm] = useState('login');
  const [UserName, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleBackToLogin = () => {
    setCurrentForm('login');
  };

  const navigate = useNavigate();
  const { login } = useAuth();

  const onLoginSubmit = async (e) => {
    await handleLoginSubmit(
      e,
      Email,
      setEmail,
      Password,
      setPassword,
      navigate,
      login
    );
  };

  return (
    <div className='signIn_registration_component'>
      <div className='forms_comp'>
        <div className='element_forms'>
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
              login={login}
              onSwitchToRegister={() => setCurrentForm('register')}
              onSwitchToForgotPassword={() =>
                setCurrentForm('ForgotPasswordForm')
              }
              onSubmit={onLoginSubmit}
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
              setCurrentForm={setCurrentForm}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
