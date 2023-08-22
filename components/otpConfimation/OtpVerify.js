import React, { useState } from 'react'
import Otpinput from 'otp-input-react'
import {CgSpinner} from 'react-icons/cg'
import PhoneInput from 'react-phone-number-input'
import { auth} from "../../firebase";
import {RecaptchaVerifier ,  signInWithPhoneNumber } from "firebase/auth";
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function OtpVerify() {

    const [otp , setOtp] = useState()
    const [loading , setLoading] = useState(false)
    const [ph , setPh] = useState('')
    const [showOtp , setShowOtp] = useState(false)
    const [user , setUser] = useState(null)

    const navigate = useNavigate()

    function onCaptchaVerify(){
        if(!window.recaptchaVerifier){
            window.recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
            'size': 'invisible',
            'callback': (response) => {
                sendCode();
             },
             'expired-callback' : () => {}

}, auth
);
    }
}
    function sendCode(){
    setLoading(true)
    onCaptchaVerify()

        const appVerifier = window.recaptchaVerifier
        const formatPh = '+' + ph

        signInWithPhoneNumber(auth, formatPh, appVerifier)

            .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setLoading(true)
            setShowOtp(true)
            toast.success('OTP send successfully')
    }).catch((error) => {
      console.log(error)
      setLoading(false)
    });
}

function onOtpVerify () {
    setLoading(true)
    window.confirmationResult.confirm(otp)
    .then(async(res) => {
        console.log(res)
        setUser(res.user)
        setLoading(false)
        navigate('/Home')
    })
    .catch((error) => console.log(error))
    setLoading(false)
}
  return (
    <div class='w-auto h-screen bg-orange-100 pt-40'>
        <div class='w-96 h-96  mx-auto pt-24 text-center'>
            <div class='text-center w-96 h-44'> 
                <h1 class='text-2xl font-semibold'>Welcome To YAVI</h1>
                <img class='w-16 h-16 ml-40 mt-8' src='http://cdn.onlinewebfonts.com/svg/img_211425.png'/>
                
                {
                    showOtp ? (
                        <>
                        <div>
                        
                        <p class='mt-5'>Please enter your OTP</p>
                        <div class='ml-11 mt-10'>
                         <Otpinput OTPLength = {6} type ="number" value={otp} onChange={setOtp}></Otpinput>
                           </div>
                        <button class='ml-24 w-40 h-8 mt-6 bg-black text-white rounded-lg flex justify-center'>
                            
                            {/* {  loading && <CgSpinner class='animate-spin mt-1' size={20}/>} */}
                            <span class='ml-2 ' onClick={onOtpVerify}>Verify otp</span>
                </button> 
                    </div>
                        </>
                    ):
                    <>
                    
                        <p class='mt-4 ml-2'>Please enter your Mobile Number</p>
                        <div class='mt-6 w-48 ml-24' ><PhoneInput country={'in'} value={ph} onChange={setPh}/></div>
                        {/* <button  onClick={sendCode} class='w-44 h-8 mt-6 bg-black text-white rounded-lg'>Send Code via SMS</button> */}

                        <button class='ml-28 w-44 h-8 mt-6 bg-black text-white rounded-lg flex justify-center'>
                            
                            {  loading && <CgSpinner class='animate-spin mt-1' size={20}/>}
                            <span class='ml-2' onClick={sendCode}>Send OTP via SMS</span>
                </button> 

                      
                    
                    </>
                }
                <div>
                    <Toaster toastOptions={{duration:4000}}/>
                    <div id="recaptcha-container">
                        {/* {
                            user ? (<p>Login success</p>):
                            <div></div>
                        } */}
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}
