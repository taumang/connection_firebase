import { useState } from "react";
import { db } from "../data/firebase";
import User from "./user";

function UpdateUser () {
   const [userId, setUserId] = useState("");
   const [lastName,setLastName] = useState("");
   const [isOnline,setIsOnline] = useState(Boolean);

   const Clicking = async () =>{
       try {
           await db.collection("users").doc(userId).update({
               isOnline,
               lastName,
           })
           alert(`User ${userId} has been updated!`);
       } catch (error) {
           alert(error);
       }
   }
   
   
   
   
    return(
        <div>
            <h2>Update/Change User Data:</h2>
            <label>
                User ID: <input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)} />
            </label>
            <label>
                Last Name: <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
            </label>
            <label>
                Is Online?{" "}
                <input type="checked" checked={isOnline} onChange={(e)=>setIsOnline(e.target.checked)} />
            </label>
            <button onClick={Clicking}>Update</button>

        </div>
        
    );
}
<User/>
export default UpdateUser;

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