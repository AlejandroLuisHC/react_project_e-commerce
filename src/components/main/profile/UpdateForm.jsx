import { useState, useEffect, useReducer, useContext } from "react"
import fetchUpdateUser from "../../../api/fetchUpdateUser"
import fetchUsers from "../../../api/fetchUsers"
import UserContext from "../../../context/UserContext"
import regReducer from "../../../reducers/regReducer"

const UpdateForm = () => {
    const styleForm = {
        color: "#eee",
        width: "100%",
    }
    const styleText = {
        color: "#eee",
        marginBottom: "30px",
        textShadow: "1px 1px 5px #00000088"
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

    // Upload default form values depending on the user
    const { user, userDispatch } = useContext(UserContext);

    // Manage of values by useReducer()
    const initialState = {
        username: user.username,
        email: user.email,
        password: user.password,
        passwordCheck: user.passwordCheck,
        fullName: user.fullName,
        country: user.country,
        address: user.address,
        postalCode: user.postalCode,
        phone: user.phone,
        id: user.id
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
    const validUsername     = ((input.username.length > 4) && isNewUsername(input.username)) || input.username === user.username ? true : false;
    const validEmail        = ((input.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) && isNewEmail(input.email)) || input.email === user.email ? true : false;
    const validFullName     = (input.fullName.length > 5) && (input.fullName.includes(" ")) ? true : false;
    const validCountry      = input.country.length > 3 ? true : false;
    const validAddress      = input.address.length > 0 ? true : false;
    const validPostalCode   = input.postalCode.length === 5 ? true : false;
    const validPhone        = input.phone.length === 9 ? true : false;

    const inputCheck = (a, b, c, d, e, f, g) => {
        const ok = (a && b && c && d && e && f && g) ? true : false;
        return ok;
    };

    const btnState           = inputCheck(validUsername, validEmail, validCountry, validAddress, validPostalCode, validFullName, validPhone) ? "btn btn-outline-success" : "btn btn-outline-warning";
    const enableSubmit       = inputCheck(validUsername, validEmail, validCountry, validAddress, validPostalCode, validFullName, validPhone) ? "" : "disabled";
    const usernameState      = validUsername ? "form-control is-valid" : "form-control is-invalid"
    const emailState         = validEmail ? "form-control is-valid" : "form-control is-invalid"
    const fullNameState      = validFullName ? "form-control is-valid" : "form-control is-invalid"
    const countryState       = validCountry ? "form-control is-valid" : "form-control is-invalid"
    const addressState       = validAddress ? "form-control is-valid" : "form-control is-invalid"
    const postalCodeState    = validPostalCode ? "form-control is-valid" : "form-control is-invalid"
    const phoneState         = validPhone ? "form-control is-valid" : "form-control is-invalid"
    const invalidMsgUsername = input.username === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgEmail    = input.email === "" ? "d-none" : "invalid-feedback";
    const invalidMsgFullName = input.fullName === "" ? "d-none" : "invalid-feedback";
    const invalidMsgCountry  = input.country === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgAddress  = input.address === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgPostal   = input.postalCode === "" ? "d-none" : "invalid-feedback";
    const invalidMsgPhone    = input.phone === "" ? "d-none" : "invalid-feedback";
    const confirmChanges = (e) => {
        if (inputCheck(validUsername, validEmail, validCountry, validAddress, validPostalCode, validFullName, validPhone)) {
            const msg = document.getElementById("confirm");
            msg.className = "d-flex justify-content-center";
            setTimeout(() => {
                msg.className = "d-none";
            }, 2000);
        }
    }

    // Put current user to the database
    const updateUser = async (u, id) => {
        if (inputCheck(validUsername, validEmail, validCountry, validAddress, validPostalCode, validFullName, validPhone)) {
            await fetchUpdateUser(u, id); 
        } else {
            console.log('Something when wrong while submitting the register');
        }
    }

    return (
        <div>
            <h2 style={styleText}>Update your information:</h2>
            <fieldset>
                <form style={styleForm}
                    onSubmit={(e) => {
                        e.preventDefault();
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
                            Full name: 
                            <input className={fullNameState} autoComplete="off" name="fullName" value={input.fullName} onChange={e => dispatch({ type: 'CH_FULLNAME', value: e.target.value })} type="text" required/>
                            <div className={invalidMsgFullName}>
                                Not a valid name
                            </div>
                        </label>
                    </div>
                    <div className='mb-3 form-group'>
                        <label className='label col-12'>
                            Country: 
                            <input className={countryState} autoComplete="off" name="country" value={input.country} onChange={e => dispatch({ type: 'CH_COUNTRY', value: e.target.value })} type="text" required/>
                            <div className={invalidMsgCountry}>
                                Not a valid country
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
                        <input className={btnState} data-bs-toggle="modal" data-bs-target="#confirmUpdateModal" disabled={enableSubmit} type="submit" value="Submit" />
                    </div>
                    <div id="confirm" className="d-none">
                        <p style={confirmStyle}>User updated successfully!</p>
                    </div>
                </form>
            </fieldset>

            <div className="modal fade" id="confirmUpdateModal" tabIndex="-1" aria-labelledby="confirmUpdateModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-white">
                        <div className="modal-header">
                            <h5 className="modal-title">WARNING</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>You are about to change your profile information. Are you sure?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button data-bs-dismiss="modal" onClick={() => {
                                updateUser(input, user.id);
                                userDispatch({ type: 'LOG', value: input });
                                confirmChanges();
                            }} type="button" className="btn btn-outline-success">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateForm