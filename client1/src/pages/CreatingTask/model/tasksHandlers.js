import { toast } from 'react-toastify'
// import Cookies from 'js-cookie';
import TaskApi from '../../../api/TaskApi'

export const createTask = async(e,Category, Subcategory,Address,BeginAt,EndAt, Description )=>{
    e.preventDefault();
    try{
        const response = await TaskApi.createTask({Category, Subcategory,Address,BeginAt,EndAt, Description})
        console.log(response)
        toast.success(`Вы успешно вошли в аккаунт`)
    }
    catch(error){
        console.log(error)
        toast.error('Ошибка входа, проверьте вводимые данные')
    }
}

export const refreshTasks = async(e,Category, Subcategory,Address,BeginAt,EndAt, Description)=>{
    e.preventDefault();
    try{
        const response = await TaskApi.refreshTasks({id,Category, Subcategory,Address,BeginAt,EndAt, Description})
        toast.success('Задание успешно обновлено!');
    } catch (error) {
        console.error(error);
        toast.error('Ошибка при обновлении задания, проверьте вводимые данные');
    }
    
}