import React from 'react';
import { Link, useLocation, useOutletContext } from 'react-router-dom';
import AlbumCard from '../components/main/album_cards/AlbumCard'
import ButtonBack from '../components/main/ButtonBack';

const Albums = (props) => {
    const [storeItems, items, setItems] = useOutletContext();
    const mainStyle = {
        marginTop: "30px",
        gridColumn: "2",
    }
    const style = {
      marginTop: "30px",
      gridColumn: "2",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      alignItems: "start",
      gap: "40px",
    }
    const btnCard = {
        width: "100%",
        height: "80px",
        border: "none",
        borderRadius: "10px",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 1)",
        cursor: "pointer",
        fontSize: "40px",
        fontWeight: "bold",
        textDecoration: "none",
    }

    const location = useLocation();
    const albumsData = location.state?.data; 

    return (
        <main style={mainStyle}>
            <Link to = {'/'} style={btnCard}>
                <ButtonBack />    
            </Link>
            <div style={style}>
                {albumsData?.map(a => 
                    <AlbumCard key = {a.id}
                        name      = {a.name}
                        img       = {a.img}
                        price     = {a.price}
                        release   = {a.release}
                        id        = {a.id}
                        items     = {items}
                        setItems  = {setItems}
                        store     = {storeItems}
                    />
                
                )}
            </div>
        </main>
    )
}

export default Albums