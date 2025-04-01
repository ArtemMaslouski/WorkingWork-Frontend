import React, { useState } from 'react';
import Input from '../../../shared/ui/Input/Input';
import DatePicker from 'react-datepicker';
import Button from '../../../shared/ui/Button/Button';
import { handleAddPhone, handleAddUserInfo } from '../../../services/userInfoHandlers'; 
import { toast } from "react-toastify";
import Cookies from 'js-cookie';

const PersonalData = () => {
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [BirthdayDate, setBirthdayDate] = useState(null);
  const [Sex, setSex] = useState('');
  const [City, setCity] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');

  const handleSave = async () => {
    const token = Cookies.get('access_token');
    if (!token) {
        toast.error('Ошибка авторизации! Войдите в аккаунт.');
        return;
    }

    try {
        await handleAddUserInfo(
            Name, 
            Surname, 
            BirthdayDate, 
            Sex, 
            City, 
            Email 
        );
    } catch (error) {
        console.error('Ошибка сохранения:', error);
    }
};
 
  
  const onSubmitAddPhoneNumber = async () => {
    if (!PhoneNumber.trim()) {
        toast.error('Введите номер телефона');
        return;
    }

    await handleAddPhone(PhoneNumber, setPhoneNumber);
};


  return (
    <div className='info_about_user'>
      <div className="info_user_item">
        <div className="action">
          <p>Заполните личные данные для своего портфолио</p>
          
          <Input
            type='text'
            className='inputInt-field'
            name='name'
            label={'Имя '}
            required
            value={Name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            type='text'
            className='inputInt-field'
            name='surname'
            label={'Фамилия'}
            required
            value={Surname}
            onChange={e => setSurname(e.target.value)}
          />
        
          <DatePicker
            className="input-b_day"
            dateFormat="dd/MM/yyyy"
            placeholderText="Дата Рождения"
            selected={BirthdayDate}
            onChange={date => setBirthdayDate(date)}
          />

          <div className="gender-selection">
            <p>Пол</p>
            <label><input type="radio" name="gender" value="male" onChange={() => setSex('мужской')} />мужской</label>
            <label><input type="radio" name="gender" value="female" onChange={() => setSex('женский')} />женский</label>
          </div>

          <Input
            type='text'
            className='inputInt-field'
            name='city'
            label={'Город'}
            required
            value={City}
            onChange={e => setCity(e.target.value)}
          />

          <Input
            type='email'
            className='inputInt-field'
            name='email'
            label={'Email'}
            required
            value={Email}
            onChange={e => setEmail(e.target.value)}
          />

        </div>

        <div className="save_cancellation_button">
          <Button
            text='Отмена' 
            style={{ backgroundColor: '#EE5300', fontWeight: 'light', color: 'black', border: '2px solid #EE5300', height: '4vh' }} 
          />
          <Button
            text='Сохранить данные'
            onClick={handleSave} 
            style={{ backgroundColor: 'white', fontWeight: 'light', color: 'black', border: '2px solid #EE5300', height: '4vh' }} 
          />
        </div>

        <div className="action_tel">
        <p>Заполните личные данные для своего портфолио</p>
          
          <Input
            type='tel'
            className='inputInt-field'
            name='number'
            label={'Номер телефона'}
            required
            value={PhoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <label>
            <input type="checkbox" name="agree" value="agree" />
            Показывать <b><i>номер телефона</i></b>, чтобы с вами могли связаться клиенты
          </label>
        </div>
        
        <div className="save_cancellation_button">
          <Button
            text='Отмена' 
            style={{ backgroundColor: '#EE5300', fontWeight: 'light', color: 'black', border: '2px solid #EE5300', height: '4vh' }} 
          />
          <Button
            text='Сохранить данные'
            onClick={onSubmitAddPhoneNumber}
            // onClick={handleSave} 
            style={{ backgroundColor: 'white', fontWeight: 'light', color: 'black', border: '2px solid #EE5300', height: '4vh' }} 
          />
        </div>

      </div>
    </div>
  );
};

export default PersonalData;