import React from 'react';


const BandCard = ({ countFunc, bandId, bandName, bandImg }) => {
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
        objectPosition: "50% 30%"
    }
    const label = {
        fontWeight: "bold",
        fontSize: "3em",
        color: "white",
        textShadow: "0 0 15px black"
    }
    
    return (
        <div id={bandId} onClick={countFunc} className="card" style={bandCard}>
            <img src={bandImg} style={bandPic} className="card-img-top" alt={bandName} />
            <div className="position-absolute top-50 d-flex align-items-center justify-content-center card-body">
                <h3 className="card-title" style={label}>{bandName}</h3>
            </div>
        </div>
    )
}

export default BandCard