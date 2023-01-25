import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAu9-1nY-Mqmh_vNqyy1LUr9-SOdz6FUks",
  authDomain: "covid-clone-5fd62.firebaseapp.com",
  projectId: "covid-clone-5fd62",
  storageBucket: "covid-clone-5fd62.appspot.com",
  messagingSenderId: "140980376309",
  appId: "1:140980376309:web:20713162edc41e5f9a6bbc",
  measurementId: "G-MDLX44HMDZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth};
