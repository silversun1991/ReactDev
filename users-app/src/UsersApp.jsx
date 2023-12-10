import { useReducer } from "react";
import { UserForm } from "./components/UserForm";
import { UserList } from "./components/UserList";
import { usersReducer } from "./reducers/usersReducer";



const initialUsers = [
    {
        id: '1',
        username: 'Ivan',
        password: '1234',
        email: 'doncorras@gmail.com'

    },
];

const initialUserForm = {
    username:'',
    password: '',
    email: '',
}

export const UsersApp =  () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    const handlerAddUser = (user) => {
        //console.log(user);
        dispatch({
            type: 'addUser',
            payload: user,
        })
    }

    const handlerRemoveUser = (id) => {
        //console.log(id);
        dispatch({
            type: 'removeUser',
            payload: id,
        })
    }

    return (<div className="container my-4">
        <h2>User App</h2>

        <div className="row">
            <div className="col">
                <UserForm
                    handlerAddUser ={handlerAddUser}
                    initialUserForm = {initialUserForm}/>
            </div>
            <div className="col">
                {
                    users.length === 0 
                        ? <div className="alert alert-warning">No hay usuarios en el sistema!</div> 
                        : <UserList 
                        handlerRemoveUser = {handlerRemoveUser}
                        users={users}/>
                }
                
            </div>
        </div>

        
    </div>);
}