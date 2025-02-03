import React, { useState } from 'react';
import './Header.css';
import Logo from '../../shared/photo/logo.jpg';
import { IoIosMenu } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FaQuestion } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggleIsMenu = () => {
    setIsMenu(prevState => !prevState);
  }

  return (
    <div className='header_component'>
      <div className="header_content">
        <nav className="nav">

          <div className="logo_and_menu">

            <NavLink className='logo' to='/'>
              <img src={Logo} alt="logo working work" />
            </NavLink>

            <ul className="desktop_links">
              <NavLink to='/CreateExercise' className={({ isActive }) => isActive ? 'createExercise active' : 'createExercise'}>Создать задание</NavLink>
              <NavLink to='/FindTask' className={({ isActive }) => isActive ? 'findExercise active' : 'findExercise'}>Найти задание</NavLink>
            </ul>
          </div>

          <div className="menu-icon" onClick={toggleIsMenu}>
            <IoIosMenu size={30} />
          </div>

          <ul className={`nav_list ${isMenu ? 'active' : ''}`}>
            <NavLink to='/CreateExercise' className={({ isActive }) => isActive ? 'createExercise active' : 'createExercise'}>Создать задание</NavLink>
            <NavLink to='/FindTask' className={({ isActive }) => isActive ? 'findExercise active' : 'findExercise'}>Найти задание</NavLink>
            <NavLink to='/locationModal'><FiMapPin size={20}/></NavLink>
            <NavLink to='/languageModal'><TfiWorld size={20}/></NavLink>
            <NavLink to='/QuestionComponent' className={({ isActive }) => isActive ? 'active' : ''}><FaQuestion size={20}/></NavLink>
            <NavLink to='/SignIn' className={({ isActive }) => isActive ? 'active' : ''}>Войти</NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
