import React from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import AlbumCard from '../components/main/album_cards/AlbumCard'

const Albums = (props) => {
    const [storeItems, items, setItems] = useOutletContext();
    const style = {
      marginTop: "30px",
      gridColumn: "2",
      display: "grid",
      gridTemplate: "repeat(auto-fill, 200px) / repeat(4, 1fr)",
      gap: "30px",
    }

    const location = useLocation();
    const albumsData = location.state?.data; 

    return (
        <main style={style}>
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
        </main>
    )
}

export default Albums