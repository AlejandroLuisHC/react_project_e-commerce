import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import fetchUsers from '../../../api/fetchUsers'
import useFormController from '../../../hooks/useFormController'
import { logInUser } from '../../../redux/features/userData/userSlice'

const LoginForm = () => {
    const styleForm = {
        color: "#eee",
        width: "25vw",
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

    // Manage of values by "useFormController()" <-- custom hook
    const { form, changeValue } = useFormController()

    // Manage inputs validation state
    const validUsername = form.username.length > 0 ? true : false;
    const validPwd = form.password.length > 5 ? true : false;

    const inputCheck = (a, b) => {
        const ok = (a && b) ? true : false;
        return ok;
    };

    const usernameState      = validUsername ? "form-control is-valid" : "form-control is-invalid"
    const pwdState           = validPwd ? "form-control is-valid" : "form-control is-invalid"
    const btnState           = inputCheck(validUsername, validPwd) ? "btn btn-outline-success col-8" : "btn btn-outline-warning col-8";
    const enableSubmit       = inputCheck(validUsername, validPwd) ? "" : "disabled";
    const invalidMsgUsername = form.username === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgPwd      = form.password === "" ? "d-none" : "invalid-feedback"; 

    // Submit functions
    const dispatch = useDispatch();

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
    const payload = validUser(form.username, form.password)[0];

    const submitUser = e => {
        e.preventDefault();
        if (validUser(form.username, form.password).length) {
            dispatch(logInUser(payload));
            setSendProfile(prev => prev = true)
        } else {
            alert("Dónde va', pisha?");
        }
    }

    return (
        <>
        <fieldset>
            <form style={styleForm}
                onSubmit={submitUser} 
            >
                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Username or Email: 
                        <input className={usernameState} onChange={changeValue} value={form.username} autoComplete="off" type="text" name="username" autoFocus required/>
                        <div className={invalidMsgUsername}>
                            Not a valid username
                        </div>
                    </label>
                </div>
                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Password:
                        <input className={pwdState} onChange={changeValue} value={form.password} type="password" name="password" required/>
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
        </>
    )
}

export default LoginForm