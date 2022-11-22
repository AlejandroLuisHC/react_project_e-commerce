import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo.svg'
const WebWelcome = () => {
    const styleWelcome = {
        border: "3px solid rgb(255, 67, 75, .4)",
        borderRadius: "10px",
        padding: "20px",
        width: "100%",
        color: "#eee",
        boxShadow: "0 0 10px #00000088",
        maxHeight: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }
    const descriptionText = {
        textAlign: "justify",
    }
    const styleMoreBandsBtn = {
        marginTop: "20px",
    }

    return (
        <div style={styleWelcome}>
            <div style={{overflowY: "auto"}}>
                <h1 className='d-flex justify-content-start align-items-center gap-3'><span className='text-white font-weight-bold'>Welcome to </span><img src={logo} alt="logo" width="230px"/></h1>
                <p className='d-flex mt-3' style={descriptionText}>This would be a brief description of the website and the products here sold.</p>
                <p className='d-flex text-justify' style={descriptionText}>Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut sollicitudin lectus vel est vulputate, sit amet feugiat ex accumsan. Aliquam ut pellentesque leo. Nam fermentum quis nisl vitae luctus. Mauris eget ultrices ligula, ut pellentesque massa. Curabitur finibus nisi nec libero ultricies egestas. Mauris id tristique sapien. Vestibulum iaculis magna ipsum, vel venenatis magna auctor at. Nullam sagittis justo at neque efficitur, in laoreet lorem ullamcorper. Cras interdum neque eget ipsum sollicitudin, eu semper diam convallis. Nunc a orci scelerisque, euismod erat varius, sagittis massa.</p>
            </div>
            <div className="d-flex justify-content-center" style={{gridColumn: "2"}}>
                <Link to="/bands">
                    <button style={styleMoreBandsBtn} className='btn btn-outline-danger btn-lg'>Explore all bands</button>
                </Link>
            </div>
        </div>
    )
}

export default WebWelcome