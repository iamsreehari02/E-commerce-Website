import React, { useState } from "react";
import { useNavigate , useHistory} from "react-router-dom";
import { auth} from "../../firebase";
import { createUserWithEmailAndPassword, RecaptchaVerifier} from "firebase/auth";
import { addDoc, collection, setDoc } from "firebase/firestore";


// import AuthDetails from "../../AuthDetails";
import { db } from "../../firebase";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'



const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name , setName] = useState();
  const [lastName , setLastName] = useState('')
  
  

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => 
      navigate('/Login')
      )
      .catch((error) => console.log(error));

      const userDetails = collection(db , 'user')
      addDoc(userDetails , {
        name : name + ' ' + lastName,
        email: email,

      })
  };
 

  return (
    <div class="h-screen w-screen bg-page-color">
      <div class="h-44 w-96 ml-auto mr-auto pt-20 text-center">
        <h1 class="text-light-red text-3xl ">Register</h1>
      </div>
      <div class="text-center">
       
        <form onSubmit={signup}>
          <input type="text" required placeholder="First Name" id="name" value={name}
          onChange={(e) => setName(e.target.value)}/>
          <br />
          <input class="mt-10" type="text" required placeholder="Last Name" value={lastName}
          onChange={(e) => setLastName(e.target.value)} />
          <br />
          <input
            class="mt-10"
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <br />
          <input
            class="mt-10"
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div>
            <button
              type="submit"
              class="h-10 w-32 ml-auto mr-auto bg-light-pink mt-10 rounded-2xl" id="submit"
              >
              Confirm
            </button>
            <p onClick={() => navigate('/OtpVerify')} class='mt-6 underline text-red-300'>Sign up with mob no</p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;

