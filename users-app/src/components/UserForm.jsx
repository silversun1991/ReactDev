import { useState } from "react";

export const UserForm = ( {handlerAddUser, initialUserForm} ) =>{

    const[userForm, setUserForm] = useState(initialUserForm);

    const { username,password,email } = userForm; 

    const onInputChange = ({target}) => {
        //console.log(target.value);

        const{ name, value } = target;
        setUserForm({...userForm,[name]: value});
        
    }

    const onSubmit = (event) =>{
        event.preventDefault();// con esto no actualiza la pagina al momento de dar el subit del boton

        if(!username || !password || !email){
            alert('Todos los campos son obligatorios'); 
            return;
        }

        //console.log(userForm);
        //guardar la lista de usuarios
        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    }

    return(
        <form  onSubmit={ onSubmit }>
            <input className="form-control my-3 w-75" 
                placeholder="Username"
                name = "username"
                value={username}
                onChange={ onInputChange }
            />
            <input className="form-control my-3 w-75" 
                placeholder="Password"
                type="password"
                name = "password"
                value={password}
                onChange={ onInputChange }
            />
            <input className="form-control my-3 w-75" 
                placeholder="Email"
                name = "email"
                value={email}
                onChange={ onInputChange }
            />

            <button className="btn btn-primary"
            type="submit">
                Crear
            </button>
        </form>
    )
}