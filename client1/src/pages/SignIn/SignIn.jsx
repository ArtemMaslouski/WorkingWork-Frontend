import {React, useState} from 'react'
import './SignIn.css'

// import LoginForm from '../../features/auth/ui/LoginForm'
import { LoginForm, RegisterForm, ForgotPasswordForm } from '../../features/auth/index.js'


const SignIn = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
};

  return (
    <div className='signIn_registration_component'>
        <div className="forms">
          <div className="element_forms">
            <LoginForm
             email={email} 
             setEmail={setEmail}
             password={password}
             setPassword={setPassword}
             togglePasswordVisibility={togglePasswordVisibility}
             showPassword={showPassword}
          />
          {/* <RegisterForm/> */}
          {/* <ForgotPassword/> */}
          </div>
          
        </div>
    </div>
  )
}

export default SignIn