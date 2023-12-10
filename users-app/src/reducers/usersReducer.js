
export const usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'addUser':
            
            return [
                ...state, 
                {
                    ...action.payload,
                    id: new Date().getTime(),
                }
            ];
        
        case 'removeUser':
            return state.filter(user => user.id !== action.payload); // elimina un usuariopor id, filter devulve un nuevo arreglo
    
        default:
            return state;
    }
}