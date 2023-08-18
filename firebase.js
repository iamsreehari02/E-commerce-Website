// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1MnJKKe7BuLXD2k_FjeZgmCWVlZTI7iw",
  authDomain: "mini-project-4fd02.firebaseapp.com",
  projectId: "mini-project-4fd02",
  storageBucket: "mini-project-4fd02.appspot.com",
  messagingSenderId: "700513077638",
  appId: "1:700513077638:web:a6c5a91d4588b533c08407"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);