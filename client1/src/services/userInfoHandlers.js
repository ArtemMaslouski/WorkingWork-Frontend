import { toast } from "react-toastify";
import UserInfoApi from '../api/UserInfoApi'
import Cookies from 'js-cookie';


export const handleChangePassword = async (OldPassword, Password, NewPassword, setPassword, setNewPassword, setConfirmPassword) => {
    try {
      if (Password !== NewPassword) {
        toast.error('Новый пароль и подтверждение не совпадают');
        return;
      }
  
      const response = await UserInfoApi.changePassword({
        OldPassword,
        Password,
        NewPassword, 
      });
      if(response){
        toast.success('Пароль успешно изменён!');
        setPassword('');
        setNewPassword('');
        setConfirmPassword('')
      }
      else{
         
      toast.error('Ошибка при изменении пароля. Проверьте введенные данные');
      }
      
    //   toast.success('Пароль успешно изменён!');
    //   return response;
    } catch (error) {
      const errorMessage = error.response?.data?.message 
        || 'Ошибка при изменении пароля';
      toast.error(errorMessage);
    //   return;
      console.error('Full error:', error);
      throw error;
    }
  };

export const handleGetUserInfo = async () => {
    try {
        const response = await UserInfoApi.getUserInfo();
        return response; 
    } catch (error) {
        console.error(error);
        toast.error('Ошибка при получении информации о пользователе.');
        return null; 
    }
};
export const handleAddPhone = async (PhoneNumber, setPhoneNumber) => {
    try {
        const access_token = Cookies.get('access_token');
        if (!access_token) {
            toast.error('Ошибка авторизации! Войдите в аккаунт.');
            return;
        }

        if (!PhoneNumber.trim()) {
            return;
        }

        if (!/^\+?[0-9]{10,15}$/.test(PhoneNumber)) {
            toast.error('Некорректный формат номера телефона!');
            return;
        }

        const response = await UserInfoApi.addMobilePhone({ PhoneNumber });

        if (!response) {
            throw new Error('Ошибка добавления номера телефона');
        }

        console.log(response);
        setPhoneNumber('');
        toast.success('Номер телефона успешно добавлен!');
    } catch (error) {
        console.error('Ошибка:', error);
        toast.error('Не удалось добавить номер телефона');
    }
};


export const handleAddUserInfo = async (Name, Surname, BirthdayDate, Sex, City, Email,
    setName, setSurname, setBirthdayDate, setSex, setCity, setEmail
) => {
    try {
        const response = await UserInfoApi.addUserInfo({Name, Surname, BirthdayDate, Sex, City, Email});
        console.log(response)
        
        setName('');
        setSurname('');
        setBirthdayDate('');
        setSex('');
        setCity('');
        setEmail('');
        // toast.success('Информация обновлена')
        return response;
    } catch (error) {
        toast.error('Произошла ошибка при сохранении данных.');
        console.error('Ошибка:', error);
        return null;
    }
};



export const handleUploadFilePhoto = async (file) => {
    if (!file) {
        toast.info('Пожалуйста, выберите файл для загрузки.');
        return null;
    }

    try {
        const response = await UserInfoApi.uploadFilePhoto(file); 

        if (response) {
            toast.success('Файл успешно загружен!');
            return response; 
        } else {
            toast.error('Не удалось загрузить файл.');
            return null; 
        }
    } catch (error) {
        console.error('Ошибка при загрузке файла:', error);
        toast.error('Произошла ошибка при загрузке файла.');
        return null;
    }
};

export const handleAddDescription = async (description) => {
    try {
      const response = await UserInfoApi.addDescription({ Description: description });
      if (response) {
        toast.success('Описание успешно добавлено!');
        return response;
      } else {
        toast.error('Ошибка при добавлении описания.');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Ошибка при добавлении описания';
      toast.error(errorMessage);
      console.error('Ошибка:', error);
    }
  };