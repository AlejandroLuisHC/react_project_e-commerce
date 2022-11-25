import { memo } from 'react';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import SearchBar from './SearchBar';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import UserConnected from './UserConnected';
import { DivNavGrid } from '../style/headerStyle.js'
import { useSelector } from 'react-redux';
import { LinkManager } from '../style/headerStyle';
import { GearFill } from 'react-bootstrap-icons';
const NavBar = ({ setItems, deleteFunc, items }) => {
    const isAdmin = useSelector((state) => state.userData.user.isAdmin)
    return (
        <nav className="navbar navbar-dark bg-dark">
            <DivNavGrid>
                <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
                <SearchBar />
                <UserConnected />
                {isAdmin && 
                    <LinkManager to="/management"><GearFill/>Manager</LinkManager>
                }
                <ShoppingCart 
                    deleteFunc  = {deleteFunc} 
                    setItems    = {setItems}
                    items       = {items}
                />           
            </DivNavGrid> 
        </nav>
    )
}

export default memo(NavBar)