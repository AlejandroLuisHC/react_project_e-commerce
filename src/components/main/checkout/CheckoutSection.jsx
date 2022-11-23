import { SectionCheckout } from '../../style/checkoutStyle'
import DisplayCart from './products_order/DisplayCart'
import ShippingForm from './shipping/ShippingForm'

const CheckoutSection = () => {
    return (
        <SectionCheckout>
            <DisplayCart />
            <div> 
                <ShippingForm />
            </div>
        </SectionCheckout>
        
    )
}

export default CheckoutSection