import React from 'react';
import Cart from './Cart/Cart';
import SearchBar from './SearchBar';
import logo from '../../assets/img/logo.svg';

const NavBar = ({ add, sub, deleteFunc }) => {
    const navGrid = {
        height: "54px",
        display: "grid",
        padding: "0 0 0 40px",
        gridTemplateColumns: "1fr 4fr 1fr"
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid" style={navGrid}>
                <a className="navbar-brand" href="./index.js"><img src={logo} alt="logo" /></a>
                <SearchBar />
                <Cart 
                    deleteFunc  = {deleteFunc} 
                    add         = {add}
                    sub         = {sub}
                />           
            </div> 
        </nav>
    )
}

export default NavBar