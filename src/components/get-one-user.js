import{useState} from "react";
import{db} from "../data/firebase";
import isLoading from "is-loading";
import User from "./user";


function GetOneUser(){ 
   //error handlers for the when the user's iD is being retived/fetched
    const [queryState, setQueryState] = useState({
        isLoading:false,
        errorMessage:"",
        docSnapshot:null
    });
    
    const [userId,setUserId] = useState("");

    const Clicking = async () =>{
    try{
        //if there are no errors on UserID being fetched then code below will run:
        setQueryState({
            isLoading:true, 
            errorMessage:"", 
            docSnapshot:null })
        const docSnapshot = await db.collection("users").doc(userId).get();
        
        
        setQueryState({
            isLoading:false,
            errorMessage:"",
            docSnapshot })
        
        if(!docSnapshot.exists){
        console.log(`User ${userId} does not exist!!`);

        }else{
        console.log(`User of this id:${docSnapshot.id} is found`);
        console.log(docSnapshot.data());
        }
   }catch(error){
       setQueryState({
            isLoading:false,
            errorMessage:"Can't connect to the database try again",
            docSnapshot:null })
        console.error(error)
   }
}

    //display the contents in the page:
    const {isLoading,errorMessage,docSnapshot} = queryState;

    let contents;
    if(isLoading) contents = "Loading....";
    else if(errorMessage) contents = <p>{errorMessage}</p>;
    else if(docSnapshot === null) contents = <p>Search for user to see results</p>
    else if (!docSnapshot.exists) contents = <p>User not found!</p>

    //change the else contents to load the user component to display the data:
    // else contents = <p>{docSnapshot.id}</p>
    //This is the changed version:
    else contents = <User data={docSnapshot.data()} />


    return(
        <div>
            <h3>Get the user:</h3>
            <label>
                User ID: <input 
                type="text" 
                value={userId} 
                onChange={(e)=> setUserId (e.target.value)} />
            </label>
            <button onClick={Clicking}>Search</button>
            
            <div>
            {// to display the contents created.
            contents
            }
            </div>
            
        </div>
    )

}
export default GetOneUser;


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