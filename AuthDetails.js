import React, { useEffect, useState } from 'react'
import { auth } from './firebase'
import { onAuthStateChanged, signOut} from 'firebase/auth'
const AuthDetails = () => {

    const [authUser , setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth , (user) => {
            if(user){
                setAuthUser(user)
            }
            else{
                setAuthUser(null)
            }
        });
        return()=> {
            listen();
        }
    },[])

    const userSignOut = () => {
        signOut(auth)
        .then(() => console.log('signed out successfully'))
        .catch((error) => console.log(error))
    } 
  return (
    <div class='w-20 h-12 mx-auto'>
        { authUser ? <><p class='w-24'>Signed into {authUser.email} </p><button class='w-20 rounded-md bg-slate-200' onClick={userSignOut}>Sign Out</button></> : 'Signed out' }
    
    </div>
  )
}

export default AuthDetails
