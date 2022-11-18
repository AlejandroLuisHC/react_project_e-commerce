import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { PersonCircle } from 'react-bootstrap-icons';
import { BoxArrowLeft } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/features/user/userSlice';

const UserConnected = () => {
    const style = {
        color: "#eee",
        textDecoration: "none",
        fontSize: "1.2em",
        display: "flex",
        alignItems: "center",
        gap: "8px"
    }
    const username = useSelector((state) => state.user.user.username)
    const dispatch = useDispatch();

    const [sendHome, setSendHome] = useState(null)
    useEffect(()=>{
        setSendHome(prev => prev = null)
    }, [sendHome])
    const closeSession = () => {
        dispatch(logOutUser());
        setSendHome(prev => prev = true)
    }
    return (
        <div className='d-flex align-items-center justify-content-start gap-3'>
            <Link to={username !== "Guest" ? "profile" : "login"} style={style}><span style={{fontSize: "30px"}}><PersonCircle/></span> {username !== "Guest" ? username : "Log in"}</Link>
            <button className="btn btn-outline-danger btn-sm d-flex justify-content-center align-items-center" onClick={closeSession}><BoxArrowLeft/></button>
            {sendHome && <Navigate to="/" replace={true}/>}
        </div>
    )
}

export default UserConnected