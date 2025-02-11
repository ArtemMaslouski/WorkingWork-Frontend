import { validateEmail, validatePassword } from './validation'
import userApi from '../../../api/userApi'
import { toast } from 'react-toastify'

  export const handleRegisterSubmit = async (e, UserName, Email, Password, setName, setEmail, setPassword) => {
    e.preventDefault();
    if (!validateEmail(Email)) {
      toast.error('Введите корректный адрес электронной почты')
      return; 
    }

    if (!validatePassword(Password)) {
      toast.error('Пароль должен содержать заглавные буквы, строчные буквы, цифры и специальные символы')
      return; 
    }
    try {
      
      const response = await userApi.registerUser({ UserName, Email, Password });
      console.log(response);
      setName('')
      setPassword('')
      setEmail('')
      toast.success('Регистрация прошла успешно!')

    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      setName('')
      setPassword('')
      setEmail('')
      toast.error('Пользователь с таким email существует')
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

  export const handleSendVerificationEmail = async(e,Email,setEmail)=>{
    e.preventDefault();
      try{
        const response = await userApi.sendVerificationEmail(Email);
        console.log(response)
        setEmail('')
        toast.success(`Вы успешно отправили код на почту`)
        return true;
      }catch{
        console.log('error')
        toast.error('Ошибка отправки')
        setEmail('')
      }
      return false;
  }