import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './widgets/Header/Header';
import Footer from './widgets/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import QuestionComponent from './pages/QuestionComponent/QuestionComponent';
import SignIn from './pages/SignIn/SignIn';
import FindTask from './pages/FindTask/FindTask';
import CreatingTask from './pages/CreatingTask/ui/CreatingTask/CreatingTask';
import Profile from './pages/Profile/Profile';
import UserChat from './pages/UserChat/UserChat';
import { RecoveryForm } from './features/auth';
import OrderForm from './pages/CreatingTask/ui/OrderForm/OrderForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import './providers/i18n/i18n';
import { AuthProvider, useAuth } from './context/AuthContext';
import { io } from 'socket.io-client';
import { jwt_decode } from 'jwt-decode';

const socket = io(process.env.REACT_APP_URL);

function InnerApp() {
  const { currentUserId } = useAuth();
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'ru';
    if (i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <div className='App'>
      <ToastContainer />
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/QuestionComponent' element={<QuestionComponent />} />
          <Route path='/FindTask' element={<FindTask />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/CreatingTask' element={<CreatingTask />} />
          <Route path='/OrderForm' element={<OrderForm />} />
          <Route path='/Profile' element={<Profile />} />
          <Route
            path='/UserChat'
            element={<UserChat socket={socket} currentUserId={currentUserId} />}
          />
          <Route path='/find-task' element={<FindTask />} />
          <Route path='/RecoveryForm' element={<RecoveryForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}

export default App;
