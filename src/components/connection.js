import { db } from "../data/firebase";
import{useEffect, useState} from "react";
import isLoading from "is-loading";
import User from "./user";


function GetAllUsers(){
    const [queryState, setQueryState] = useState({
        isLoading:false,
        errorMessage:"",
        docSnapshots:null
    });

    //Making use of effects, so that components can be mounted(or rendered(shown) onto the screen) 
    useEffect(()=>{
        //Add the logic for getting all the user here:
        async function getAllUsers(){
            try{
               //.where("isOnline","==", true)
               setQueryState({
                   isLoading:true,
                   errorMessage:"",
                   docSnapshots:null
            })
               ///short query of getting the fields of the collection(database):
               const snapshot = await db.collection("users").get();
               const docSnapshots = snapshot.docs;
               setQueryState({
                isLoading:false,
                errorMessage:"",
                docSnapshots
         }) 
               
               ///The output of the snapshot/query collection:
               ///Testing purposes
        //    console.log(`Found ${docSnapshots.size}X user(s)`)
        //    const docs = docSnapshots.docs;
        //    docs.forEach((docSnapshot)=>{
        //    console.log(docSnapshot.id, docSnapshot.data());
        //    })

           }catch(error){
            setQueryState({
                isLoading:false,
                errorMessage:"Can't connect to the database.",
                docSnapshots:null,
         });
           console.error(error)
           }
        }
        getAllUsers();
    },[])
    
    //Logic for displaying the data:
    const {
        isLoading,
        errorMessage,
        docSnapshots
    } = queryState;

    let contents;
    if(isLoading) contents = "Loading...";
    else if(errorMessage) contents = <p>{errorMessage}</p>;
    //displays all the data(with some errors)
    else if (docSnapshots==null) contents =""
    else contents = docSnapshots.map((doc)=> <User key={doc.id} data={doc.data()} />)
    
    return( 
        <div>
            <h3>See All the users click button below:</h3>
            <p>
                {contents}
            </p>
                   
        </div>
    )

}
export default GetAllUsers;

// Other JS code from index.js file:
//////////////////////////////////////////////////////////////////////

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