import React from 'react'
import './Footer.css'
import { MdOutlineMail } from "react-icons/md";
import { SiTelegram } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const {t} = useTranslation();
  return (
    <div className='footer_component'>
        <div className="content_footer">

            <div className="help_link">
                <ul>
                    <NavLink to='/OrderForm'>{t('createTask')}</NavLink>
                    <NavLink to='./QuestionComponent'>{t('footer.TermsOfUse')}</NavLink>
                    <NavLink>{t('footer.AboutTheCompany')}</NavLink>
                    <NavLink to='./SignIn'>{t('login')}</NavLink>
                    <NavLink to='./CreatingTask'>{t('footer.AllServices')}</NavLink>
                    <NavLink to='./CreatingTask'>{t('footer.CatalogOfWorks')}</NavLink>
                    <NavLink>{t('footer.AllReviews')}</NavLink>
                   
                </ul>
            </div>
            
            <div className="footer_info">
                <div className="text_footer">
                    <p>{t('footer.infoForPublic')}</p>
                </div>
                <div className="icons">
                    <NavLink><MdOutlineMail size={22}/></NavLink>
                    <NavLink><SiTelegram size={22}/></NavLink>
                    <NavLink><FaInstagramSquare size={22}/></NavLink>
                </div>
               
            </div> 
       
        </div>
    </div>
  )
}

export default Footer