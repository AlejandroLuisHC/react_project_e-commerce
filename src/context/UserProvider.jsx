import { useReducer } from 'react';
import userReducer from '../reducers/userReducer';
import UserContext from './UserContext';

const UserProvider = ({ children }) => { 
    let defaultUser = {
        username: "Guest", 
    };
    defaultUser = JSON.parse(sessionStorage.getItem('user')) ?? defaultUser;
    
    const [user, userDispatch] = useReducer(userReducer, defaultUser);

    const providerValue = {
        user,
        userDispatch,
    }
    return (
        <UserContext.Provider value={providerValue}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider