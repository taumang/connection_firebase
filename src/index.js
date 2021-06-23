import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "semantic-ui-css/semantic.min.css";
import { db } from './data/firebase';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///Reading the data in order to display it:

//Doing a function for getting or reading all the data in cloud firestore:
//This is all in vanilla JavaScript.
// async function readAllUsers (){
//   try{
     ///long way of doing this
    // const collectionRef = db.collection("users");
    // const getPromise = collectionRef.get();
    // const snapshot = await getPromise;
    ///short way:
    // const snapshot = await db.collection("users").get();
   
    ///short query of getting the fields of the collection(database):

    //const snapshot = await db.collection("users").where("firstName","==", "Max").get();
    
    ///The output of the snapshot/query collection:
//     console.log(`Found ${snapshot.size}X user`)
//     const docs = snapshot.docs;
//     docs.forEach((docSnapshot)=>{
//     console.log(docs.id, docSnapshot.data());
//   })
//   }catch(error){
//     console.error(error)
//   }

// }

// readAllUsers();

///////////////////////////////////////////////////////////////////////////////////////////////////

// async function readOneUser(id){
//   try{
//     const snapshot = await db.collection("users").doc(id).get();

//     if(!snapshot.exists){
//       console.log(`User ${id} does not exist!!`);

//     }else{
//       console.log(`User of this id:${snapshot.id} is found`);
//       console.log(snapshot.data());
//     }
//   }catch(error){
//     console.error(error)
//   }
// }

// readOneUser("RwQesllRARpRQx56B4ac");

////////////////////////////////////////////////////////////////////////////////////////////////
///Adding or inserting data into the database:
//Done first in JS for testing purposes

// async function createUser(user){
//   try{
//     const docRef = await db.collection("users").add(user);
//     console.log(`User id:${docRef.id} Added successfully `)
//   }catch(error){
//     console.error(error);
//   }
// }

// createUser({
//   firstName:"MaLeven",
//   lastName:"The Snake",
//   isOnline: false,
//   highScore: 23,
//   topics: ["Cutting people","Eating Meat"]
// })


//////////////////////////////////////////////////////////////////////////////////////////////////
///Updating or making chnages to the data in the firebase database:

// async function updateUser(userID){
//   try {
//     await db.collection("users").doc(userID).update({
//       isOnline: false,
//     })
//     console.log(`User : ${userID} has been added`)
//   } catch (error) {
//     console.error(error)
//   }
// }

// updateUser("RwQesllRARpRQx56B4ac")

///////////////////////////////////////////////////////////////////////////////////////////////////
// async function deleteUser(userID){
//   try {
//     await db.collection("users").doc(userID).delete();
//     console.log(`User ${userID} removed!`)
//   } 
//   catch (err) {
//     console.error(err)
//   }
// }

// deleteUser("jGD6vc1gfJKTWnITrp9r");


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
