import React from "react";
import MainLogo from '../../assets/GetStarted.svg'
import { useNavigate } from "react-router-dom";
import GetBut from '../../assets/Butt.svg'
// import './GetStarted.css'


export default function GetStarted() {

  const navigate = useNavigate();
  return (
      <div class="h-screen w-screen border bg-greyish-yellow">
        <div class='h-2/3 w-96 ml-auto mr-auto '>
          <img src={MainLogo} alt='logo'/>  
        </div>
        <div>
          <img src={GetBut} button onClick={()=>navigate('/edit-profile')} class='h-40 w-40 text-white ml-auto mr-auto mb-9' alt='Button'/>
        </div>
      </div>
  );
}

