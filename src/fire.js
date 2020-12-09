import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBe2GjUKIZaXXGBCuYsNtPUJ25Lq-yEnz0",
    authDomain: "login-acff6.firebaseapp.com",
    projectId: "login-acff6",
    storageBucket: "login-acff6.appspot.com",
    messagingSenderId: "202552654781",
    appId: "1:202552654781:web:1fd2d21d07f48e5ca9f0d4",
    measurementId: "G-M2TF963GTB"
  };


  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;