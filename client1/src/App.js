import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './widgets/Header/Header';
import Footer from './widgets/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import QuestionComponent from './pages/QuestionComponent/QuestionComponent';
import SignIn from './pages/SignIn/SignIn';
import FindTask from './pages/FindTask/FindTask';
import CreatingTask from './pages/CreatingTask/ui/CreatingTask/CreatingTask'
import Profile from './pages/Profile/Profile'
import {RecoveryForm} from './features/auth'
import OrderForm from './pages/CreatingTask/ui/OrderForm/OrderForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      
      <ToastContainer
      //  position="bottom-center"
      //  autoClose={2000}
       />



       <Header/>
       <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/QuestionComponent" element={<QuestionComponent />} />
          <Route path="/FindTask" element={<FindTask />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/CreatingTask" element={<CreatingTask />}/>
          <Route path ="/OrderForm" element={<OrderForm/>}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route 
            path="/RecoveryForm" 
            element={<RecoveryForm />} 
          />
                    
        </Routes>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
