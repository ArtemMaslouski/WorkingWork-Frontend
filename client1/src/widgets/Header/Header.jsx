import React, { useState } from 'react';
import './Header.css';
import Logo from '../../shared/assets/photo/logo.jpg';
import { IoIosMenu } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FaQuestion } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../../features/auth/model/authHandlers';

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isWorldModalOpen, setIsWorldModalOpen] = useState(false);
  const isAuthenticated = !!Cookies.get('token');
  const navigate = useNavigate()
  

  const toggleIsMenu = () => {
    setIsMenu(prevState => !prevState);
  };

  const toggleMapModal = () => {
    setIsMapModalOpen(prevState => !prevState);
  };

  const toggleWorldModal = () => {
    setIsWorldModalOpen(prevState => !prevState);
  };

  return (
    <div className='header_component'>
      <div className="header_content">
        <nav className="nav">
          <div className="logo_and_menu">
            <NavLink className='logo' to='/'>
              <img src={Logo} alt="logo working work" />
            </NavLink>
            <ul className="desktop_links">
              <NavLink to='/CreatingTask' className={({ isActive }) => isActive ? 'createExercise active' : 'createExercise'}>Создать задание</NavLink>
              <NavLink to='/FindTask' className={({ isActive }) => isActive ? 'findExercise active' : 'findExercise'}>Найти задание</NavLink>
            </ul>
          </div>

          <div className="menu-icon" onClick={toggleIsMenu}>
            <IoIosMenu size={30} />
          </div>

          <ul className={`nav_list ${isMenu ? 'active' : ''}`}>
            <NavLink to='/CreatingTask' className={({ isActive }) => isActive ? 'createExercise active' : 'createExercise'}>Создать задание</NavLink>
            <NavLink to='/FindTask' className={({ isActive }) => isActive ? 'findExercise active' : 'findExercise'}>Найти задание</NavLink>
            
            <NavLink onClick={toggleMapModal} style={{ color: isMapModalOpen ? '#EE5300' : 'black' }}>
              <FiMapPin size={20} />
            </NavLink>
            <NavLink onClick={toggleWorldModal} style={{ color: isWorldModalOpen ? '#EE5300' : 'black' }}>
              <TfiWorld size={20} />
            </NavLink>
            
            <NavLink to='/QuestionComponent' className={({ isActive }) => isActive ? 'active' : ''}><FaQuestion size={20}/></NavLink>
            
            {isAuthenticated ? (
              <>
                <NavLink to='/Profile'><CgProfile size={20}/></NavLink>
                <span onClick={() => handleLogout(navigate)} className='logout-link'>Выйти</span>
              </>
              ) 
              :( 
                <NavLink to='/SignIn'className={({ isActive }) => isActive ? 'active' : ''}>Войти</NavLink>
             )}
           
          </ul>
        </nav>
      </div>
     
    </div>
  );
}

export default Header;