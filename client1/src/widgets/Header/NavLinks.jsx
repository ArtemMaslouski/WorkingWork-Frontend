import React, {useState, useRef, useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiMapPin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FaQuestion } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import LanguageModal from '../modals/LanguageModal/LanguageModal';

const NavLinks = ({ isAuthenticated, toggleMapModal, isMapModalOpen, handleLogout, navigate }) => {
  const location = useLocation();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const langModalRef = useRef(null);

  const handleSelectLanguage = (lang) => {
    console.log('Выбран язык:', lang);
    setShowLanguageDropdown(false);
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
       <NavLink to='/CreatingTask' className={({ isActive }) => 
          (isActive || location.pathname === '/OrderForm') ? 'createExercise active' : 'createExercise'}>
          Создать задание
        </NavLink>
        <NavLink to='/FindTask' className={({ isActive }) => isActive ? 'findExercise active' : 'findExercise'}>Найти задание</NavLink>
      
      <NavLink 
        onClick={toggleMapModal} style={{ color: isMapModalOpen ? '#EE5300' : 'black' }}>
        <FiMapPin size={20} />
      </NavLink>

      <NavLink onClick={()=> setShowLanguageDropdown((prev) => !prev)} style={{ color: showLanguageDropdown ? '#EE5300' : 'black' }}>
        <TfiWorld size={20} />
      </NavLink>
      <div ref={langModalRef}>
        <LanguageModal 
          isOpen={showLanguageDropdown}
          onSelectLanguage={handleSelectLanguage}
        />
      </div>

      <NavLink to='/QuestionComponent' className={({ isActive }) => isActive ? 'active' : ''}><FaQuestion size={20}/></NavLink>
      
      {isAuthenticated ? (
        <>
          <NavLink to='/Profile'><CgProfile size={20}/></NavLink>
          <span onClick={() => handleLogout(navigate)} className='logout-link'>Выйти</span>
        </>
      ) : (
        <NavLink to='/SignIn' className={({ isActive }) => isActive ? 'active' : ''}>Войти</NavLink>
      )}
    </>
  );
};

export default NavLinks;