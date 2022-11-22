import { memo } from 'react';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import SearchBar from './SearchBar';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import UserConnected from './UserConnected';

const NavBar = ({ setItems, deleteFunc, items }) => {
    const navGrid = {
        height: "54px",
        display: "grid",
        padding: "0 10px 0 40px",
        gridTemplateColumns: "1fr 3fr 1fr 1fr"
    }

    
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid" style={navGrid}>
                <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
                <SearchBar />
                <UserConnected />
                <ShoppingCart 
                    deleteFunc  = {deleteFunc} 
                    setItems    = {setItems}
                    items       = {items}
                />           
            </div> 
        </nav>
    )
}

export default memo(NavBar)