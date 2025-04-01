import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from '../../shared/assets/photo/logo.jpg';
import { IoIosMenu } from "react-icons/io";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../../services/authHandlers';
import NavLinks  from './NavLinks';


const Header = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isWorldModalOpen, setIsWorldModalOpen] = useState(false);
  const isAuthenticated = !!Cookies.get('access_token');
  const location = useLocation();
  const navigate = useNavigate()
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);


  const toggleMapModal = () => {
    setIsMapModalOpen(prevState => !prevState);
  };

  const toggleWorldModal = () => {
    setIsWorldModalOpen(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className='header_component'>
      <div className="header_content">
        <nav className="nav">
          <div className="logo_and_menu">
            <NavLink className='logo' to='/'>
              <img src={Logo} alt="logo working work" />
            </NavLink>
            <ul className="desktop_links">
            <NavLink to='/CreatingTask' className={({ isActive }) => 
                (isActive || location.pathname === '/OrderForm') ? 'createExercise active' : 'createExercise'}>
                Создать задание
              </NavLink>
               <NavLink to='/FindTask' className={({ isActive }) => isActive ? 'findExercise active' : 'findExercise'}>Найти задание</NavLink>
              
            </ul>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            <IoIosMenu size={30} />
          </div>

          <ul ref={menuRef} className={`nav_list ${isMenuOpen  ? 'active' : ''}`}>
            <NavLinks 
                isAuthenticated={isAuthenticated}
                toggleMapModal={toggleMapModal}
                toggleWorldModal={toggleWorldModal}
                isMapModalOpen={isMapModalOpen}
                isWorldModalOpen={isWorldModalOpen}
                handleLogout={handleLogout} 
                navigate={navigate} 
              />
          
          </ul>
        </nav>
      </div>
     
    </div>
  );
}

export default Header;