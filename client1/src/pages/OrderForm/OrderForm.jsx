import React from 'react';
import { useState } from 'react';
import './OrderForm.css'
import Input from '../../shared/ui/Input/Input'
// import serviceDetails from '../CreatingTask/model/serviceDetails'
import Button from '../../shared/ui/Button/Button'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const OrderForm = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

  return (
    <div className='order_form_component'>
        <div className="forms_for_tasks">
          
                <Input
                    type='text'
                    className='input-field'
                    name='Название задания'
                    label={'Категория/название задания '}
                    required
                />
                <Input
                    type='text'
                    className='input-field'
                    name='Название задания'
                    label={'Подкатегория'}
                    required
                />
          
            <div className="description-field">
                <textarea
                    name="taskDescription"
                    className="textarea-field"
                    placeholder="Опишите детали вашего задания..."
                    required
                />
            </div>

            <Input
                 type='text'
                 className='inputInt-field'
                 name='Название задания'
                 label={'Адрес'}
                 required
            />

            <div className="date_fields">
                <div className="date_field">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="input-field"
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Дата начала "
                        required
                    />
                </div>

                <div className="date_field">
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        className="input-field"
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Дата окончания"
                        required
                        
                    />
                </div>
            </div>

            <Button
                text='Оформить задание'
                style={{ backgroundColor: '#EE5300', color: 'black', border: '2px solid #EE5300',width:'100%',height:'6vh',fontWeight:'bold' }} 
            />

        </div>
    </div>
  )
}

export default OrderForm