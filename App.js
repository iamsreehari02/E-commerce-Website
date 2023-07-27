
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GetStarted from './components/GetStarted/GetStarted';
import EditProfile from './components/EditProfile/EditProfile';

import Register from './components/Register/Register';
import Login from './components/LoginPage/Login';
import Home from './components/HomePage/Home';



function App() {
  return (
    <div>
      
        <Routes>
          <Route path='/' element={<GetStarted/>}/>
          <Route path='/Edit-profile' element={<EditProfile/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Home' element={<Home/>}/>
        </Routes>
        
      
    </div>
  );
}

export default App;
