import { toast } from "react-toastify";
import UserInfoApi from '../api/UserInfoApi'

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

export const handleAddPhone = async (PhoneNumber, setPhoneNumber) =>{
    try{
        const response = await UserInfoApi.addMobilePhone( PhoneNumber);
        return response.data; 
    }
    catch(error){
        toast.error('Данные о пользователе не добавлены');
        return null;
    }
}

export const handleAddUserInfo = async (Name, Surname, BirthdayDate, Sex, City, Email,
    setName, setSurname, setBirthdayDate, setSex, setCity, setEmail,
) =>{
    try{
        const response = await UserInfoApi.addUserInfo( Name, Surname, BirthdayDate, Sex, City, Email);
        return response.data; 
    }
    catch(error){
        toast.error('Данные о пользователе не добавлены');
        return null;
    }
}

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