import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { PersonCircle, BoxArrowLeft, } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/features/userData/userSlice';
import { LinkProfile, SpanProfile } from '../style/headerStyle';

const UserConnected = () => {
    const user = useSelector((state) => state.userData.user)
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
            <LinkProfile to="profile">
                <SpanProfile><PersonCircle/></SpanProfile> 
                {user.isLogged ? user.username : "Log in"}
            </LinkProfile>
            <button className="btn btn-outline-danger btn-sm d-flex justify-content-center align-items-center" onClick={closeSession}><BoxArrowLeft/></button>
            {sendHome && <Navigate to="/" replace={true}/>}
        </div>
    )
}

export default UserConnected