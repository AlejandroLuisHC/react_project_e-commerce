import React from 'react';
import { Link } from 'react-router-dom';
import ButtonBack from './ButtonBack'

const GoHome = () => {
    const btnCard = {
        height: "40px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        fontSize: "40px",
        fontWeight: "bold",
        textDecoration: "none",
        marginBottom: "20px",
    }

    return (
        <div className="d-flex justify-content-center">
            <Link to = {'/'} style={btnCard}>
                <ButtonBack />    
            </Link>
        </div>
    )
}

export default GoHome