import { Cart } from "react-bootstrap-icons";

const AlbumCard = ({ setItems, items, store, id, name, img, price, release, desc }) => {
    const albumCard = {
        height: "250px",
        width: "250px",
        border: "none",
        borderRadius: "50%",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 1)",
        cursor: "pointer",
    }
    const albumPic = {
        height: "250px",
        width: "250px",
        objectFit: "cover",
        borderRadius: "50%",
        objectPosition: "50% 15%"
    }
    const label = {
        fontWeight: "bold",
        fontSize: "28px",
        color: "white",
        textShadow: "0 0 20px black"
    }
    const priceTag = {
        fontWeight: "bold",
        borderRadius: "20px",
        fontSize: "22px",
        boxShadow: "0 0 15px black",
        transform: "rotate(-10deg)"
    }
    const buyBtn = {
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        position: "absolute",
        left: "75%",
        border: "none",
        boxShadow: "0 0 15px black"
    }
    const modalImg = {
        borderRadius: "10px",
        marginBottom: "15px",
        opacity: ".3"
    }
    const modalStyle = {
        textAlign: "justify",
        textJustify: "inter-word"
    }
    const modalContent = {
        position: "absolute",
        paddingLeft: "15px",
        paddingRight: "40px",
        fontSize: "1.1em",
        whiteSpace: "pre-line",
        lineHeight: "1.6",
        top: "5%"
    }

    return (
        <>
        <div id={id} className="card" data-bs-toggle="modal" data-bs-target={`#description${id}`} style={albumCard}>
            <img src={img} style={albumPic} className="card-img-top" alt={name} />
            <div className="position-absolute d-flex flex-column justify-content-between gap-5 card-body" style={{height: "200px"}}>
                <div > 
                    <span className="badge text-bg-warning" style={priceTag}>{price}€</span>
                </div>
                <h3 className="card-title" style={label}>{name}</h3>
            </div>
            <button className="btn btn-primary" onClick={() => {store(id, name, price, img, items, setItems)}} style={buyBtn}><Cart/></button>
        </div>

        <div className="modal fade" id={`description${id}`} tabindex="-1" aria-labelledby={`description${id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content bg-dark text-white">
                    <div className="modal-header">
                        <h1 className="modal-title fs-2" id={`description${id}Label`}>{`${name} (${release})`}</h1>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4" style={modalStyle}>
                        <img src={img} alt={name} style={modalImg} width="100%"/>
                        <p style={modalContent}>{desc}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" onClick={() => {store(id, name, price, img, items, setItems)}} className="btn btn-primary btn-lg d-flex align-items-center rounded-5 text-white">Add to cart!</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AlbumCard