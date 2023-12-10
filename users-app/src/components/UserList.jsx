import { UserRow } from "./UserRow"

export const UserList = ({handlerRemoveUser, users =[]}) =>{

    return (
  
    
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th className="">#</th>
                    <th className="">username</th>
                    <th className="">email</th>
                    <th className="">update</th>
                    <th className="">remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({id, username, email}) => (
                        <UserRow key={id}
                            id={id}
                            username={username}
                            email={email}
                            handlerRemoveUser={handlerRemoveUser}
                        />
                    )) 
                }
            </tbody>
        </table>
        
    
        
    )

}