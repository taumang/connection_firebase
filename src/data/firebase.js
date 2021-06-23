//Initialising in order to bring core functionaliy:
import firebase from "firebase/app";
//adds the firestore functionality:
import "firebase/firestore";


//Shouldn't be in the source code, for commiting in GitHub
const firebaseConfig = {
  apiKey: "AIzaSyDVXZ8f-DRIkWCS4fm2dOQvl-Ug9PYUhZQ",
  authDomain: "for-now-e563f.firebaseapp.com",
  projectId: "for-now-e563f",
  storageBucket: "for-now-e563f.appspot.com",
  messagingSenderId: "558601156313",
  appId: "1:558601156313:web:fa6638971258c4146fb0c8",
  measurementId: "G-FBRYQ5JZ4K"
};
//handling of exceptions(errors) of firebase credentials:
if(!firebaseConfig.apiKey) throw new Error("Missing firebase credential:apiKey") 
if(!firebaseConfig.authDomain) throw new Error("Missing firebase credential:authDomain") 
if(!firebaseConfig.projectId) throw new Error("Missing firebase credential:projectId") 
if(!firebaseConfig.storageBucket) throw new Error("Missing firebase credential:storageBucket") 
if(!firebaseConfig.messagingSenderId) throw new Error("Missing firebase credential:messageSenderId") 
if(!firebaseConfig.appId) throw new Error("Missing firebase credential:appId") 
if(!firebaseConfig.measurementId) throw new Error("Missing firebase credential:measurementId") 

firebase.initializeApp(firebaseConfig);

//Creating the database
const db = firebase.firestore();
//Singcilton pattern being used here:
export {db , firebase}