import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './widgets/Header/Header';
import Footer from './widgets/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      
       <Header/>
       <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/RoutesBus" element={<RoutesBus />} />
          <Route path="/Tariffs" element={<Tariffs />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/LoginAuthorizationPage" element={<LoginAuthorizationPage />} /> */}
        </Routes>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
