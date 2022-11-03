import BandCard from '../components/main/bands_cards/BandCard';
import { bandsData } from '../data/db';
import { Link, useOutletContext } from 'react-router-dom';

const Home = () => {
    const [storeItems, items, setItems] = useOutletContext();
    const style = {
        marginTop: "30px",
        gridColumn: "2",
        display: "grid",
        gridTemplate: "repeat(auto-fill, 200px) / 1fr 1fr",
        gap: "30px",
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