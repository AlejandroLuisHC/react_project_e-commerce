import React from 'react';
import CheckoutSection from '../components/main/checkout/CheckoutSection';
import GoHome from '../components/main/return_home/GoHome';

const Checkout = () => {
    const mainStyle = {
        marginTop: "30px",
        gridColumn: "2",
    }

    return (
        <main style={mainStyle}>
            <GoHome />
            <CheckoutSection />
        </main>
    )
}

export default Checkout