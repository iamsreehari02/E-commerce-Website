
import './App.css';
import GetStarted from './components/GetStarted/GetStarted';
import EditProfile from './components/EditProfile/EditProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/LoginPage/Login';
import Home from './components/HomePage/Home';
import Formals from './components/Formals/Formals';
import CasualsPage from './components/Casuals/CasualsPage';
import SeasonalPage from './components/Seasonal/SeasonalPage';
import CartItems from './components/CartComponent/CartItems'
import OtpVerify from './components/otpConfimation/OtpVerify';



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
          <Route path='/SeasonalPage' element={<SeasonalPage/>}/> 
          <Route path='/CartItems' element={<CartItems/>}/> 
          <Route path='/OtpVerify' element={<OtpVerify/>}/>   
        </Routes>
        
      
    </div>
  );
}

export default App;
