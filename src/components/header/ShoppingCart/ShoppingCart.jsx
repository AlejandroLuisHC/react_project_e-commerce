import PurchaseList from './PurchaseList';
import accounting from 'accounting';
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import getTotal from '../../../helper/utils/getTotal';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart } from '../../../redux/features/userData/userSlice';

const ShoppingCart = () => {
    const style = {
        boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, .4)",
        border: "none",
    }

    const items = useSelector((state) => state.userData.cart)
    const dispatch = useDispatch();

    let total = 0;
    items.map(i => total += i.quantity)
    
    const totalPrice = getTotal(items);
    
    const username = useSelector((state) => state.userData.user.username)
    const checkUser = (username) => username === "Guest" ? "login" : "checkout";
    const disableLink = items.length === 0 ? "/" : checkUser(username);
    const disableBtn = items.length === 0 ? "disabled" : "";
    
    return (
        <div className="dropstart">
            <button className="btn btn-secondary dropdown-toggle" style={style} type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                <Cart /> <span id="productsInCart">{total === 0 ? "" : total}</span>
            </button>
            <ul id="purchaseList" className="dropdown-menu dropdown-menu-dark col-10">
                {items.map(i => 
                    <PurchaseList key = {i.id}
                        quantity  = {i.quantity}
                        id        = {i.id}
                        name      = {i.name}
                        price     = {i.price * i.quantity}
                    />
                )}
                <li><hr className="dropdown-divider"/></li> 
                <li className='d-flex justify-content-end pe-3'><b>Sub total: {accounting.formatMoney(totalPrice, {symbol:"€", format:"%v %s"})}</b></li>
                <li><hr className="dropdown-divider"/></li>
                <li className="d-flex flex-column ps-2 pe-2 align-items-center justify-content-between gap-1">
                    <Link to={disableLink}>
                        <button className='btn btn-success btn-lg' disabled={disableBtn}>Buy now!</button>
                    </Link> 
                    <button className='btn btn-outline-danger btn-sm' onClick={() => dispatch(emptyCart())}>Empty cart</button>
                </li>
            </ul>
        </div>
    )
}

export default ShoppingCart