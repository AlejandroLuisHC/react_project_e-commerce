import PurchaseList from './PurchaseList';
import accounting from 'accounting';
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import getTotal from '../../../helper/utils/getTotal';

const ShoppingCart = ({ setItems, deleteFunc, items }) => {
    let total = 0; 
    items.forEach(i => {
        total += i.quantity;   
    })
    
    const style = {
        boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, .4)",
        border: "none",
    }

    const totalPrice = getTotal(items);

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
                        setItems  = {setItems}
                        items     = {items}
                    />
                )}
                <li><hr className="dropdown-divider"/></li> 
                <li className='d-flex justify-content-end pe-3'><b>Sub total: {accounting.formatMoney(totalPrice, {symbol:"€", format:"%v %s"})}</b></li>
                <li><hr className="dropdown-divider"/></li>
                <li className="d-flex flex-column ps-2 pe-2 align-items-center justify-content-between gap-1">
                    <Link to="checkout">
                        <button className='btn btn-success btn-lg'>Buy now!</button>
                    </Link> 
                    <button className='btn btn-outline-danger btn-sm' onClick={deleteFunc}>Empty cart</button>
                </li>
            </ul>
        </div>
    )
}

export default ShoppingCart