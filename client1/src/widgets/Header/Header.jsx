import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from '../../shared/assets/photo/logo1.jpg';
import { IoIosMenu } from 'react-icons/io';
// import { IoLanguage } from "react-icons/io5";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../../services/authHandlers';
import NavLinks from './NavLinks';
import LanguageModal from '../modals/LanguageModal/LanguageModal';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isWorldModalOpen, setIsWorldModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const { t } = useTranslation();
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const toggleMapModal = () => {
    setIsMapModalOpen((prevState) => !prevState);
  };

  const toggleWorldModal = () => {
    setIsWorldModalOpen((prevState) => !prevState);
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

  const onLogout = () => {
    handleLogout(navigate, t, logout);
  };

  return (
    <div className='header_component'>
      <div className='header_content'>
        <nav className='nav'>
          <div className='logo_and_menu'>
            <NavLink className='logo' to='/'>
              <img src={Logo} alt='logo working work' />
            </NavLink>
            <ul className='desktop_links'>
              <NavLink
                to='/CreatingTask'
                className={({ isActive }) =>
                  isActive || location.pathname === '/OrderForm'
                    ? 'createExercise active'
                    : 'createExercise'
                }
              >
                {t('createTask')}
              </NavLink>
              <NavLink
                to='/FindTask'
                className={({ isActive }) =>
                  isActive ? 'findExercise active' : 'findExercise'
                }
              >
                {t('findTask')}
              </NavLink>
            </ul>
          </div>

          <div className='header_controls'>
            <div className='menu-icon' onClick={toggleMenu}>
              <IoIosMenu size={30} />
            </div>
          </div>

          <ul
            ref={menuRef}
            className={`nav_list ${isMenuOpen ? 'active' : ''}`}
          >
            <NavLinks
              isAuthenticated={isAuthenticated}
              toggleMapModal={toggleMapModal}
              toggleWorldModal={toggleWorldModal}
              isMapModalOpen={isMapModalOpen}
              isWorldModalOpen={isWorldModalOpen}
              handleLogout={onLogout}
              navigate={navigate}
            />
          </ul>
        </nav>
      </div>
      <LanguageModal
        isOpen={isWorldModalOpen}
        onClose={() => setIsWorldModalOpen(false)}
      />
    </div>
  );
};

export default Header;
