import BandCard from '../components/main/bands_cards/BandCard';
import { bandsData } from '../data/db';
import { Link } from 'react-router-dom';

const Home = () => {
    const style = {
        marginTop: "30px",
        gridColumn: "2",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        AlignItems: "start",
        gap: "40px",
    }
    
    return (
        <main style={style}>
            {bandsData?.map(b => 
                <Link key = {b.id}
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