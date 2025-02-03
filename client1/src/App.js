import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './widgets/Header/Header';
import Footer from './widgets/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import QuestionComponent from './pages/QuestionComponent/QuestionComponent';
import SignIn from './pages/SignIn/SignIn';
import FindTask from './pages/FindTask/FindTask';

function App() {
  return (
    <div className="App">
      
       <Header/>
       <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/QuestionComponent" element={<QuestionComponent />} />
          {/* {/* <Route path="/Tariffs" element={<Tariffs />} /> */}\
          <Route path="/FindTask" element={<FindTask />} />
          <Route path="/SignIn" element={<SignIn />} />
          
          
        </Routes>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
