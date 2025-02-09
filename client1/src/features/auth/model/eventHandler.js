import { validateEmail, validatePassword } from './validation'
import userApi from '../../../api/userApi'
import { toast } from 'react-toastify'

  export const handleRegisterSubmit = async (e, UserName, Email, Password, setName, setEmail, setPassword) => {
    e.preventDefault();
    if (!validateEmail(Email)) {
      return; 
    }

    if (!validatePassword(Password)) {
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
      toast.error('Ошибка регистрации')
    }
  };

  export const handleLoginSubmit = async(e, Email, setEmail, Password, setPassword) =>{
    e.preventDefault();
      try{
        const response = await userApi.login({Email, Password});
        console.log(response)
        setEmail('')
        setPassword('')
        toast.success(`Вы успешно вошли в аккаунт`)
        
      }catch{
        console.log('error')
        toast.error('Ошибка входа')
        setEmail('')
        setPassword('')
      }
  }