import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import CheckoutSection from '../components/main/checkout/CheckoutSection';
import GoHome from '../components/main/return_home/GoHome';

const Checkout = () => {
    const mainStyle = {
        marginTop: "30px",
        gridColumn: "2",
    }
    const cart = useSelector((state) => state.cartData.cart )
    const [emptyCart, setEmptyCart] = useState(false)
    useEffect(() => {
        cart.length > 0 ?
            setEmptyCart(prev => prev = false) :
            setEmptyCart(prev => prev = true)
    }, [cart])
    return (
        <main style={mainStyle}>
            <GoHome />
            <CheckoutSection />
            {emptyCart && <Navigate to="/" />}
        </main>
    )
}

export default Checkout