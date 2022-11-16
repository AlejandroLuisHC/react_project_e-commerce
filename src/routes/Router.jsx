import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Albums, Login, Register, Checkout, Search, Profile } from '../pages'
import Layout from './Layout';
import UserProvider from '../context/UserProvider';
import CartProvider from '../context/CartProvider';
import WishProvider from '../context/WishProvider';

const router = () => {
    return (
        <UserProvider>
        <CartProvider>
        <WishProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}> 
                        <Route index element={<Home />} />
                        <Route path="/:bandName" element={<Albums />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/*" element={<Navigate replace to="/" />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </WishProvider>
        </CartProvider>
        </UserProvider>
    )
}

export default router