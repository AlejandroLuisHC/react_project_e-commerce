import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import fetchUpdateUser from "../../../api/user/fetchUpdateUser"
import fetchUsers from "../../../api/user/fetchUsers"
import useFormController from "../../../hooks/useFormController"
import { logInUser } from "../../../redux/features/userData/userSlice"
import { H2 } from "../../style/H2"
import { PConfirm } from "../../style/PConfirm"
import { DivUserData, FormUpdate } from "../../style/profileStyle"

const UpdateForm = ({ user }) => {
    // Gathering the existing users in the system
    const [existingUsers, setExistingUsers] = useState([])
    
    useEffect(() => {
        const retrieveUsers = async() => {
            const usersDB = await fetchUsers();
            setExistingUsers(usersDB)
        }
        retrieveUsers();
    }, [])

    const dispatch = useDispatch();
    
    // Manage of values by "useFormController()" <-- custom hook
    const { form, changeValue } = useFormController(user)

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
    const validUsername     = ((form.username.length > 4) && isNewUsername(form.username)) || form.username === user.username ? true : false;
    const validEmail        = ((form.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) && isNewEmail(form.email)) || form.email === user.email ? true : false;
    const validFullName     = (form.fullName.length > 5) && (form.fullName.includes(" ")) ? true : false;
    const validCountry      = form.country.length > 3 ? true : false;
    const validAddress      = form.address.length > 0 ? true : false;
    const validPostalCode   = form.postalCode.length === 5 ? true : false;
    const validPhone        = form.phone.length === 9 ? true : false;

    const formCheck = (a, b, c, d, e, f, g) => {
        const ok = (a && b && c && d && e && f && g) ? true : false;
        return ok;
    };

    const btnState           = formCheck(validUsername, validEmail, validCountry, validAddress, validPostalCode, validFullName, validPhone) ? "btn btn-outline-success" : "btn btn-outline-warning";
    const enableSubmit       = formCheck(validUsername, validEmail, validCountry, validAddress, validPostalCode, validFullName, validPhone) ? "" : "disabled";
    const usernameState      = validUsername ? "form-control is-valid" : "form-control is-invalid"
    const emailState         = validEmail ? "form-control is-valid" : "form-control is-invalid"
    const fullNameState      = validFullName ? "form-control is-valid" : "form-control is-invalid"
    const countryState       = validCountry ? "form-control is-valid" : "form-control is-invalid"
    const addressState       = validAddress ? "form-control is-valid" : "form-control is-invalid"
    const postalCodeState    = validPostalCode ? "form-control is-valid" : "form-control is-invalid"
    const phoneState         = validPhone ? "form-control is-valid" : "form-control is-invalid"
    const invalidMsgUsername = form.username === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgEmail    = form.email === "" ? "d-none" : "invalid-feedback";
    const invalidMsgFullName = form.fullName === "" ? "d-none" : "invalid-feedback";
    const invalidMsgCountry  = form.country === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgAddress  = form.address === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgPostal   = form.postalCode === "" ? "d-none" : "invalid-feedback";
    const invalidMsgPhone    = form.phone === "" ? "d-none" : "invalid-feedback";
    
    const confirmChanges = (e) => {
        if (formCheck(validUsername, validEmail, validCountry, validAddress, validPostalCode, validFullName, validPhone)) {
            const msg = document.getElementById("confirm");
            msg.className = "d-flex justify-content-center";
            setTimeout(() => {
                msg.className = "d-none";
            }, 2000);
        }
    }

    // Update current user on the database
    const updateUser = async (u, id) => {
        if (formCheck(validUsername, validEmail, validCountry, validAddress, validPostalCode, validFullName, validPhone)) {
            await fetchUpdateUser(u, id); 
        } else {
            console.log('Something when wrong while submitting the register');
        }
    }

    return (
        <DivUserData>
            <H2>Update your information:</H2>
            <fieldset>
                <FormUpdate
                    onSubmit={(e) => {
                        e.preventDefault();
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
                            <input className={countryState} autoComplete="off" name="country" value={form.country} onChange={changeValue} type="text" required/>
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
                        <input className={btnState} data-bs-toggle="modal" data-bs-target="#confirmUpdateModal" disabled={enableSubmit} type="submit" value="Submit" />
                    </div>
                    <div id="confirm" className="d-none">
                        <PConfirm>User updated successfully!</PConfirm>
                    </div>
                </FormUpdate>
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
                                updateUser(form, user.id);
                                dispatch(logInUser(form));
                                confirmChanges();
                            }} type="button" className="btn btn-outline-success">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </DivUserData>
    )
}

export default UpdateForm