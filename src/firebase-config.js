import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAaAv1S_sUxSvHSyKIedMbrPNfv9pqJCpU",
    authDomain: "fir-auth-3f62b.firebaseapp.com",
    projectId: "fir-auth-3f62b",
    storageBucket: "fir-auth-3f62b.appspot.com",
    messagingSenderId: "33375082266",
    appId: "1:33375082266:web:a39b06bd855fbd332b7ea3",
    measurementId: "G-Y6F0W6ZH3G"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)
  