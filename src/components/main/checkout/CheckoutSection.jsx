import DisplayCart from './products_order/DisplayCart'
import ShippingForm from './shipping/ShippingForm'

const CheckoutSection = () => {
    const styleSection = {
        display: "flex",
        gap: "20px",
        justifyContent: "space-between"
    }


    return (
        <section style={styleSection}>
            <DisplayCart />
            <div> 
                <ShippingForm />
            </div>
        </section>
        
    )
}

export default CheckoutSection