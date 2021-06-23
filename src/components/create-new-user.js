import { useEffect, useState } from "react";
import { db } from "../data/firebase";
import isLoading from "is-loading";
import User from "./user";


function CreatNewUser(){
    const [queryState,setQueryState] = useState({
        isLoading:false,
        errorMessage:"",
        docRef:null
    });

    
    const [firstName,setFirstName]= useState(String);
    const [lastName, setLastName] = useState(String);
    const [isOnline, setIsOnline] = useState(Boolean);
    const [highScore, setHighScore] = useState(Number);
    const [topics,setTopics] = useState([,]);

    const Clicking = async () => {
        try{

            setQueryState({
                isloading:true,
                errorMessage:"",
                docRef:null
            })
            const docRef = await db.collection("users").add({
                firstName,
                lastName,
                isOnline,
                highScore,
                topics,
            });
            alert(`User id:${docRef.id} Added successfully `)
        }catch(error){
            
            setQueryState({
                isloading:false,
                errorMessage:"Can't connect to the database",
                docRef:null
            })
            console.error(error)
        }
    }
    const {isloading,errorMessage,docRef} = queryState;

    let contents;
    if(isloading) contents = "Loading...";
    else if (errorMessage) contents = <p>{errorMessage}</p>;
    else if (docRef === null) contents = <p></p>
    else contents = <User data={docRef.data()} /> 

    
    return(
    <div>
        <h3>Create New User:</h3>
        <label>
            First Name:{" "}
            <input 
            type="text" 
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)} />
        </label>
        <label>
            Last Name:{" "}
            <input 
            type="text" 
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)} />
        </label>
        <label>
            Status:{Boolean}
            <input 
            type="text"
            value={isOnline} 
            onChange={(e)=>setIsOnline(e.target.value)} />
        </label>
        <label>
            High Score:
            <input 
            type="number"
            value={highScore} 
            onChange={(e)=>setHighScore(e.target.value)} />
        </label>
        <label>
            Topics:
            <input 
            type="text"
            name="array[,]"
            value={topics} 
            onChange={(e)=>setTopics(e.target.value)} />
        </label>
        <div>
            <button onClick={Clicking}>Create</button>
        </div>
        
        <div>
            {contents}
        </div>
    </div>
    
    )
}
export default CreatNewUser;


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