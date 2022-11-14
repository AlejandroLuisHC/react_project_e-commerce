import { InfoCircleFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

const BandCard = ({ id, name, img, data, desc }) => {
    const bandCard = {
        width: "400px",
        height: "200px",
        border: "none",
        borderRadius: "15px",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 1)",
        cursor: "pointer",
    }
    const bandPic = {
        height: "200px",
        objectFit: "cover",
        borderRadius: "15px",
        objectPosition: "50% 15%"
    }
    const label = {
        fontWeight: "bold",
        fontSize: "48px",
        color: "white",
        textShadow: "0 0 15px black"
    }
    const infoBtn = {
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0 14px 0 ",
        position: "absolute",
        left: "90%",
        border: "none",
        boxShadow: "inset 3px -3px 5px rgba(0, 0, 0, .5)",
        backgroundColor: "#bbb",
    }
    const modalImg = {
        borderRadius: "10px",
        marginBottom: "15px",
        boxShadow: "1px 1px 10px black"
    }
    const modalStyle = {
        textAlign: "justify",
        textJustify: "inter-word"
    }

    return (
        <>
        <div id={id} className="card" style={bandCard}>
            <Link to = {`${name}`}
                state = {{
                    data: data,
                }}
            >
                <img src={img} style={bandPic} className="card-img-top" alt={name} />
                <div className="position-absolute w-100 top-50 d-flex align-items-center justify-content-between card-body">
                    <h3 className="card-title" style={label}>{name}</h3>
                </div>
            </Link>
            <button style={infoBtn} data-bs-toggle="modal" data-bs-target={`#description${id}`}><InfoCircleFill /></button>
        </div>

        <div className="modal fade" id={`description${id}`} tabindex="-1" aria-labelledby={`description${id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content bg-dark text-white">
                    <div className="modal-header">
                        <h1 className="modal-title fs-2" id={`description${id}Label`}>{name}</h1>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4" style={modalStyle}>
                        <img src={img} alt={name} style={modalImg} width="100%"/>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BandCard