import React, { useState } from 'react';
import './Header.css';
import Logo from '../../shared/photo/logo.jpg';
import { IoIosMenu } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FaQuestion } from "react-icons/fa";

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
            <li className='logo'>
              <img src={Logo} alt="logo working work" />
            </li>
            <ul className="desktop_links">
              <li to='/CreateExercise' className='createExercise'>Создать задание</li>
              <li to='/FindExercise' className='findExercise'>Найти задание</li>
            </ul>
          </div>

          <div className="menu-icon" onClick={toggleIsMenu}>
            <IoIosMenu size={30} />
          </div>

          <ul className={`nav_list ${isMenu ? 'active' : ''}`}>
            <li to='/CreateExercise' className='createExercise'>Создать задание</li>
            <li to='/FindExercise' className='findExercise'>Найти задание</li>
            <li><FiMapPin /></li>
            <li><TfiWorld /></li>
            <li><FaQuestion /></li>
            <li>Войти</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
