import { useSelector } from "react-redux"
import Login from '../pages/Login';

const PrivateRoutes = ({ children }) => {
    const isLogged = useSelector((state) => state.userData.user.isLogged)    

    return (
        isLogged ? children : <Login />      
    )        
}

export default PrivateRoutes