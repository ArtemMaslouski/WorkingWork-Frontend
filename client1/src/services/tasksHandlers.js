import { toast } from 'react-toastify'
import TaskApi from '../api/TaskApi';

export const handleCreateTask = async(e,Category, Subcategory,Address,AddressEnd,BeginAt,EndAt, Description,
    setSubcategory, setCategory, setAddressFrom, setAddressTo, setStartDate, setEndDate, setDescription
 )=>{
    e.preventDefault();
    if(!Category ){
        toast.info('Укажите категорию задания');
        return;
    }
    if(!Subcategory ){
        toast.info('Укажите подкатегорию задания');
        return;
    }
    if(!Address){
        toast.info('Укажите адресс выполнения заказа');
        return;
    }
    if(BeginAt > EndAt){
        toast.info('Укажите верную дату удля выполнения задания');
        return;
    }

    
    try{
        const response = await TaskApi.createTask({Category, Subcategory,Address,AddressEnd,BeginAt,EndAt, Description})
        console.log(response)
        toast.success(`Вы успешно создали задание!Ждите откликов `)
        setCategory('');
        setSubcategory('');
        setAddressFrom('');
        setAddressTo('');
        setStartDate('');
        setEndDate('');
        setDescription('')

    }
    catch(error){
        console.log(error)
        toast.error('Ошибка создания, проверьте вводимые данные')
    }
}

export const handleRefreshTasks = async(e,Category, Subcategory,Address,AddressEnd,BeginAt,EndAt, Description)=>{
    e.preventDefault();
    try{
        const response = await TaskApi.refreshTasks({Category, Subcategory,Address,AddressEnd,BeginAt,EndAt, Description})
        console.log(response)
        toast.success('Задание успешно обновлено!');
    } catch (error) {
        console.error(error);
        toast.error('Ошибка при обновлении задания, проверьте вводимые данные');
    }
    
}

// export const handleGetAllUsers= async() => {
//     try{
//         const response = await TaskApi.getAllTasks();
//         console.log(response)
//     }catch(error){
//         console.log('Ошибка');
//     }
// }