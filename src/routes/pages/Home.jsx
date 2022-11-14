import BandCard from '../../components/main/bands_cards/BandCard';
import fetchBands from '../../api/fetchBands';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const styleMain = {
        marginTop: "30px",
        gridColumn: "2",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        AlignItems: "start",
        gap: "40px",
    }
    
    const [bands, setBands] = useState([]);

    useEffect( () => {
        const retrieveBands = async () => {
            const bandsData = await fetchBands();
            setBands(bandsData);
        }
        retrieveBands();
    }, [])

    return (
        <main style={styleMain}>
            {bands.map(b => 
                <BandCard key = {b.id}
                    id      = {b.id}
                    name    = {b.name}
                    img     = {b.img}
                    data    = {b.data}
                    desc    = {b.description}
                />   
            )}
        </main>
    )
}

export default Home