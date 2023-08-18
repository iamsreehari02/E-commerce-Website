import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthDetails from "../../AuthDetails";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => console.log(userCredentials))
      .catch((error) => console.log(error));
  };

  return (
    <div class="h-screen w-screen bg-page-color">
      <div class="h-44 w-96 ml-auto mr-auto pt-20 text-center">
        <h1 class="text-light-red text-3xl ">Register</h1>
      </div>
      <div class="text-center ">
        <form onSubmit={signup}>
          <input type="text" required placeholder="First Name" />
          <br />
          <input class="mt-10" type="text" required placeholder="Last Name" />
          <br />
          <input
            class="mt-10"
            type="number"
            required
            placeholder="Mobile Number"
          />
          <br />
          <input
            class="mt-10"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <br />
          <input
            class="mt-10"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div>
            <button
              type="submit"
              class="h-10 w-32 ml-auto mr-auto bg-light-pink mt-10 rounded-2xl"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
