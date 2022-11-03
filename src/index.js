import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from './assets/css/index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './routes/Layout';
import Main from "./routes/Main";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.style = {style};

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}> 
                <Route index element={<Main />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

