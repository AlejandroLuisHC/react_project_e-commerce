import { useState, useEffect, useReducer } from "react"
import fetchCreateUser from "../../../api/fetchCreateUser"
import fetchUsers from "../../../api/fetchUsers"
import regReducer from "../../../reducers/regReducer"

const ResgisterForm = () => {
    const styleForm = {
        color: "#eee",
        width: "38vw",
    }
    const styleText = {
        color: "#eee",
    }

    // Gathering the existing users in the system
    const [existingUsers, setExistingUsers] = useState([])
    
    useEffect(() => {
        const retrieveUsers = async() => {
            const usersDB = await fetchUsers();
            setExistingUsers(usersDB)
        }
        retrieveUsers();
    }, [])

    // Manage of values by useReducer()
    const initialState = {
        username: "",
        email: "",
        password: "",
        passwordCheck: "",
        fullName: "",
        address: "",
        postalCode: "",
        phone: "",
        id: ""
    }
    const [input, dispatch] = useReducer(regReducer, initialState)

    // Manage inputs validation state
    const isNewUsername = (username) => {
        const cb = u => {
            if (u.username === username) {
                return u
            }
        }
        const pickedUser = existingUsers.filter(cb)     
        return pickedUser.length === 0 ? true : false
    }
    const isNewEmail = (email) => {
        const cb = u => {
            if (u.email === email) {
                return u
            }
        }
        const pickedUser = existingUsers.filter(cb)     
        return pickedUser.length === 0 ? true : false
    }
    const validUsername     = (input.username.length > 4) && isNewUsername(input.username) ? true : false;
    const validEmail        = (input.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) && isNewEmail(input.email) ? true : false;
    const validPwd          = input.password.length > 5 ? true : false;
    const validPwdCheck     = (input.passwordCheck > 5) && (input.passwordCheck === input.password) ? true : false;
    const validFullName     = (input.fullName.length > 5) && (input.fullName.includes(" ")) ? true : false;
    const validAddress      = input.address.length > 0 ? true : false;
    const validPostalCode   = input.postalCode.length === 5 ? true : false;
    const validPhone        = input.phone.length === 9 ? true : false;

    const inputCheck = (a, b, c, d, e, f, g, h) => {
        const ok = (a && b && c && d && e && f && g && h) ? true : false;
        return ok;
    };

    const btnState           = inputCheck(validUsername, validEmail, validPwd, validPwdCheck, validAddress, validPostalCode, validFullName, validPhone) ? "btn btn-outline-success" : "btn btn-outline-warning";
    const enableSubmit       = inputCheck(validUsername, validEmail, validPwd, validPwdCheck, validAddress, validPostalCode, validFullName, validPhone) ? "" : "disabled";
    const usernameState      = validUsername ? "form-control is-valid" : "form-control is-invalid"
    const emailState         = validEmail ? "form-control is-valid" : "form-control is-invalid"
    const pwdState           = validPwd ? "form-control is-valid" : "form-control is-invalid"
    const pwdCheckState      = validPwdCheck ? "form-control is-valid" : "form-control is-invalid"
    const fullNameState      = validFullName ? "form-control is-valid" : "form-control is-invalid"
    const addressState       = validAddress ? "form-control is-valid" : "form-control is-invalid"
    const postalCodeState    = validPostalCode ? "form-control is-valid" : "form-control is-invalid"
    const phoneState         = validPhone ? "form-control is-valid" : "form-control is-invalid"
    const invalidMsgUsername = input.username === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgEmail    = input.email === "" ? "d-none" : "invalid-feedback";
    const invalidMsgPwd      = input.password === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgPwdCheck = input.passwordCheck=== "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgFullName = input.fullName === "" ? "d-none" : "invalid-feedback";
    const invalidMsgAddress  = input.address === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgPostal   = input.postalCode === "" ? "d-none" : "invalid-feedback";
    const invalidMsgPhone    = input.phone === "" ? "d-none" : "invalid-feedback";

    // Post new user to the database 
    const createUser = async (user) => {
        if (inputCheck(validUsername, validEmail, validPwd, validPwdCheck, validAddress, validPostalCode, validFullName, validPhone)) {
            await fetchCreateUser(user); 
        } else {
            console.log('Something when wrong while submitting the register');
        }
    }

    return (
        <>
        <div className="col-6">
            <h2 style={styleText}>Sign up form</h2>
            <p style={styleText}>Please, complete the following information to successfully register your account.</p>
        </div>
        <fieldset>
            <form style={styleForm}
                onSubmit={(e) => {
                    e.preventDefault();
                    createUser(input);
                }}
            >
                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Username: 
                        <input className={usernameState} autoComplete="off" name="username" value={input.username} type="text" onChange={e => dispatch({ type: 'CH_USERNAME', value: e.target.value })} required/>
                        <div className={invalidMsgUsername}>
                            Not a valid username
                        </div>
                    </label>
                </div>
                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Email: 
                        <input className={emailState} autoComplete="off" name="email" value={input.email} onChange={e => dispatch({ type: 'CH_EMAIL', value: e.target.value })} type="email" required/>
                        <div className={invalidMsgEmail}>
                            Not a valid email
                        </div>
                    </label>
                </div>
                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Password: 
                        <input className={pwdState} autoComplete="off" name="password" value={input.password} onChange={e => dispatch({ type: 'CH_PWD', value: e.target.value })} type="password" required/>
                        <div className={invalidMsgPwd}>
                            Not a valid password
                        </div>
                    </label>
                </div>
                <div className='mb-5 form-group'>
                    <label className='label col-12'>
                        Password check: 
                        <input className={pwdCheckState} autoComplete="off" name="passwordCheck" value={input.passwordCheck} onChange={e => dispatch({ type: 'CH_PWD_CHECK', value: e.target.value })} type="password" required/>
                        <div className={invalidMsgPwdCheck}>
                            Passwords don't match 
                        </div>
                    </label>
                </div>

                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Full name: 
                        <input className={fullNameState} autoComplete="off" name="fullName" value={input.fullName} onChange={e => dispatch({ type: 'CH_FULLNAME', value: e.target.value })} type="text" required/>
                        <div className={invalidMsgFullName}>
                            Not a valid name
                        </div>
                    </label>
                </div>
                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Address: 
                        <input className={addressState} autoComplete="off" name="address" value={input.address} onChange={e => dispatch({ type: 'CH_ADDRESS', value: e.target.value })} type="text" required/>
                        <div className={invalidMsgAddress}>
                            Not a valid address
                        </div>
                    </label>
                </div>
                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Postal Code: 
                        <input className={postalCodeState} autoComplete="off" name="postalCode" value={input.postalCode} onChange={e => dispatch({ type: 'CH_POSTAL', value: e.target.value })} type="number" required/>
                        <div className={invalidMsgPostal}>
                            Not a valid postal code
                        </div>
                    </label>
                </div>
                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Phone: 
                        <input className={phoneState} autoComplete="off" name="phone" value={input.phone} onChange={e => dispatch({ type: 'CH_PHONE', value: e.target.value })} type="tel" required/>
                        <div className={invalidMsgPhone}>
                            Not a valid phone number
                        </div>
                    </label>
                </div>
                <div className='mb-3 d-flex justify-content-center form-group'>
                    <input className={btnState} disabled={enableSubmit} type="submit" value="Submit" />
                </div>
            </form>
        </fieldset>
        </>
    )
}

export default ResgisterForm