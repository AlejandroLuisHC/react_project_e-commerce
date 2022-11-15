import { useState, useEffect } from 'react';
import { useOutletContext, useParams, useSearchParams } from 'react-router-dom';
import AlbumCard from '../components/main/album_cards/AlbumCard'
import fetchAlbums from '../api/fetchAlbums';
import GoHome from '../components/main/return_home/GoHome';
import { Filter } from 'react-bootstrap-icons';

const Albums = () => {  
    const mainStyle = {
        marginTop: "15px",
        gridColumn: "2",
        display: "grid",
        gridTemplate: "50px 1fr / 1fr"
    }
    const sectionStyle = {
        marginTop: "25px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "start",
        gap: "40px",
    }
    const topStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr"
    }

    const [storeItems, items, setItems] = useOutletContext();

    const { bandName } = useParams();
    const albumsKey = bandName; 

    const [albums, setAlbums] = useState([]);
    useEffect( () => {
        const retrieveAlbums = async () => {
            const albumsData = await fetchAlbums(albumsKey);
            setAlbums(albumsData);
        }
        retrieveAlbums();
    }, [albumsKey])

    const [search, setSearch] = useSearchParams()
    const query = search.get("query") ?? "";
    const setFilter = e => {
        setSearch({query: e.target.value})
    }

    return (
        <main style={mainStyle}>
            <div style={topStyle}>
                <div style={{gridColumn: "2"}}>
                    <GoHome />
                </div>
                <form className="d-flex align-items-center justify-content-end pe-5" role="search">
                    <label className='label text-white d-flex gap-2 align-items-center'>
                        <Filter />
                        <input className="form-control" value={query} onChange={setFilter} type="search" placeholder="Filter bands..." aria-label="Search" />
                    </label>
                </form>
            </div>
            <section style={sectionStyle}>
                {albums?.map(a => {
                    if (a.name.toLowerCase().includes(query.toLowerCase())) {
                        return (<AlbumCard key = {a.id}
                            id       = {a.id}
                            name     = {a.name}
                            img      = {a.img}
                            price    = {a.price}
                            release  = {a.release}
                            desc     = {a.description}
                            items    = {items}
                            setItems = {setItems}
                            store    = {storeItems}
                        />)
                    }
                    return null;
                })}
            </section>
        </main>
    )
}

export default Albums