import React from 'react'
import './HomeIntro.css'
import InputService from '../../../components/InputService/InputService'
import Person from '../../../shared/assets/photo/mainPerson.jpg'

const HomeIntro = () => {
  return (
    <div className='homeIntro_component'>
        <div className="homeIntro_content">
            <div className="intro_item">
                <h1>Освободим вас от забот</h1>
                <p>Для любой задачи есть профи!</p>
                <InputService placeholder="Услуги и предложения" />
                <p className='text_state'>Стать исполнителем и начать зарабатывать</p>
            </div>

            <div className="image_mainPage">
                <img src={Person} alt='main phooto in project'/>
            </div>
        </div>
    </div>
  )
}

export default HomeIntro