const BandCard = ({ store, items, id, name, img, price }) => {
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
    
    return (
        <div id={id} className="card" style={bandCard}>
            <img src={img} style={bandPic} className="card-img-top" alt={name} />
            <div className="position-absolute w-100 top-50 d-flex align-items-center justify-content-between card-body">
                <h3 className="card-title" style={label}>{name}</h3>
            </div>
        </div>
    )
}

export default BandCard