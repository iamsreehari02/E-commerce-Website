import React from "react";
import MainLogo from '../../assets/Rectangle 42.svg'
import VectorLogo from '../../assets/Vector.jpg'
import { useNavigate } from "react-router-dom";
import GetBut from '../../assets/Butt.svg'
// import './GetStarted.css'
import { Link } from "react-router-dom";


export default function GetStarted() {

  const navigate = useNavigate();
  return (
    <div>
      <div class="h-auto w-screen border bg-greyish-yellow">
        <div class="h-50 w-96 ml-auto mr-auto mt-64">
          
          <img src={MainLogo} class='h-50 w-50' alt='logo'/>  
        
        </div>
        <div class="h-96 w-96 ml-auto mr-auto mb-64">
          <img src={GetBut} button onClick={()=>navigate('/edit-profile')} class='h-40 w-40 text-white ml-auto mr-auto' alt='Button'/>
        </div>
      </div>
    </div>
  );
}

