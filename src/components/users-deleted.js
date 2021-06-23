function Users_deleted({data}){
    return(
        <div>
            <p>
                <div>
                   <p>{data.firstName}{data.lastName} has been removed!</p> 
                </div>
            </p>
        </div>
    )
}
export default Users_deleted;