import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxuipF8ecZ4TgMgc6RaEUPH55KXIeNGQw",
  authDomain: "cart-web-app-4b8ad.firebaseapp.com",
  projectId: "cart-web-app-4b8ad",
  storageBucket: "cart-web-app-4b8ad.appspot.com",
  messagingSenderId: "640928848978",
  appId: "1:640928848978:web:304b86473f20ee22a9d38b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


