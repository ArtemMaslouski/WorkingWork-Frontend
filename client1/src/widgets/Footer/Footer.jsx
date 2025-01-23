import React from 'react'
import './Footer.css'
import { MdOutlineMail } from "react-icons/md";
import { SiTelegram } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer_component'>
        <div className="content_footer">

            <div className="help_link">
                <ul>
                    <li>Новый заказ</li>
                    <li>Вход для специалиста</li>
                    <li>Условия использования</li>
                    <li>О компании</li>
                    <li>Все услуги</li>
                    <li>Каталог работ</li>
                    <li>Вход для клиентов</li>
                    <li>Все отзывы</li>
                </ul>
            </div>
            
            <div className="footer_info">
                <div className="text_footer">
                    <p>© Информация, опубликованная на данном сайте, предназначена для любой аудитории, если иное не указано дополнительно в отношении отдельных материалов.</p>
                </div>
                <div className="icons">
                     <li><MdOutlineMail size={30}/></li>
                    <li><SiTelegram size={30}/></li>
                    <li><FaInstagramSquare size={30}/></li>
                </div>
               
            </div> 
       
        </div>
    </div>
  )
}

export default Footer