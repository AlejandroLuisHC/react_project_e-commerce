import { useReducer, useEffect } from 'react';
import userReducer from '../reducers/userReducer';
import UserContext from './UserContext';

const UserProvider = ({ children }) => { 
    let defaultUser = {
        username: "Guest", 
    };
    defaultUser = JSON.parse(sessionStorage.getItem('user')) ?? defaultUser;
    
    const [user, userDispatch] = useReducer(userReducer, defaultUser);

    useEffect(()=>{
        const userTimeout = () => setTimeout(() => {
            userDispatch({type: "@user/reset"})
        }, 24 * 3.6e6);
        clearTimeout(userTimeout);
        userTimeout();
    }, [user, ])
    
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