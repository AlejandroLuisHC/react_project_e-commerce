import BandCard from './bands_cards/BandCard';
import { bandsData } from '../../data/db';

const Main = ({ store, items }) => {
    const style = {
        marginTop: "30px",
        gridColumn: "2",
        display: "grid",
        gridTemplate: "repeat(auto-fill, 200px) / 1fr 1fr",
        gap: "30px"
    }
    
    return (
        <main style={style}>
            {bandsData.map(b => 
                <BandCard key = {b.id}
                    id      = {b.id}
                    name    = {b.name}
                    img     = {b.img}
                    price   = {b.price}
                    store   = {store}
                    items   = {items}

                />   
            )}
        </main>
    )
}

export default Main