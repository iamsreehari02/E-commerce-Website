
import './App.css';
import GetStarted from './components/GetStarted/GetStarted';
import EditProfile from './components/EditProfile/EditProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/LoginPage/Login';
import Home from './components/HomePage/Home';
import Category from './components/Category/Category';
import CasualWear from './components/CasualWear/CasualWear';
import Formals from './components/Formals/Formals';
import CasualsPage from './components/Casuals/CasualsPage';
import FormalsPage from './components/Formals/FormalsPage';

function App() {
  return (
    <div>
      
        <Routes>
          <Route path='/' element={<GetStarted/>}/>
          <Route path='/Edit-profile' element={<EditProfile/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Home' element={<Home/>}/>
          {/* <Route path='/Category' element={<Category/>}/> */}
          <Route path='/FormalsPage' element={<Formals/>}/> 
          <Route path='/CasualsPage' element={<CasualsPage/>}/>         
        </Routes>
        
      
    </div>
  );
}

export default App;
