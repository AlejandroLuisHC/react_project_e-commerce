import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import fetchBands from '../api/fetchBands'
import fetchAlbums from '../api/fetchAlbums'
import BandCard from '../components/main/bands_cards/BandCard'
import AlbumCard from '../components/main/album_cards/AlbumCard'
import Spinner from '../components/spinner/Spinner';
import Error from './Error';
import { useQuery } from '@tanstack/react-query';
import { DivSearch, MainSearch } from '../components/style/searchStyle';
import { H2 } from '../components/style/H2'

const Search = () => {
    const { state } = useLocation();
    const search = state?.search.toLowerCase();

    // Store all bands
    const { data : bands, status : statusBands } = useQuery({ queryKey: ['bands'], queryFn: fetchBands});

    // Store all albums
    const [albums, setAlbums] = useState([]);
    
    useEffect(() => {
        bands?.map( async b => {
            const albums = await fetchAlbums(b.data);
            setAlbums(prev => prev = [...prev, albums])
        })
    }, [bands])

    return (
        <MainSearch>
            <section>
                <H2>Bands containing: "{search}"</H2>
                <DivSearch>
                    {statusBands === 'loading' 
                        ? <Spinner />
                        : statusBands === 'error'
                        ? <Error />
                        :bands?.map(b => {
                            if (b.name.toLowerCase().includes(search)) {
                                return (<BandCard key = {b.id}
                                    id      = {b.id}
                                    name    = {b.name}
                                    img     = {b.img}
                                    data    = {b.data}
                                    desc    = {b.description}
                                />)
                            } 
                            return null;
                        })} 
                </DivSearch>
            </section>
            <section>
                <H2>Albums containing: "{search}"</H2>
                <DivSearch>
                    {albums.flat()?.map(a => {
                        if (a.name.toLowerCase().includes(search)) {
                            return (<AlbumCard key = {a.id}
                                id       = {a.id}
                                name     = {a.name}
                                img      = {a.img}
                                price    = {a.price}
                                release  = {a.release}
                                desc     = {a.description}
                            />)
                        }
                        return null;
                    })}
                </DivSearch>

            </section>
        </MainSearch>
    )
}

export default Search