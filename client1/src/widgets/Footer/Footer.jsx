import React from 'react'
import './Footer.css'
import { MdOutlineMail } from "react-icons/md";
import { SiTelegram } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer_component'>
        <div className="content_footer">

            <div className="help_link">
                <ul>
                    <NavLink to='/CreatingTask'>Создать задание </NavLink>
                    <NavLink to='./QuestionComponent'>Условия использования</NavLink>
                    <NavLink>О компании</NavLink>
                    <NavLink to='./SignIn'>Вход</NavLink>
                    <NavLink>Все услуги</NavLink>
                    <NavLink to='./CreatingTask'>Каталог работ</NavLink>
                    <NavLink>Все отзывы</NavLink>
                   
                </ul>
            </div>
            
            <div className="footer_info">
                <div className="text_footer">
                    <p>© Информация, опубликованная на данном сайте, предназначена для любой аудитории, если иное не указано дополнительно в отношении отдельных материалов.</p>
                </div>
                <div className="icons">
                    <NavLink><MdOutlineMail size={30}/></NavLink>
                    <NavLink><SiTelegram size={30}/></NavLink>
                    <NavLink><FaInstagramSquare size={30}/></NavLink>
                </div>
               
            </div> 
       
        </div>
    </div>
  )
}

export default Footer