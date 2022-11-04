import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from './assets/css/index.css';
import Router from './routes/Router'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.style = {style};

root.render(
        <Router />
);

