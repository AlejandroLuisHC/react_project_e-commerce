import LoginForm from "../components/main/login/LoginForm";

const Login = () => {
    const styleMain = {
        marginTop: "30px",
        gridColumn: "2",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "start",
        alignItems: "center",
        gap: "40px",
    }
    const styleH2 = {
        color: "#eee",
    }
    const styleP = {
        color: "#eee",
    }
    
    return (
        <main style={styleMain}>
            <div className='d-flex flex-column align-items-center'>
                <h2 style={styleH2}>Please, <b>log in</b> to access to further features</h2>
                <p style={styleP}>Not having an account, <b>sign up for free</b></p>
            </div>            
            <LoginForm />
        </main>
    )
}

export default Login