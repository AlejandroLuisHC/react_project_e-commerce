import { useState, useEffect } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom'
import fetchBands from '../api/fetchBands'
import fetchAlbums from '../api/fetchAlbums'
import BandCard from '../components/main/bands_cards/BandCard'
import AlbumCard from '../components/main/album_cards/AlbumCard'

const Search = () => {
    const styleMain = {
        marginTop: "30px",
        gridColumn: "2",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "40px",
        color: "#eee"
    }
    const section = {
        marginTop: "30px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        AlignItems: "start",
        gap: "40px",
    }
    
    const [storeItems, items, setItems] = useOutletContext();
    const { state } = useLocation();
    const search = state?.search.toLowerCase();

    // Store all bands
    const [bands, setBands] = useState([]);
    
    useEffect( () => {
        const retrieveBands = async () => {
            const bandsData = await fetchBands();
            console.log(bandsData);
            setBands(bandsData);
        }
        retrieveBands();
    }, [])
    console.log(bands);

    // Store all albums
    const [albums, setAlbums] = useState([]);
    
    useEffect(() => {
        bands.map( async b => {
            const albums = await fetchAlbums(b.data);
            setAlbums(prev => prev = [...prev, albums])
        })
    }, [bands])
console.log(albums);


    return (
        <main style={styleMain}>
            <section>
                <h2>Bands containing: "{search}"</h2>
                <div style={section}>
                    {bands?.map(b => {
                        if (b.name.toLowerCase().includes(search)) {
                            return (
                            <BandCard key = {b.id}
                                id      = {b.id}
                                name    = {b.name}
                                img     = {b.img}
                                data    = {b.data}
                                desc    = {b.description}
                            />
                        )} 
                        return null;
                    })
                    }
                </div>
            </section>
            <section>
                <h2>Albums containing: "{search}"</h2>
                <div style={section}>
                    {albums.flat()?.map(a => {
                        if (a.name.toLowerCase().includes(search)) {
                            return(
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
                        return null;
                    })
                    }
                </div>

            </section>
        </main>
    )
}

export default Search