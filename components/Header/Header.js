import React from "react";
import Sample from '../../assets/Vector (5).svg'
import SearchLogo from '../../assets/SearchLogo.svg'
import CartLogo from '../../assets/CartLogo.svg'
import LikedLogo from '../../assets/LikedLogo.svg'
import SettingsLogo from '../../assets/SettingsLogo.svg'
import ProfileSideLogo from '../../assets/ProfileSideLogo.svg'
import AuthDetails from "../../AuthDetails";
import { useNavigate } from "react-router-dom";


export default function Header() {

  const navigate = useNavigate()

  return (
    <div class='h-16 w-4/5 ml-auto mr-auto flex'>
        <div class='h-14 w-4/5 ml-auto mr-auto flex justify-between'>
          <div class='w-44 h-14 flex'>
            <img src={Sample} alt='sample'/>
            <AuthDetails/>
          </div>
        </div>
        <div class="h-14 w-96 flex justify-between">
          <img src={SearchLogo} class="h-6 w-6   mt-auto mb-auto" alt="search" />
          <img src={CartLogo} onClick={()=>navigate('/Cart')} class="h-6 w-6  mt-auto mb-auto" alt="Cart" />
          <img src={LikedLogo} class="h-6 w-6   mt-auto mb-auto" alt="Liked" />
          <img src={SettingsLogo} class="h-6 w-6  mt-auto mb-auto" alt="Settings"/>
          <img src={ProfileSideLogo} class="h-14 w-auto" alt="Profile" />
        </div>
    </div>
  );
}
