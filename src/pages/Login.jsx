import { useReducer, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import fetchUsers from '../api/fetchUsers';
import logReducer from '../reducers/logReducer';
import { logInUser } from '../redux/features/user/userSlice';

const Login = () => {
    const styleForm = {
        color: "#eee",
        width: "25vw",
    }
    const styleMain = {
        marginTop: "30px",
        gridColumn: "2",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "start",
        alignItems: "center",
        gap: "40px",
    }
    const styleH2 = {
        color: "#eee",
    }
    const styleP = {
        color: "#eee",
    }
    
    // Gathering the existing users in the system
    const [existingUsers, setExistingUsers] = useState([])
    
    useEffect(() => {
        const retrieveUsers = async() => {
            const users = await fetchUsers();
            setExistingUsers(users)
        }
        retrieveUsers();
    }, [])

    // Manage of values by useReducer()
    const initialState = {
        username: "",
        pwd: ""
    }
    const [logInput, dispatch] = useReducer(logReducer, initialState)

    // Manage inputs validation state
    const validUsername = logInput.username.length > 0 ? true : false;
    const validPwd = logInput.pwd.length > 5 ? true : false;
    
    const inputCheck = (a, b) => {
        const ok = (a && b) ? true : false;
        return ok;
    };
    
    const usernameState = validUsername ? "form-control is-valid" : "form-control is-invalid"
    const pwdState      = validPwd ? "form-control is-valid" : "form-control is-invalid"
    const btnState      = inputCheck(validUsername, validPwd) ? "btn btn-outline-success col-8" : "btn btn-outline-warning col-8";
    const enableSubmit  = inputCheck(validUsername, validPwd) ? "" : "disabled";
    const invalidMsgUsername = logInput.username === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgPwd = logInput.pwd === "" ? "d-none" : "invalid-feedback"; 
    
    // Submit functions
    const dispatchUser = useDispatch();

    const [sendProfile, setSendProfile] = useState(null)
    useEffect(()=>{
        setSendProfile(prev => prev = null)
    }, [sendProfile])

    const validUser = (username, pwd) => {
        const cb = u => {
            if ((u.username || u.email) === username) {
                if (u.password === pwd) {
                    return u
                }
            }
        }
        return existingUsers.filter(cb)
    }
    const payload = validUser(logInput.username, logInput.pwd)[0];
    
    const submitUser = e => {
        e.preventDefault();
        if (validUser(logInput.username, logInput.pwd).length) {
            dispatchUser(logInUser(payload));
            setSendProfile(prev => prev = true)
        } else {
            alert("Dónde va', pisha?");
        }
    }
    
    return (
        <main style={styleMain}>
            <div className='d-flex flex-column align-items-center'>
                <h2 style={styleH2}>Please, <b>log in</b> to access to further features</h2>
                <p style={styleP}>Not having an account, <b>sign up for free</b></p>
            </div>            
            <fieldset>
                <form style={styleForm}
                    onSubmit={submitUser} 
                >
                    <div className='mb-3 form-group'>
                        <label className='label col-12'>
                            Username or Email: 
                            <input className={usernameState} onChange={e => dispatch({ type: 'CH_USERNAME', payload: e.target.value })} value={logInput.username} autoComplete="off" type="text" name="username" required/>
                            <div className={invalidMsgUsername}>
                                Not a valid username
                            </div>
                        </label>
                    </div>
                    <div className='mb-3 form-group'>
                        <label className='label col-12'>
                            Password:
                            <input className={pwdState} onChange={e => dispatch({ type: 'CH_PWD', payload: e.target.value })} value={logInput.pwd} type="password" name="pwd" required/>
                            <div className={invalidMsgPwd}>
                                Not a valid password
                            </div>
                        </label>
                    </div>
                    <div className='mb-3 form-group d-flex justify-content-center'>
                        <input className={btnState} disabled={enableSubmit} type="submit" value="Log in" />
                    </div>
                    <div className='mb-3 form-group d-flex justify-content-center'>
                        <Link to="../register" className="btn btn-secondary col-8">Sign up</Link>
                    </div>
                </form>
            </fieldset>
            {sendProfile && <Navigate to="/profile" replace={true} />}
        </main>
    )
}

export default Login