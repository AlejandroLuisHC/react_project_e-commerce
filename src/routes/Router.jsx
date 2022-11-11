import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../routes/Layout';
import UserProvider from '../context/UserProvider';
import Home from './pages/Home';
import Albums from './pages/Albums';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';

const router = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}> 
                        <Route index element={<Home />} />
                        <Route path="/Judas Priest" element={<Albums />} />
                        <Route path="/Finntroll" element={<Albums />} />
                        <Route path="/Grimner" element={<Albums />} />
                        <Route path="/Amon Amarth" element={<Albums />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/*" element={<Navigate replace to="/" />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}

export default router