import React from "react";
// import './GetStarted.css'
import { useNavigate } from 'react-router-dom';

export default function GetStarted() {

  const navigate = useNavigate()
  
  const handleNavigate = (str)=>{
    navigate(str)
  } 
  return (
    <div>
      <div class="h-screen w-768px border bg-greyish-yellow">
        <div class="h-50 w-96 ml-auto mr-auto mt-40 flex justify-center">
          <div>
          <img src='./assets/Rectangle 42.svg' class='h-50 w-50' alt='logo'/>  
          <h1>Spring Break</h1>
          </div>
        </div>
        <div class="h-10 w-40 rounded-lg bg-black ml-auto mr-auto flex align middle justify-center mt-20">
          <button class="text-white" onClick={()=>handleNavigate('EditProfile')}>Get Started</button>
          <div class="h-7 w-7 rounded-full border border-white-800 ml-6">
            <img src="./assets/Vector(3).svg" alt="vector" />
          </div>
        </div>
      </div>
    </div>
  );
}
