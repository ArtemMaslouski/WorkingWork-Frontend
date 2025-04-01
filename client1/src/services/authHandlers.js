import { validateEmail, validatePassword } from '../features/auth/lib/validation'
import userApi from '../api/userApi'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

export const handleLoginSubmit = async (e, Email, setEmail, Password, setPassword, navigate) => {
  e.preventDefault();
  try {
      const response = await userApi.login({ Email, Password });
      console.log(response); // Выводим ответ от API

      // Сохранение токена
      if (response.access_token) {
          Cookies.set('access_token', response.access_token, { expires: 7 }); 
          
          const token = Cookies.get('access_token'); // Получаем токен из Cookies
          console.log('токе1223н', token); 
      } else {
          throw new Error('Токен не получен');
      }

      toast.success(`Вы успешно вошли в аккаунт`);
      setEmail('');
      setPassword('');
      navigate('/');
    
  } catch (error) {
      console.log(error);
      toast.error('Ошибка входа, проверьте вводимые данные');
  }
};

  export const handleLogout = (navigate) => {
    Swal.fire({
      title: 'Вы хотите выйти из системы?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Да, выйти!',
      cancelButtonText: 'Нет, остаться',
      position: 'top', 
      backdrop: true, 
      width:"330px"
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove('access_token');
        toast.success('Вы вышли из системы');
        
        setTimeout(() => {
          navigate('/SignIn');
        }, 1500);
      } else {
        toast.info("Вы остались в системе");
      }
    });  
  };

  export const handleRegisterSubmit = async (e, UserName, Email, Password, setName, setEmail, setPassword, navigate) => {
    e.preventDefault();

    if (!validateEmail(Email)) {
        toast.error('Неверный формат email.');
        return;
    }

    if (!validatePassword(Password)) {
        toast.error('Пароль не соответствует требованиям.');
        return;
    }

    try {
        const response = await userApi.registerUser({ UserName, Email, Password });
        console.log(response);

        localStorage.setItem('UserName', UserName);

        setName(''); 
        setPassword('');
        setEmail('');

        toast.success('Регистрация прошла успешно!');

    } catch (error) {
        console.error('Ошибка при регистрации:', error);

        if (error.response && error.response.data && error.response.data.message.includes("email")) {
            toast.error('Пользователь с таким email уже зарегистрирован');
        } else {
            toast.error('Ошибка регистрации, попробуйте снова');
        }

        setPassword('');
        setEmail('');
    }
};

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
      setEmail(''); setPassword('')
      return { success: false, message: error.message };
    }
  }

  export const handleDeleteUser = async () => {
    try {
       
        const response = await userApi.deleteUser(); 
        if (response.status === 200) {
            Cookies.remove('access_token'); // Удаляем куку
            localStorage.clear();
            window.location.href = '/login'; // Перенаправляем на вход
            toast.success('Профиль удалён!');
        }
    } catch (error) {
        console.error('Ошибка:', error.response?.data || error.message);
        // toast.error(error.response?.data?.message || 'Ошибка удаления профиля');
    }
};
