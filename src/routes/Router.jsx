import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../routes/Layout';
import Home from "../routes/Home";
import Albums from '../routes/Albums';
import Checkout from '../routes/Checkout';

const router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}> 
                    <Route index element={<Home />} />
                    <Route path="/Judas Priest" element={<Albums />} />
                    <Route path="/Finntroll" element={<Albums />} />
                    <Route path="/Grimner" element={<Albums />} />
                    <Route path="/Amon Amarth" element={<Albums />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/*" element={<Navigate replace to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default router