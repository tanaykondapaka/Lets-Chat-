var firebaseConfig = {
    apiKey: "AIzaSyAoOmXA-DD7V5FLJPdQ6KrZY72_7w6sSRA",
    authDomain: "lets-chat-a65ae.firebaseapp.com",
    databaseURL: "https://lets-chat-a65ae-default-rtdb.firebaseio.com",
    projectId: "lets-chat-a65ae",
    storageBucket: "lets-chat-a65ae.appspot.com",
    messagingSenderId: "431234539295",
    appId: "1:431234539295:web:da02278dd740be8c881a2a",
    measurementId: "G-L4NX6NRHEB"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  inputvalue=""

user_name=localStorage.getItem("username")

addEventListener("load",function enter(){document.getElementById("hi").innerHTML="Welcome "+user_name
})