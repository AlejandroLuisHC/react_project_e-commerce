import { useEffect, useState } from 'react'
import fetchAlbums from '../../api/fetchAlbums'
import fetchBands from '../../api/fetchBands'
import AlbumCard from '../main/album_cards/AlbumCard'

const Banner = () => {
    const styleBanner = {
        gridColumn: "1 / span 3",
    }
    const carouselImg = {
        objectFit: "cover",
        height: "250px",
        objectPosition: "50% 20%",
        boxShadow: "0 0 10px black",
        borderRadius: "10px",
    }

    // Store all bands
    const [bands, setBands] = useState([]);

    useEffect( () => {
        const retrieveBands = async () => {
            const bandsData = await fetchBands();
            setBands(bandsData);
        }
        retrieveBands();
    }, [])

    // Store all albums
    const [albums, setAlbums] = useState([]);
    
    useEffect(() => {
        bands.map( async b => {
            const albumsData = await fetchAlbums(b.data);
            setAlbums(prev => prev = [...prev, albumsData[albumsData.length - 1]])
        })
    }, [bands])

    return (
        <div id="carouselBands" className="carousel carousel slide" style={styleBanner} data-bs-ride="carousel">
            <div className="carousel-indicators">
                {
                    bands.map(b => {
                        return <button key={b.id} type="button" data-bs-target="#carouselBands" data-bs-slide-to={b.id - 1} className="active" aria-current="true" aria-label={`Slide ${b.id}`}></button>

                    })
                }
            </div>
            <div className="carousel-inner" style={{borderRadius: "10px"}}>
                {
                    bands.map( b => {
                        return (<div className="carousel-item active" data-bs-interval="10000" key={b.id}>
                            <img src={b.img} className="d-block w-100" style={carouselImg} alt={b.name}/>
                            <div className="carousel-caption d-none d-lg-block">
                                <h2 className="d-flex" style={{fontSize: "75px", textShadow: "0 0 12px black"}}>{b.name}</h2>
                                <p className="d-flex gap-2" style={{fontSize: "30px", textShadow: "0 0 8px black"}}><span>Buy now the last album by {b.name}:</span><b>{albums[b.id - 1]?.name}</b></p>
                            </div>
                            <div style={{position: "absolute", bottom: "8px", right: "20%"}}>
                                <AlbumCard 
                                    id       = {albums[b.id - 1]?.id}
                                    size     = {220}
                                    name     = {albums[b.id - 1]?.name}
                                    img      = {albums[b.id - 1]?.img}
                                    price    = {albums[b.id - 1]?.price}
                                    release  = {albums[b.id - 1]?.release}
                                    desc     = {albums[b.id - 1]?.description}
                                />
                            </div>
                        </div>)
                    })
                }
            </div>
            <button className="carousel-control-prev" style={{height:"250px"}} type="button" data-bs-target="#carouselBands" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" style={{height:"250px"}} type="button" data-bs-target="#carouselBands" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    )
}

export default Banner