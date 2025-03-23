import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrderForm.css';
import Input from '../../../../shared/ui/Input/Input';
import Button from '../../../../shared/ui/Button/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SelectInput from '../../../../shared/ui/SelectInput/SelectInput';
import { handleCreateTask } from '../../../../services/tasksHandlers';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useOrderForm from '../../lib/hooks/useOrderForm';

const OrderForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const selectedService = queryParams.get('service');
    const selectedSubcategory = queryParams.get('subcategory') || '';

    const {
        categories,
        subcategories,
        category,
        subcategory,
        addressFrom,
        addressTo,
        startDate,
        endDate,
        description,
        setCategory,
        setSubcategory,
        setAddressFrom,
        setAddressTo,
        setStartDate,
        setEndDate,
        setDescription,
        handleCategoryChange
    } = useOrderForm(selectedService, selectedSubcategory);
    
    const onSubmitCreateTasks = async (e) => {
        e.preventDefault(); 
        const token = Cookies.get('token');
        if (!token) {
            toast.error('Пожалуйста, войдите в систему, чтобы оформить задание.');
            setTimeout(() => {
                navigate('/SignIn');
            }, 2000);
            return;
        }

        await handleCreateTask(e, category, subcategory,addressFrom, addressTo, startDate, endDate, description,
            setSubcategory, setCategory, setAddressFrom, setAddressTo, setStartDate, setEndDate, setDescription
        );
    };

    return (
        <div className='order_form_component'>
            <div className="forms_for_tasks">
            <span style={{ color: '#EE5300' , fontSize:'1.2rem'}}>Создавайте и описывайте задания,<br/> оформляйте и ждите ответ!</span>
            
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

                {category === 'Курьерские услуги' ? (
                    <>
                        <Input
                            type='text'
                            className='inputInt-field'
                            name='addressFrom'
                            label={'Адрес (откуда)'}
                            required
                            value={addressFrom}
                            onChange={(e) => setAddressFrom(e.target.value)}
                        />
                        <Input
                            type='text'
                            className='inputInt-field'
                            name='addressTo'
                            label={'Адрес (куда)'}
                            required
                            value={addressTo}
                            onChange={(e) => setAddressTo(e.target.value)}
                        />
                    </>
                ) : (
                    <Input
                        type='text'
                        className='inputInt-field'
                        name='addressFrom'
                        label={'Адрес (куда)'}
                        required
                        value={addressFrom}
                        onChange={(e) => setAddressFrom(e.target.value)}
                    />
                )}

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
                        placeholder="Опишите детали задания..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required

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
};

export default OrderForm;
