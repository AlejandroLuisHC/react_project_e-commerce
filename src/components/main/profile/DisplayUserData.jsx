import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import fetchDeleteUser from '../../../api/fetchDeleteUser'

const DisplayUserData = ({ user }) => {
    const container = {
        width: "100%",
        color: "#eee",
    }
    const styleText = {
        marginBottom: "30px",
        textShadow: "1px 1px 5px #00000088"
    }
    const margin = {
        marginBottom: "7px"
    }
    const styleData = {
        paddingLeft: "30px",
        fontWeight: "bold",
        fontSize: "1.2em" 
    }

    // Delete user logic 
    const [confirmPwd, setConfirmPwd] = useState("")

    const validPwdCheck = confirmPwd === user.password ? true : false;
    const pwdCheckState = validPwdCheck ? "form-control is-valid" : "form-control is-invalid"
    const enableSubmit  = validPwdCheck ? "" : "disabled";
    const btnState      = validPwdCheck ? "btn btn-outline-danger" : "btn btn-outline-danger";

    const deleteUser = async () => {
        if (confirmPwd === user.password){
            await fetchDeleteUser(user.id);
            sessionStorage.removeItem('user');
            <Navigate to='/'/>
        }
    }

    return (
        <>
        <div style={container}>
            <h2 style={styleText}>User information:</h2>
            <p className='d-flex flex-column'>Username: <span style={styleData}>{user.username}</span> </p>
            <hr style={margin}/>
            <p className='d-flex flex-column'>Email: <span style={styleData}>{user.email}</span> </p>
            <hr style={margin}/>
            <p className='d-flex flex-column'>Full name: <span style={styleData}>{user.fullName}</span> </p>
            <hr style={margin}/>
            <p className='d-flex flex-column'>Country: <span style={styleData}>{user.country}</span> </p>
            <hr style={margin}/>
            <p className='d-flex flex-column'>Address: <span style={styleData}>{user.address}</span> </p>
            <hr style={margin}/>
            <p className='d-flex flex-column'>Postal Code: <span style={styleData}>{user.postalCode}</span> </p>
            <hr style={margin}/>
            <p className='d-flex flex-column'>Phone: <span style={styleData}>{user.phone}</span> </p>
            <hr/>
            <div>
                <button className='btn btn-outline-danger' data-bs-toggle="modal" data-bs-target="#confirmModal">Delete account</button>
            </div>
        </div>

        <div className="modal fade" id="confirmModal" tabIndex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content bg-dark text-white">
                    <div className="modal-header">
                        <h5 className="modal-title">WARNING</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>You are about to delete your account permanently.</p>
                        <p>Please, provide your password to confirm the action:</p>
                        <form>
                            <label>
                                Password:
                                <input className={pwdCheckState} type="password" name="password" value={confirmPwd} onChange={e => setConfirmPwd(e.target.value)} />
                            </label>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button className={btnState} disabled={enableSubmit} data-bs-dismiss="modal" onClick={() => {deleteUser()}} type="button">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DisplayUserData