import React from 'react';
import Cart from './Cart';
import SearchBar from './SearchBar';
import logo from '../../assets/img/logo.svg';

const NavBar = () => {
    const navGrid = {
        display: "grid",
        padding: "0 0 0 40px",
        gridTemplateColumns: "3fr 14fr 1fr"
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid" style={navGrid}>
                <a className="navbar-brand" href="./index.js"><img src={logo} alt="logo" /></a>
                <SearchBar />
                <Cart />           
            </div> 
        </nav>
    )
}

export default NavBar