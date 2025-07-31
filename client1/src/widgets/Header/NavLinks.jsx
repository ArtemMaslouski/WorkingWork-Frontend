import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';
import { TfiWorld } from 'react-icons/tfi';
import { FaQuestion } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { BsChatLeft } from 'react-icons/bs';
import LanguageModal from '../modals/LanguageModal/LanguageModal';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import ChatApi from '../../api/ChatApi';

const NavLinks = ({
  isAuthenticated,
  toggleMapModal,
  isMapModalOpen,
  handleLogout,
  navigate,
}) => {
  const location = useLocation();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const langModalRef = useRef(null);
  const { t } = useTranslation();

  const handleSelectLanguage = (lang) => {
    const langCode = {
      Русский: 'ru',
      English: 'en',
    }[lang];

    if (langCode) {
      i18n.changeLanguage(langCode);
      localStorage.setItem('language', langCode);
      setShowLanguageDropdown(false);
    }
  };

  const handleClickOutside = (e) => {
    if (langModalRef.current && !langModalRef.current.contains(e.target)) {
      setShowLanguageDropdown(false);
    }
  };

  useEffect(() => {
    if (showLanguageDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLanguageDropdown]);

  return (
    <>
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

      <NavLink
        onClick={toggleMapModal}
        style={{ color: isMapModalOpen ? '#a5811e' : 'black' }}
      >
        <FiMapPin size={20} />
      </NavLink>

      <NavLink
        onClick={() => setShowLanguageDropdown((prev) => !prev)}
        style={{ color: showLanguageDropdown ? '#a5811e' : 'black' }}
      >
        <TfiWorld size={20} />
      </NavLink>
      <div ref={langModalRef}>
        <LanguageModal
          isOpen={showLanguageDropdown}
          onSelectLanguage={handleSelectLanguage}
        />
      </div>
      <NavLink
        to='/QuestionComponent'
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <FaQuestion size={20} />
      </NavLink>

      {isAuthenticated ? (
        <>
          <NavLink
            to='/UserChat'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <BsChatLeft size={20} />{' '}
          </NavLink>
          <NavLink to='/Profile'>
            <CgProfile size={20} />
          </NavLink>

          <span
            onClick={() => handleLogout(navigate, t)}
            className='logout-link'
          >
            {t('logout')}
          </span>
        </>
      ) : (
        <NavLink
          to='/SignIn'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {t('login')}
        </NavLink>
      )}
    </>
  );
};

export default NavLinks;
