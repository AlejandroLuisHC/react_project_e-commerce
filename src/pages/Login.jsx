import { memo } from "react";
import LoginForm from "../components/main/login/LoginForm";
import { MainLogReg } from "../components/style/MainLogReg";

const Login = () => {
    const styleH2 = {
        color: "#eee",
    }
    const styleP = {
        color: "#eee",
    }
    
    return (
        <MainLogReg>
            <div className='d-flex flex-column align-items-center'>
                <h2 style={styleH2}>Please, <b>log in</b> to access to further features</h2>
                <p style={styleP}>Not having an account, <b>sign up for free</b></p>
            </div>            
            <LoginForm />
        </MainLogReg>
    )
}

export default memo(Login)