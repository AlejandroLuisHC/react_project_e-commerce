import React from 'react';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import SearchBar from './SearchBar';
import logo from '../../assets/img/logo.svg';

const NavBar = ({ setItems, deleteFunc, items }) => {
    const navGrid = {
        height: "54px",
        display: "grid",
        padding: "0 10px 0 40px",
        gridTemplateColumns: "1fr 4fr 1fr"
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid" style={navGrid}>
                <a className="navbar-brand" href="./index.js"><img src={logo} alt="logo" /></a>
                <SearchBar />
                <ShoppingCart 
                    deleteFunc  = {deleteFunc} 
                    setItems    = {setItems}
                    items       = {items}
                />           
            </div> 
        </nav>
    )
}

export default NavBar