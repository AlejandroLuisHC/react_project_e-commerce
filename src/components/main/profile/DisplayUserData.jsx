import { useContext } from 'react'
import UserContext from '../../../context/UserContext'

const DisplayUserData = () => {
    const container = {
        width: "100%",
        color: "#eee",
    }
    const styleText = {
        marginBottom: "30px",
    }
    const margin = {
        marginBottom: "6px"
    }
    const styleData = {
        paddingLeft: "30px",
        fontWeight: "bold",
        fontSize: "1.2em" 
    }

    const { user } = useContext(UserContext);

    return (
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
        </div>
    )
}

export default DisplayUserData