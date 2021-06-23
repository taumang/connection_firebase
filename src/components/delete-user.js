import {db} from "../data/firebase";
import{useState,useEffect} from "react";
import isLoading from "is-loading";
import Users_deleted from "./users-deleted";

function DeleteUser () {
   const [queryState,setQueryState] = useState({
       isLoading:false,
       errorMessage:"",
       docSnapshots:null
   });
   const [userId,setUserId] = useState("");

   const Clicking = async () =>{
       try {
           setQueryState({
               isLoading:true,
               errorMessage:"",
               docSnapshots:null
           })
           const docSnapshots = await db.collection("users").doc(userId).delete();

           setQueryState({
               isloading:false,
               errorMessage:"",
               docSnapshots
           })

        //    if (!docSnapshots.exists) {
        //     console.log(`The User has already been removed or doesn't exists`)
        //    }else{
        //     console.log(`UserId ${docSnapshots.id}is removed`);
        //     console.log(docSnapshots.data());
        //    }
       } catch (err) {
           setQueryState({
               isLoading:false,
               errorMessage:"",
               docSnapshots:null
           })
           console.error(err)
       }
   }

    const {isLoading,errorMessage,docSnapshots} = queryState;

    let contents;
    if(isLoading) contents = "Loading.....";
    else if(errorMessage) contents = <p>{errorMessage}</p>
    // else if(docSnapshots === null) contents = <p>Use text box to delete user ID</p>
    // else if (!docSnapshots.exists) contents = <p>User already removed</p>
    else if (docSnapshots ==null) contents = ""
    else contents = <Users_deleted data={docSnapshots.data()}/>

    return(
        <div>
            <h2>Deleted users:</h2>
            <label>
                User ID: <input 
                          type="text"
                          value={userId}
                          onChange={(e)=>setUserId(e.target.value)} />
            </label>
            <button onClick={Clicking}>Delete User</button>
        <div>
            {contents}
        </div>
        
        </div>
        
    );
}

export default DeleteUser;

