import React from 'react'
import { useNavigate } from 'react-router-dom'



export default function Register() {

    const navigate = useNavigate()

  return (
    <div class='h-screen w-screen bg-page-color'>
        <div class='h-44 w-96 ml-auto mr-auto pt-20 text-center'>
            <h1 class='text-light-red text-3xl '>Register</h1>
        </div>
        <div class='text-center '>
            <input type='text' placeholder='First Name'/>
            <br/>
            <input class='mt-10' type='text' placeholder='Last Name'/>
            <br/>
            <input class='mt-10' type='number' placeholder='Mobile Number'/>
            <br/>
            <input class='mt-10' type='email' placeholder='Email'/>
            <br/>
            <div class='h-10 w-32 ml-auto mr-auto bg-light-pink mt-10 rounded-2xl'>
                <button onClick={()=>navigate('/Home')}class='mt-1'>Confirm</button>
            </div>
        </div>
    </div>
  )
}
