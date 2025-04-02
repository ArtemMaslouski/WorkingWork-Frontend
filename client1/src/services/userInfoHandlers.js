import { toast } from "react-toastify";
import UserInfoApi from '../api/UserInfoApi'
import Cookies from 'js-cookie';


export const handleChangePassword = async (OldPassword, Password, NewPassword) => {
   
    if (Password !== NewPassword) {
        toast.info('Новый пароль и подтверждение пароля не совпадают.');
        return;
    }

    try {
        const response = await UserInfoApi.changePassword({ OldPassword, Password });
        console.log(response);
        
        toast.success('Пароль успешно изменён!');
    } catch (error) {
        console.error(error);
        toast.error('Ошибка при изменении пароля, проверьте введённые данные');
    }
};

export const handleGetUserInfo = async (userId) => {
    try {
        const response = await UserInfoApi.getUserInfo(userId);
        console.log(response);
        return response.data; 
    } catch (error) {
        console.error(error);
        toast.error('Ошибка при получении информации о пользователе.');
        return null; 
    }
};

// export const handleAddPhone = async (PhoneNumber, setPhoneNumber) => {
//     try {
//         const response = await UserInfoApi.addMobilePhone({ PhoneNumber });
//         if (!response) {
//             throw new Error('Ошибка добавления номера телефона');
//         }

//         console.log(response);
//         setPhoneNumber(''); 
//         toast.success('Номер телефона успешно добавлен!');
//     } catch (error) {
//         toast.error('Не удалось добавить номер телефона');
//     }
// };
export const handleAddPhone = async (PhoneNumber, setPhoneNumber) => {
    try {
        const token = Cookies.get('access_token');
        if (!token) {
            toast.error('Ошибка авторизации! Войдите в аккаунт.');
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
        // toast.success('Данные успешно сохранены!');
        
        setName('');
        setSurname('');
        setBirthdayDate('');
        setSex('');
        setCity('');
        setEmail('');
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