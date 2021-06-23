function User({data}){
    return(
    <div>
        <p>
            <div>
            {data.firstName} {data.lastName} is now  {data.isOnline ? "Online":"Offline"}
            </div>
            
            <div>
            {data.firstName}'s high Score is: {data.highScore}
            </div>
            
        </p>
       
    </div>
    );
}

export default User;