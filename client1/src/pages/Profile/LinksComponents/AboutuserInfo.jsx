import React from 'react'
import './StyleForInfoForm.css'
import Button
 from '../../../shared/ui/Button/Button'
const AboutuserInfo = () => {
  return (
    <div className='info_about_user'>
        <div className="info_user_item">
            <div className="action">
                {/* <p style={{fontWeight:'bold'}}>Немного о себе</p> */}
                {/* <p>Редактировать</p> */}

                <p>Опишите свой опыт, навыки и преиущества в определенной сфере</p>
                <textarea
                        name="taskDescription"
                        className="textarea-field"
                        placeholder="Напишите о себе подробнее"
                        required

                    />
            </div>
            <div className="save_cancellation_button">
              <Button text='Отмена' 
               style={{ backgroundColor: '#EE5300',fontWeight:'light', color: 'black', border: '2px solid #EE5300',  height:'4vh' }} />
              <Button text='Сохранить'
              style={{ backgroundColor: 'white',fontWeight:'light', color: 'black', border: '2px solid #EE5300',height:'4vh' }} />
            </div>
           
        </div>
    </div>
  )
}

export default AboutuserInfo