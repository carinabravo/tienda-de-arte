import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ3qhCkR4r4SggAwYBSmgcZskeQorURLI",
  authDomain: "tienda-de-arte-df36f.firebaseapp.com",
  projectId: "tienda-de-arte-df36f",
  storageBucket: "tienda-de-arte-df36f.appspot.com",
  messagingSenderId: "937949702284",
  appId: "1:937949702284:web:45e3b1602356c14f3073a9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
