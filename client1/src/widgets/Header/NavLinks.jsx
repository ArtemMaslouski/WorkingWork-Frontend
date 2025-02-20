// src/components/Header/NavLinks.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiMapPin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FaQuestion } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const NavLinks = ({ isAuthenticated, toggleMapModal, toggleWorldModal, isMapModalOpen, isWorldModalOpen, handleLogout, navigate }) => {
  return (
    <>
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
      ) : (
        <NavLink to='/SignIn' className={({ isActive }) => isActive ? 'active' : ''}>Войти</NavLink>
      )}
    </>
  );
};

export default NavLinks;