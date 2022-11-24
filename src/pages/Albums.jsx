import { useParams, useSearchParams } from 'react-router-dom';
import AlbumCard from '../components/main/album_cards/AlbumCard'
import fetchAlbums from '../api/fetchAlbums';
import GoHome from '../components/main/return_home/GoHome';
import { Filter } from 'react-bootstrap-icons';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner/Spinner';
import Error from './Error';
import { DivUtilities, MainBanAlbu, SectionBandsAlbums } from '../components/style/bandsAlbumStyle';

const Albums = () => {  
    const { bandName } = useParams(); 
    const albumsKey = bandName; 

    
    const [search, setSearch] = useSearchParams()
    const query = search.get("query") ?? "";
    const setFilter = e => {
        setSearch({query: e.target.value})
    }

    const { data : albums, status } = useQuery({ queryKey: ['albums'], queryFn: () => fetchAlbums(albumsKey) });
    
    return (
        <MainBanAlbu>
            <DivUtilities>
                <div style={{gridColumn: "2"}}>
                    <GoHome />
                </div>
                <form className="d-flex align-items-center justify-content-end pe-5" role="search">
                    <label className='label text-white d-flex gap-2 align-items-center'>
                        <Filter />
                        <input className="form-control" value={query} onChange={setFilter} type="search" placeholder="Filter bands..." aria-label="Search" />
                    </label>
                </form>
            </DivUtilities>
            <SectionBandsAlbums>
                {status === 'loading' 
                    ? <Spinner />
                    : status === 'error'
                    ? <Error />
                    : 
                    albums?.map(a => {
                        if (a.name.toLowerCase().includes(query.toLowerCase())) {
                            return (<AlbumCard key = {a.id}
                                id       = {a.id}
                                name     = {a.name}
                                img      = {a.img}
                                price    = {a.price}
                                release  = {a.release}
                                desc     = {a.description}
                                video    = {a.video}
                            />)
                        }
                        return null;
                    })}
            </SectionBandsAlbums>
        </MainBanAlbu>
    )
}

export default Albums