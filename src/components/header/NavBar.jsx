import React from 'react';
import Cart from './Cart';
import SearchBar from './SearchBar';
import logo from '../../assets/img/logo.svg';

const NavBar = ({ count, deleteFunc }) => {
    const navGrid = {
        height: "54px",
        display: "grid",
        padding: "0 0 0 40px",
        gridTemplateColumns: "1fr 8fr 1fr"
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid" style={navGrid}>
                <a className="navbar-brand" href="./index.js"><img src={logo} alt="logo" /></a>
                <SearchBar />
                <Cart 
                    count={count}
                    deleteFunc={deleteFunc} 
                />           
            </div> 
        </nav>
    )
}

export default NavBar