import React from 'react'
import { useSelector } from 'react-redux'
import LoginForm from '../../main/login/LoginForm'
const LandingLogin = () => {
    const styleH2 = {
        color: "#eee",
        textShadow: "1px 1px 5px black"
    }

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
                    <h1 style={styleH2}>Welcome, {username}!</h1>
                </div>
            }
        </div>
    )
}

export default LandingLogin