import React from 'react'
import EditProfileLogo from '../../assets/EditProfileLogo.svg'
import ProfileMiniLogo from '../../assets/codicon_account.svg'
import RegLogo from '../../assets/Vector (5).svg'
import { useNavigate } from 'react-router-dom'

export default function EditProfile() {

  const navigate = useNavigate()

  return (
    <div class='h-screen w-screen bg-page-color pt-14 '>
      <div class='h-14 w-28 ml-auto mr-auto text-center text-3xl'>
        <h1>YAVI</h1>
      </div>
      <div class='h-7 w-56 ml-auto mr-auto text-xl text-center text-fading-black'>
        <h1>Welcome To YAVI</h1>
      </div>
      <div>
        <img src={EditProfileLogo} class='w-28 h-28 ml-auto mr-auto mt-10' alt='Profile'/>
      </div>
      <div class='h-9 w-48 ml-auto mr-auto  text-xl mt-6 text-center'>
        <h1>Edit Your Profile</h1>
      </div>
       <div> 
        <img src={ProfileMiniLogo} class='w-14 h-14 ml-auto mr-auto mt-6' alt='Profile'/>
       </div>
       <div class='h-6 w-10 mt-1 ml-auto mr-auto text-fading-black'>
          <button onClick={()=>navigate('/Login')}>Login</button>
       </div>
       <div class='w-10 h-10 mt-7 ml-auto mr-auto'>
        <img src={RegLogo} alt='Register'/>
       </div>
       <div class='h-6 w-44 mt-6 ml-auto mr-auto flex justify-around'>
        <h1 class='text-fading-black'>New to YAVI ?</h1>
        <button onClick={()=>navigate('/Register')} class='text-light-red'>Register</button>
       </div>
    </div>
  )
}
