import React from 'react';
import BandCard from './bands_cards/BandCard';
import { bandsData } from '../../data/db';

const Main = ({ countFunc }) => {
    const style = {
        marginTop: "30px",
        gridColumn: "2",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "30px"
    }
    
    return (
        <main style={style}>
            {bandsData.map(b => (
                <BandCard
                    key={b.bandId}
                    bandId={b.bandId}
                    bandName={b.bandName}
                    bandImg={b.bandImg}
                    countFunc={countFunc}
                />
                )
            )}
        </main>
    )
}

export default Main