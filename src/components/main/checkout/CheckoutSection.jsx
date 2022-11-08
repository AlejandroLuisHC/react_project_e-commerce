import React from 'react'
import DisplayCart from './DisplayCart'
import ShippingForm from './ShippingForm'

const CheckoutSection = () => {
    const styleSection = {
        display: "flex",
        justifyContent: "space-between"
    }

    return (
        <section style={styleSection}>
            <DisplayCart />
            <ShippingForm />
        </section>
        
    )
}

export default CheckoutSection