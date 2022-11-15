import BandCard from '../components/main/bands_cards/BandCard';
import fetchBands from '../api/fetchBands';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter } from 'react-bootstrap-icons';

const Home = () => {
    const styleMain = {
        marginTop: "15px",
        gridColumn: "2",
        display: "grid",
        gridTemplate: "50px 1fr / 1fr"
    }
    const styleSection = {
        marginTop: "15px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        AlignItems: "start",
        gap: "30px",
    }
    
    const [bands, setBands] = useState([]);
    useEffect( () => {
        const retrieveBands = async () => {
            const bandsData = await fetchBands();
            setBands(bandsData);
        }
        retrieveBands();
    }, [])
    
    const [search, setSearch] = useSearchParams()
    const filter = search.get("filter") ?? "";
    const setFilter = e => {
        setSearch({filter: e.target.value})
    }

    return (
        <main style={styleMain}>
            <form className="col-2 w-100 d-flex align-items-center justify-content-end pe-5" role="search">
                <label className='label text-white d-flex gap-2 align-items-center'>
                    <Filter />
                    <input className="form-control" value={filter} onChange={setFilter} type="search" placeholder="Filter bands..." aria-label="Search" />
                </label>
            </form>
            <section style={styleSection}>
                {bands?.map(b => {
                    if (b.name.toLowerCase().includes(filter.toLowerCase())) {
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
            </section>
        </main>
    )
}

export default Home