import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
    const isAdmin = useSelector((state) => state.userData.user.isAdmin)  
    
    return (
        isAdmin ? children : <Navigate to='/' />      
    )        
}

export default AdminRoutes