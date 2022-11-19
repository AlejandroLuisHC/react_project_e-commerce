import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './Layout';
import CartProvider from '../context/CartProvider';
import WishProvider from '../context/WishProvider';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Spinner from '../components/spinner/Spinner';

const Albums = lazy(() => import('../pages/Albums'));
const Bands = lazy(() => import('../pages/Bands'));
const Checkout = lazy(() => import('../pages/Checkout'));
const Profile = lazy(() => import('../pages/Profile'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Search = lazy(() => import('../pages/Search'));
const Landing = lazy(() => import('../pages/Landing'));

const router = () => {
    return (
        <Provider store={store}>
        <CartProvider>
        <WishProvider>
            <BrowserRouter>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Landing />} />
                            <Route path="/bands" element={<Bands />} />
                            <Route path="/:bandName" element={<Albums />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/search" element={<Search />} />
                            <Route path="/*" element={<Navigate replace to="/" />} />
                        </Route>
                    </Routes>
                </Suspense> 
            </BrowserRouter>
        </WishProvider>
        </CartProvider>
        </Provider>
    )
}

export default router