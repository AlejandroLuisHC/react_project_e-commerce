import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import fetchCreateUser from "../../../api/fetchCreateUser"
import fetchUsers from "../../../api/fetchUsers"
import useFormController from "../../../hooks/useFormController"

const ResgisterForm = () => {
    const styleForm = {
        color: "#eee",
        width: "38vw",
    }
    const styleText = {
        color: "#eee",
    }
    const confirmStyle = {
        color: "#5d5",
        fontSize: "1.8em"
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

    // Manage of values by "useFormController()" <-- custom hook
    const { form, changeValue } = useFormController()

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
    const validUsername     = (form.username.length > 4) && isNewUsername(form.username) ? true : false;
    const validEmail        = (form.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) && isNewEmail(form.email) ? true : false;
    const validPwd          = form.password.length > 5 ? true : false;
    const validPwdCheck     = (form.passwordCheck > 5) && (form.passwordCheck === form.password) ? true : false;
    const validFullName     = (form.fullName.length > 5) && (form.fullName.includes(" ")) ? true : false;
    const validCountry      = form.country.length > 3 ? true : false;
    const validAddress      = form.address.length > 0 ? true : false;
    const validPostalCode   = form.postalCode.length === 5 ? true : false;
    const validPhone        = form.phone.length === 9 ? true : false;

    const inputCheck = (a, b, c, d, e, f, g, h, i) => {
        const ok = (a && b && c && d && e && f && g && h && i) ? true : false;
        return ok;
    };

    const btnState           = inputCheck(validUsername, validEmail, validPwd, validPwdCheck, validCountry, validAddress, validPostalCode, validFullName, validPhone) ? "btn btn-outline-success" : "btn btn-outline-warning";
    const enableSubmit       = inputCheck(validUsername, validEmail, validPwd, validPwdCheck, validCountry, validAddress, validPostalCode, validFullName, validPhone) ? "" : "disabled";
    const usernameState      = validUsername ? "form-control is-valid" : "form-control is-invalid"
    const emailState         = validEmail ? "form-control is-valid" : "form-control is-invalid"
    const pwdState           = validPwd ? "form-control is-valid" : "form-control is-invalid"
    const pwdCheckState      = validPwdCheck ? "form-control is-valid" : "form-control is-invalid"
    const fullNameState      = validFullName ? "form-control is-valid" : "form-control is-invalid"
    const countryState       = validCountry ? "form-control is-valid" : "form-control is-invalid"
    const addressState       = validAddress ? "form-control is-valid" : "form-control is-invalid"
    const postalCodeState    = validPostalCode ? "form-control is-valid" : "form-control is-invalid"
    const phoneState         = validPhone ? "form-control is-valid" : "form-control is-invalid"
    const invalidMsgUsername = form.username === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgEmail    = form.email === "" ? "d-none" : "invalid-feedback";
    const invalidMsgPwd      = form.password === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgPwdCheck = form.passwordCheck=== "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgFullName = form.fullName === "" ? "d-none" : "invalid-feedback";
    const invalidMsgCountry  = form.country === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgAddress  = form.address === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgPostal   = form.postalCode === "" ? "d-none" : "invalid-feedback";
    const invalidMsgPhone    = form.phone === "" ? "d-none" : "invalid-feedback";
    const confirmChanges = (e) => {
        if (inputCheck(validUsername, validEmail, validPwd, validPwdCheck, validCountry, validAddress, validPostalCode, validFullName, validPhone)) {
            const msg = document.getElementById("confirm");
            msg.className = "d-flex justify-content-center";
            setTimeout(() => {
                msg.className = "d-none";
            }, 1990);
        }
    }

    // Post new user to the database 
    const [sendLogin, setSendLogin] = useState(null)
    useEffect(()=>{
        setSendLogin(prev => prev = null)
    }, [sendLogin])

    const createUser = async (user) => {
        if (inputCheck(validUsername, validEmail, validPwd, validPwdCheck, validCountry, validAddress, validPostalCode, validFullName, validPhone)) {
            await fetchCreateUser(user);
            confirmChanges();
            setTimeout(() => {
                setSendLogin(prev => prev = true)
            }, 2000);            
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
                    createUser(form);
                }}
            >
                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Username: 
                        <input className={usernameState} autoComplete="off" name="username" value={form.username} type="text" onChange={changeValue} autoFocus required/>
                        <div className={invalidMsgUsername}>
                            Not a valid username
                        </div>
                    </label>
                </div>
                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Email: 
                        <input className={emailState} autoComplete="off" name="email" value={form.email} onChange={changeValue} type="email" required/>
                        <div className={invalidMsgEmail}>
                            Not a valid email
                        </div>
                    </label>
                </div>
                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Password: 
                        <input className={pwdState} autoComplete="off" name="password" value={form.password} onChange={changeValue} type="password" required/>
                        <div className={invalidMsgPwd}>
                            Not a valid password
                        </div>
                    </label>
                </div>
                <div className='mb-5 form-group'>
                    <label className='label col-12'>
                        Password check: 
                        <input className={pwdCheckState} autoComplete="off" name="passwordCheck" value={form.passwordCheck} onChange={changeValue} type="password" required/>
                        <div className={invalidMsgPwdCheck}>
                            Passwords don't match 
                        </div>
                    </label>
                </div>
                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Full name: 
                        <input className={fullNameState} autoComplete="off" name="fullName" value={form.fullName} onChange={changeValue} type="text" required/>
                        <div className={invalidMsgFullName}>
                            Not a valid name
                        </div>
                    </label>
                </div>
                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Country: 
                        <input className={countryState} autoComplete="off" name="address" value={form.country} onChange={changeValue} type="text" required/>
                        <div className={invalidMsgCountry}>
                            Not a valid country
                        </div>
                    </label>
                </div>
                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Address: 
                        <input className={addressState} autoComplete="off" name="address" value={form.address} onChange={changeValue} type="text" required/>
                        <div className={invalidMsgAddress}>
                            Not a valid address
                        </div>
                    </label>
                </div>
                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Postal Code: 
                        <input className={postalCodeState} autoComplete="off" name="postalCode" value={form.postalCode} onChange={changeValue} type="number" required/>
                        <div className={invalidMsgPostal}>
                            Not a valid postal code
                        </div>
                    </label>
                </div>
                <div className='mb-3 form-group'>
                    <label className='label col-12'>
                        Phone: 
                        <input className={phoneState} autoComplete="off" name="phone" value={form.phone} onChange={changeValue} type="tel" required/>
                        <div className={invalidMsgPhone}>
                            Not a valid phone number
                        </div>
                    </label>
                </div>
                <div className='mb-3 d-flex justify-content-center form-group'>
                    <input className={btnState} disabled={enableSubmit} type="submit" value="Submit" />
                </div>
                <div id="confirm" className="d-none">
                    <p style={confirmStyle}>Account created successfully!</p>
                </div>
            </form>
        </fieldset>
        {sendLogin && <Navigate to="/login" />}
        </>
    )
}

export default ResgisterForm