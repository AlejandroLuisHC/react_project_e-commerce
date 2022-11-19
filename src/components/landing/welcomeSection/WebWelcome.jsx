import { Link } from 'react-router-dom'

const WebWelcome = () => {
    const styleWelcome = {
        padding: "30px",
        marginBottom: "20px",
        backgroundColor: "#e6e6e6",
        boxShadow: "0 0 10px black",
        borderRadius: "10px",
        display: "flex",
        maxHeight: "500px",
        flexDirection: "column",
        justifyContent: "space-between"
    }
    const descriptionText = {
        textAlign: "justify",
    }
    const styleMoreBandsBtn = {
        marginTop: "20px",
        boxShadow: "0 0 5px black",
    }

    return (
        <div style={styleWelcome}>
            <div style={descriptionText}>
                <h1 className='d-flex flex-wrap justify-content-center'>Welcome to LOGOIPSUM</h1>
                <p className='d-flex mt-3'>This would be a brief description of the website and the products here sold.</p>
                <p className='d-flex text-justify'>Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut sollicitudin lectus vel est vulputate, sit amet feugiat ex accumsan. Aliquam ut pellentesque leo. Nam fermentum quis nisl vitae luctus. Mauris eget ultrices ligula, ut pellentesque massa. Curabitur finibus nisi nec libero ultricies egestas. Mauris id tristique sapien. Vestibulum iaculis magna ipsum, vel venenatis magna auctor at. Nullam sagittis justo at neque efficitur, in laoreet lorem ullamcorper. Cras interdum neque eget ipsum sollicitudin, eu semper diam convallis. Nunc a orci scelerisque, euismod erat varius, sagittis massa.</p>
            </div>
            <div className="d-flex justify-content-center" style={{gridColumn: "2"}}>
                <Link to="/bands"
                >
                    <button style={styleMoreBandsBtn} className='btn btn-secondary btn-lg'>Explore all bands</button>
                </Link>
            </div>
        </div>
    )
}

export default WebWelcome