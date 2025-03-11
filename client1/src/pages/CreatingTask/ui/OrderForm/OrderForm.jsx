import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './OrderForm.css';
import Input from '../../../../shared/ui/Input/Input';
import Button from '../../../../shared/ui/Button/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import serviceDetails from '../../model/serviceDetails';
import SelectInput from '../../../../shared/ui/SelectInput/SelectInput';
import { handleCreateTask } from '../../model/tasksHandlers';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const OrderForm = () => {

    const navigate = useNavigate()
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const selectedService = queryParams.get('service');
    const selectedSubcategory = queryParams.get('subcategory') || ''; 


    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    
    const [category, setCategory] = useState(selectedService || ''); 
    const [subcategory, setSubcategory] = useState(selectedSubcategory || '');

    const [address, setAddress] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [description, setDescription] = useState('');


    useEffect(() => {
        setCategories(Object.keys(serviceDetails));
        if (selectedService) {
            setSubcategories(serviceDetails[selectedService]?.links || []);
        }
        if (selectedSubcategory) {
            setSubcategory(selectedSubcategory); 
        }
    }, [selectedService, selectedSubcategory]);
    

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        setSubcategories(serviceDetails[selectedCategory]?.links || []);
        setSubcategory(''); 
    };

    const onSubmitCreateTasks = async(e) =>{
        const token = Cookies.get('token');
        if (!token) {
            toast.error('Пожалуйста, войдите в систему, чтобы оформить задание.');
            // return; 
            setTimeout(()=>{
                navigate('/SignIn')
            }, 2000)
           return
        }
        // else{
            await handleCreateTask(e,category, subcategory,address,startDate,endDate, description)
        // }
       
    }

    return (
        <div className='order_form_component'>
            <div className="forms_for_tasks">
            <SelectInput
                    id="category"
                    label="Категория"
                    value={category}
                    options={categories.map(cat => ({ value: cat, label: cat }))}
                    onChange={handleCategoryChange}
                    required
                />

                <SelectInput
                    id="subcategory"
                    label="Подкатегория"
                    value={subcategory}
                    options={subcategories.map(sub => ({ value: sub.name, label: sub.name }))}
                    onChange={(e) => setSubcategory(e.target.value)}
                    required
                />

                <Input
                    type='text'
                    className='inputInt-field'
                    name='address'
                    label={'Адрес'}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <div className="date_fields">
                    <div className="date_field">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="input-field"
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Дата начала"
                        />
                    </div>

                    <div className="date_field">
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            className="input-field"
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Дата окончания"
                        />
                    </div>
                </div>

                <div className="description-field">
                    <textarea
                        name="taskDescription"
                        className="textarea-field"
                        placeholder="Опишите детали вашего задания..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <Button
                onClick={onSubmitCreateTasks}
                    text='Оформить задание'
                    style={{ backgroundColor: '#EE5300', color: 'black', border: '2px solid #EE5300', width: '100%', height: '6vh', fontWeight: 'bold' }}
                />
            </div>
        </div>
    );
}

export default OrderForm;