import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()

  return (
    <div class='h-screen w-screen bg-page-color pt-20'>
        <div class='h-44 w-96 ml-auto mr-auto pt-20 text-center '>
            <h1 class='text-fading-black text-3xl'>Login Here</h1>
        </div>
        <div class='text-center'>
            <input type='email' placeholder ='Email'/>
            <br/>
            <input class='mt-10' type='password' placeholder='Password'/>
            <br/>
            <div class='h-10 w-28 ml-auto mr-auto bg-light-pink mt-10 rounded-2xl '>
                <button onClick={()=>navigate('/Home')} class='mt-1'>Login</button>
            </div>
            <br/>
            <button class=' text-xs text-light-red'>Forget password or email ?</button>
        </div>
        

      
    </div>
  )
}
