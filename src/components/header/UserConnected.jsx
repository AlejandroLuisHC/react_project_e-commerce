import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PersonCircle } from 'react-bootstrap-icons';
import { BoxArrowLeft } from 'react-bootstrap-icons';
import UserContext from '../../context/UserContext';

const UserConnected = ({ user }) => {
    const style = {
        color: "#eee",
        textDecoration: "none",
        fontSize: "1.2em",
        display: "flex",
        alignItems: "center",
        gap: "8px"
    }
    const { username } = user;
    const { userDispatch } = useContext(UserContext);
    const closeSession = () => {
        userDispatch({ type: 'RESET' });
        window.location.replace('/') 
    }
    return (
        <div className='d-flex align-items-center justify-content-start gap-3'>
            <Link to={username !== "Guest" ? "profile" : "login"} style={style}><span style={{fontSize: "30px"}}><PersonCircle/></span> {username !== "Guest" ? username : "Log in"}</Link>
            <button className="btn btn-outline-danger btn-sm d-flex justify-content-center align-items-center" onClick={closeSession}><BoxArrowLeft/></button>
        </div>
    )
}

export default UserConnected