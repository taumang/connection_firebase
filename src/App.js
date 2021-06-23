import React, {useEffect} from "react"
import Connection from "./components/connection";
import GetOneUser from "../src/components/get-one-user"
import './App.css';
import "semantic-ui-css/semantic.min.css";
import firebase from "./data/firebase";
import CreatNewUser from "./components/create-new-user";
import UpdateUser from "./components/update-user";
import DeleteUser from "./components/delete-user";

function App() {
  return (
    <div className="App">
     <div>
     <CreatNewUser />
     </div>
     <GetOneUser /> 
     <Connection />
     <div>
       <UpdateUser />
     </div>
     <div>
       <DeleteUser/>
     </div>
     
    </div>
  );
}

export default App;
