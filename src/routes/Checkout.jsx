import React from 'react';
import GoHome from '../components/main/return_home/GoHome';

const Checkout = () => {
    const mainStyle = {
        marginTop: "30px",
        gridColumn: "2",
    }

    return (
        <main style={mainStyle}>
            <GoHome />
            <div>Checkout</div>
        </main>
    )
}

export default Checkout