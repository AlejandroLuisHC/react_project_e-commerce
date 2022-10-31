import React from 'react';


const BandCard = ({ store, id, name, img, price }) => {
    const bandCard = {
        width: "100%",
        height: "200px",
        border: "none",
        borderRadius: "15px",
        boxShadow: "3px 3px 10px rgba(0, 0, 0, 1)",
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
        fontSize: "3em",
        color: "white",
        textShadow: "0 0 15px black"
    }
    const priceTag = {
        fontWeight: "bold",
        borderRadius: "20px",
        fontSize: "2.5em",
        boxShadow: "0 0 15px black",
        transform: "rotate(-10deg)"
        
    }
    const addProduct = () => {
        store(id, name, price);
    }
    
    return (
        <div id={id} onClick={addProduct} className="card" style={bandCard}>
            <img src={img} style={bandPic} className="card-img-top" alt={name} />
            <div className="position-absolute w-100 top-50 d-flex align-items-center justify-content-between card-body">
                <h3 className="card-title" style={label}>{name}</h3>
                <div > 
                    <span className="badge text-bg-warning" style={priceTag}>{price}€</span>
                </div>
            </div>
        </div>
    )
}

export default BandCard