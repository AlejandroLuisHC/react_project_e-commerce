import { useState, useEffect } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import AlbumCard from '../../components/main/album_cards/AlbumCard'
import fetchAlbums from '../../api/fetchAlbums';
import GoHome from '../../components/main/return_home/GoHome';

const Albums = (props) => {  
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
    
    const [storeItems, items, setItems] = useOutletContext();
    const [albums, setAlbums] = useState([]);
    const { state } = useLocation();
    const albumsKey = state?.data; 
    
    useEffect( () => {
        const retrieveAlbums = async () => {
            const albumsData = await fetchAlbums(albumsKey);
            setAlbums(albumsData);
        }
        retrieveAlbums();
    }, [albumsKey])

    return (
        <main style={mainStyle}>
            <GoHome />
            <div style={style}>
                {albums?.map(a => 
                    <AlbumCard key = {a.id}
                        id       = {a.id}
                        name     = {a.name}
                        img      = {a.img}
                        price    = {a.price}
                        release  = {a.release}
                        desc     = {a.description}
                        items    = {items}
                        setItems = {setItems}
                        store    = {storeItems}
                    />
                )}
            </div>
        </main>
    )
}

export default Albums