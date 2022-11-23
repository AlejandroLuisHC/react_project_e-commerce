import BandCard from '../components/main/bands_cards/BandCard';
import fetchBands from '../api/fetchBands';
import { useSearchParams } from 'react-router-dom';
import { Filter } from 'react-bootstrap-icons';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner/Spinner';
import Error from './Error';
import { MainBanAlbu, SectionBandsAlbums } from '../components/style/bandsAlbumStyle';

const Bands = () => {
    const { data : bands, status } = useQuery({ queryKey: ['bands'], queryFn: fetchBands});
    
    const [search, setSearch] = useSearchParams()
    const query = search.get("query") ?? "";
    const setFilter = e => {
        setSearch({query: e.target.value})
    } 

    return (
        <MainBanAlbu>
            <form className="col-2 w-100 d-flex align-items-center justify-content-end pe-5" role="search">
                <label className='label text-white d-flex gap-2 align-items-center'>
                    <Filter />
                    <input className="form-control" value={query} onChange={setFilter} type="search" placeholder="Filter bands..." aria-label="Search" />
                </label>
            </form>
            <SectionBandsAlbums>
                {status === 'loading' 
                    ? <Spinner />
                    : status === 'error'
                    ? <Error />
                    :bands?.map(b => {
                        if (b.name.toLowerCase().includes(query.toLowerCase())) {
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
            </SectionBandsAlbums>
        </MainBanAlbu>
    )
}

export default Bands