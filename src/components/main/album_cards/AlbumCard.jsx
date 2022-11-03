import React from 'react'

const AlbumCard = ({ setItems, items, store, id, name, img, price, release }) => {
    const albumCard = {
        height: "200px",
        width: "200px",
        border: "none",
        borderRadius: "50%",
        boxShadow: "3px 3px 10px rgba(0, 0, 0, 1)",
        cursor: "pointer",
    }
    const albumPic = {
        height: "200px",
        width: "200px",
        objectFit: "cover",
        borderRadius: "50%",
        objectPosition: "50% 15%"
    }
    const label = {
        fontWeight: "bold",
        fontSize: "1.3vw",
        color: "white",
        textShadow: "0 0 20px black"
    }
    const priceTag = {
        fontWeight: "bold",
        borderRadius: "2vw",
        fontSize: "1.3vw",
        boxShadow: "0 0 15px black",
        transform: "rotate(-10deg)"
    }

    return (
        <div id={id} onClick={() => {store(id, name, price, items)}} className="card" style={albumCard}>
            <img src={img} style={albumPic} className="card-img-top" alt={name} />
            <div className="position-absolute d-flex flex-column justify-content-between gap-5 card-body" style={{height: "200px"}}>
                <div > 
                    <span className="badge text-bg-warning" style={priceTag}>{price}€</span>
                </div>
                <h3 className="card-title" style={label}>{name}</h3>
            </div>
        </div>
    )
}

export default AlbumCard