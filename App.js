
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GetStarted from './components/GetStarted/GetStarted';
import EditProfile from './components/EditProfile/EditProfile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';



function App() {
  return (
    <div>
      
        <Routes>
          <Route path='/edit-profile' element={<EditProfile/>}/>
          <Route path='/Log-in' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
        
      
    </div>
  );
}

export default App;
