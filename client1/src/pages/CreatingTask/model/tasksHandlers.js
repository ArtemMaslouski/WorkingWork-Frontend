import { toast } from 'react-toastify'
import TaskApi from '../../../api/TaskApi'

export const handleCreateTask = async(e,Category, Subcategory,Address,BeginAt,EndAt, Description )=>{
    e.preventDefault();
    if(!Address){
        toast.info('Укажите адресс выполнения заказа');
        return;
    }
    if(BeginAt > EndAt){
        toast.info('Укажите верную дат удля выполнения задания');
        return;
    }
    try{
        const response = await TaskApi.createTask({Category, Subcategory,Address,BeginAt,EndAt, Description})
        console.log(response)
        toast.success(`Вы успешно создали задание!Ждите откликов `)
    }
    catch(error){
        console.log(error)
        toast.error('Ошибка создания, проверьте вводимые данные')
    }
}

export const handleRefreshTasks = async(e,Category, Subcategory,Address,BeginAt,EndAt, Description)=>{
    e.preventDefault();
    try{
        const response = await TaskApi.refreshTasks({Category, Subcategory,Address,BeginAt,EndAt, Description})
        console.log(response)
        toast.success('Задание успешно обновлено!');
    } catch (error) {
        console.error(error);
        toast.error('Ошибка при обновлении задания, проверьте вводимые данные');
    }
    
}