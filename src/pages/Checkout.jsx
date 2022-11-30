import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import CheckoutSection from '../components/main/checkout/CheckoutSection';
import GoHome from '../components/main/return_home/GoHome';
import { MainCheckout } from '../components/style/checkoutStyle';

const Checkout = () => {
    const cart = useSelector((state) => state.cartData.cart )
    const [EMPTY_CART, setEMPTY_CART] = useState(false)
    useEffect(() => {
        cart.length > 0 ?
            setEMPTY_CART(prev => prev = false) :
            setEMPTY_CART(prev => prev = true)
    }, [cart])
    return (
        <MainCheckout>
            <GoHome />
            <CheckoutSection />
            {EMPTY_CART && <Navigate to="/" />}
        </MainCheckout>
    )
}

export default Checkout