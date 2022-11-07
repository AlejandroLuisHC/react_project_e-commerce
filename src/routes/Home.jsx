import BandCard from '../components/main/bands_cards/BandCard';
// import { bandsData } from '../data/db';
import fetchBands from '../api/fetchBands';
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
    
    const styleLink = {
        height: "200px",
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
                <Link style = {styleLink} key = {b.id}
                    to      = {`${b.name}`}
                    state   = {{
                        data: b.data,
                    }}
                >
                <BandCard key = {b.id}
                    id      = {b.id}
                    name    = {b.name}
                    img     = {b.img}
                />   
                </Link>
            )}
        </main>
    )
}

export default Home