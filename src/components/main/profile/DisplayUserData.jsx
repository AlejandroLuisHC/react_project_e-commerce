import { useState } from 'react'
import { useDispatch } from 'react-redux'
import fetchDeleteUser from '../../../api/fetchDeleteUser'
import { logOutUser } from '../../../redux/features/userData/userSlice'
import { H2 } from '../../style/H2'
import { DivUserData, SpanData } from '../../style/profileStyle'

const DisplayUserData = ({ user }) => {
    // Delete user logic 
    const [confirmPwd, setConfirmPwd] = useState("")
    const dispatch = useDispatch();

    const validPwdCheck = confirmPwd === user.password ? true : false;
    const pwdCheckState = validPwdCheck ? "form-control is-valid" : "form-control is-invalid"
    const enableSubmit  = validPwdCheck ? "" : "disabled";
    const btnState      = validPwdCheck ? "btn btn-outline-danger" : "btn btn-outline-danger";

    const deleteUser = async () => {
        if (confirmPwd === user.password){
            await fetchDeleteUser(user.id);
            sessionStorage.removeItem('user');
            dispatch(logOutUser());
        }
    }

    return (
        <>
        <DivUserData>
            <H2>User information:</H2>
            <p className='d-flex flex-column'>Username: <SpanData>{user.username}</SpanData> </p>
            <hr style={{marginBottom: "7px"}}/>
            <p className='d-flex flex-column'>Email: <SpanData>{user.email}</SpanData> </p>
            <hr style={{marginBottom: "7px"}}/>
            <p className='d-flex flex-column'>Full name: <SpanData>{user.fullName}</SpanData> </p>
            <hr style={{marginBottom: "7px"}}/>
            <p className='d-flex flex-column'>Country: <SpanData>{user.country}</SpanData> </p>
            <hr style={{marginBottom: "7px"}}/>
            <p className='d-flex flex-column'>Address: <SpanData>{user.address}</SpanData> </p>
            <hr style={{marginBottom: "7px"}}/>
            <p className='d-flex flex-column'>Postal Code: <SpanData>{user.postalCode}</SpanData> </p>
            <hr style={{marginBottom: "7px"}}/>
            <p className='d-flex flex-column'>Phone: <SpanData>{user.phone}</SpanData> </p>
            <hr/>
            <div>
                <button className='btn btn-outline-danger' data-bs-toggle="modal" data-bs-target="#confirmModal">Delete account</button>
            </div>
        </DivUserData>
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
                        <button className={btnState} disabled={enableSubmit} data-bs-dismiss="modal" onClick={() => deleteUser()} type="button">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DisplayUserData