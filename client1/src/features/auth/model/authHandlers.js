import { validateEmail, validatePassword } from '../lib/validation'
import userApi from '../../../api/userApi'
import { toast } from 'react-toastify'

  export const handleRegisterSubmit = async (e, UserName, Email, Password, setName, setEmail, setPassword) => {
    e.preventDefault();

    if (!validateEmail(Email)) {
        toast.error('Введите корректный адрес электронной почты');
        return;
    }

    if (!validatePassword(Password)) {
        toast.error('Пароль должен содержать заглавные буквы, строчные буквы, цифры и специальные символы');
        return;
    }
    try {
        const response = await userApi.registerUser({ UserName, Email, Password });
        console.log(response);
        
        setName('');
        setPassword('');
        setEmail(''); 
        toast.success('Регистрация прошла успешно!');
    } catch (error) {
        console.error('Ошибка при регистрации:', error);
        
        setName('');
        setPassword('');
        setEmail('');
        if (error.response && error.response.data && error.response.data.message.includes("email")) {
            toast.error('Пользователь с таким email уже зарегистрирован');
        } else {
            toast.error('Ошибка регистрации, попробуйте снова');
        }
    }
  };

  export const handleLoginSubmit = async(e, Email, setEmail, Password, setPassword) =>{
    e.preventDefault();
      try{
        const response = await userApi.login({Email, Password});
        console.log(response)
        toast.success(`Вы успешно вошли в аккаунт`)
        setEmail('')
        setPassword('')
      
      }catch{
        console.log('error')
        toast.error('Ошибка входа')
        setEmail('')
        setPassword('')
      }
  }

  export const handleSendVerificationEmail = async (e, Email, setEmail) => {
    e.preventDefault();
    try {
      const response = await userApi.sendVerificationEmail(Email);
      console.log(response);
      
      toast.success('Код успешно отправлен на email');
      return true;
    } catch (error) {
      console.error("Ошибка отправки кода:", error);
      toast.error('Ошибка отправки');
      return false;
    }
  };

  export const handleVerificateUserWithCodeFromEmail = async (Code, setCode, Email, setEmail, navigate ) => {
    try {
      const isVerified = await userApi.verificateUserWithCodeFromEmail(Code, Email);
      console.log("Ответ сервера (проверка кода):", isVerified);
  
      if (isVerified) {
        // setEmail('');
        setCode('');
        toast.success('Код успешно подтвержден!');
        navigate('/RecoveryForm');
      } else {
        throw new Error("Неверный код");
      }
    } catch (error) {
      console.error("Ошибка верификации кода:", error);
      toast.error('Ошибка подтверждения кода');
      setCode('');
    }
  };
  
  export const handleResetPassword = async (e, Email,setEmail, Password, setPassword, navigate) => {
    e.preventDefault();
    if (!validateEmail(Email)) {
      toast.error('Введите корректный адрес электронной почты')
      return; 
    }

    if (!validatePassword(Password)) {
      toast.error('Пароль должен содержать заглавные буквы, строчные буквы, цифры и специальные символы')
      return; 
    }

    try{
      const response = await userApi.resetPassword(Email, Password);
      console.log(response);
      toast.success('Восстановление прошло успешно!')
      navigate('/SignIn');
      return { success: true };

    }catch(error){
      toast.error('Ошибка изменения пароля, проверьте введенные данные!')
      setEmail('')
      setPassword('')
      return { success: false, message: error.message };
    }
  }