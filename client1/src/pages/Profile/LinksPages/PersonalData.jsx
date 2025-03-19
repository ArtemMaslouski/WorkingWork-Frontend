import React from 'react'
import Input from '../../../shared/ui/Input/Input'
import DatePicker from 'react-datepicker';
// import '../../CreatingTask/ui/OrderForm/OrderForm.css'
import Button from '../../../shared/ui/Button/Button';

const PersonalData = () => {
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
          />
           <Input
            type='text'
            className='inputInt-field'
            name='firstName'
            label={'Фамилия'}
            required
          />
        
          <DatePicker
            className="input-b_day"
            dateFormat="dd/MM/yyyy"
            placeholderText="Дата Рождения"
          />

        <div className="gender-selection">
          <p>Пол</p>
          <label><input type="radio" name="gender" value="male" />мужчина</label>
          <label><input type="radio" name="gender" value="female" />женщина</label>
        </div>

        <Input
            type='text'
            className='inputInt-field'
            name='city'
            label={'Город'}
            required
          />

        <Input
            type='email'
            className='inputInt-field'
            name='email'
            label={'Email'}
            required
          />

          <Input
            type='tel'
            className='inputInt-field'
            name='number'
            label={'Номер телефона'}
            required
          />
          <label>
            <input type="checkbox" name="agree" value="agree" />
            Показывать <b><i>номер телефона</i></b>, чтобы с вами могли связаться клиенты
          </label>
        </div>

        <div className="save_cancellation_button">
          <Button text='Отмена' 
          style={{ backgroundColor: '#EE5300',fontWeight:'light', color: 'black', border: '2px solid #EE5300',  height:'4vh' }} />
          <Button text='Сохранить данные'
          style={{ backgroundColor: 'white',fontWeight:'light', color: 'black', border: '2px solid #EE5300',height:'4vh' }} />
        </div>

        

      </div>
    </div>

  )
}

export default PersonalData