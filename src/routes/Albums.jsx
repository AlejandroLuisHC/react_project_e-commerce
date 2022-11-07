import React from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import AlbumCard from '../components/main/album_cards/AlbumCard'
import GoHome from '../components/main/return_home/GoHome';

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

    const location = useLocation();
    const albumsData = location.state?.data; 

    return (
        <main style={mainStyle}>
            <GoHome />
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