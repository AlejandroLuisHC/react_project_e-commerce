import React, { memo } from 'react';
import photo from '../../assets/img/carousel_2.jpg';

const Hero = () => {
    const style = {
        maxHeight: "210px"
    }
    const photoStyle  = {
        maxHeight: "210px",
        objectFit: "cover",
        objectPosition: "50% 64%"
    }
    const label = {
        fontSize: "4vw",
        fontWeight: "bold",
        color: "white",
        textShadow: "1px 1px 8px rgba(0, 0, 0, 1)"
    }
    const subLabel = {
        fontSize: "1.2em",
        fontWeight: "regular",
        fontStyle: "italic",
        color: "white",
        textShadow: "1px 1px 8px rgba(0, 0, 0, 1)"
    }
    

    return (
        <div id="hero" className="carousel slide carousel-fade" data-bs-ride="carousel" style={style}>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img style={photoStyle}  src={photo} className="d-block w-100" alt="Concert party"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3 style={label}>All your bands gathered in one place</h3>
                        <p style={subLabel}>Find the merch of your favorite bands</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Hero)