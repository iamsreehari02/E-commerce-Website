import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import AuthDetails from '../../AuthDetails'

    const Login =() => {

    const navigate = useNavigate()

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')


    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth , email , password)
        .then((userCredentials) => navigate('/home') )
        .catch((error) => console.log(error))
        
       
    }


  return (
    <div class='h-screen w-screen bg-page-color pt-20'>
        <div class='h-44 w-96 ml-auto mr-auto pt-20 text-center '>
            <h1 class='text-fading-black text-3xl'>Login Here</h1>
        </div>
        <div class='text-center'>
            <form onSubmit={login}>
                <input type='email' value={email}  
                onChange={(e) => setEmail(e.target.value)}
                required placeholder ='Email'/>
                <br/>
                <input class='mt-10' type='password' value={password}
                onChange={(e) => setPassword(e.target.value)}
                required placeholder='Password'/>
                <br/>
                <div >
                    <button type='submit' class='h-10 w-28 ml-auto mr-auto bg-light-pink mt-10 rounded-2xl'
                    >Login</button>
                </div>
            </form>
            <br/>
            <button class=' text-xs text-light-red'>Forget password or email ?</button>
        </div>
        <AuthDetails/>      
    </div>
  )

}
export default Login