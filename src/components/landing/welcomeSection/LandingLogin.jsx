import React from 'react'
import { useSelector } from 'react-redux'
import LoginForm from '../../main/login/LoginForm'
import { H2 } from '../../style/H2'

const LandingLogin = () => {
    const username = useSelector((state) => state.userData.user.username)

    return (
        <div>
            {username === "Guest" ? 
                <div className="d-flex flex-column align-items-center">
                    <img src="img/catmustapprove.png" alt="cat approves" width="300px" height="200px" style={{objectFit: "cover"}}/>
                    <LoginForm />
                </div> : 
                <div className="d-flex flex-column align-items-center mt-4" style={{minWidth: "300px"}}>
                    <img className="ps-5" src="img/catapproved.gif" alt="cat approves" height="300px"  style={{objectFit: "cover"}} />
                    <H2>Welcome, {username}!</H2>
                </div>
            }
        </div>
    )
}

export default LandingLogin