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
        isLoading,
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
        const access_token = Cookies.get('access_token');
        if (!access_token) {
            toast.error('Пожалуйста, войдите в систему, чтобы оформить задание.');
            setTimeout(() => {
                navigate('/SignIn');
            }, 2000);
            return;
        }
    
        // ✅ Преобразование дат в ISO-строку
        const formattedStartDate = startDate ? new Date(startDate).toISOString() : null;
        const formattedEndDate = endDate ? new Date(endDate).toISOString() : null;
    
        await handleCreateTask(
            e,
            category,
            subcategory,
            addressFrom,
            addressTo,
            formattedStartDate,
            formattedEndDate,
            description,
            setSubcategory,
            setCategory,
            setAddressFrom,
            setAddressTo,
            setStartDate,
            setEndDate,
            setDescription
        );
    };
    

    return (
        <div className='order_form_component'>
            <div className="forms_for_tasks">
                <span style={{ color: '#998756' , fontSize:'1.3rem'}}><p>Создавайте и описывайте задания,<br/> оформляйте и ждите ответ!</p></span>
                
                {isLoading ? (
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        height: '100px',
                        fontSize: '24px',
                        letterSpacing: '10px',
                        color: '#998756'
                    }}>
                        W W
                    </div>
                ) : (
                    <>
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
                                    onChange={(date) => {
                                        if (date) {
                                            date.setHours(12, 0, 0, 0);
                                        }
                                        setStartDate(date);
                                    }}
                                    className="input-field"
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="Дата начала"
                                    minDate={new Date()}
                                />
                            </div>

                            <div className="date_field">
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => {
                                        if (date) {
                                            date.setHours(12, 0, 0, 0);
                                        }
                                        setEndDate(date);
                                    }}
                                    className="input-field"
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="Дата окончания"
                                    minDate={startDate || new Date()}
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
                            style={{ backgroundColor: 'rgba(215, 201, 164)', 
                                color: 'black', border: '2px solid #998756', fontWeight:'bold', width:'100%'}} 
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default OrderForm;
