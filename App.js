
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GetStarted from './components/GetStarted/GetStarted';
import EditProfile from './components/EditProfile/EditProfile';



function App() {
  return (
    <div>
        <Routes>
          <Route path='/edit-profile' element={<EditProfile/>}/>
        </Routes>
        {/* {<GetStarted/>} */}
      
    </div>
  );
}

export default App;
