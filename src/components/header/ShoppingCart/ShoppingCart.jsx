import PurchaseList from './PurchaseList';
import accounting from 'accounting';
import { Cart } from 'react-bootstrap-icons';
import { Navigate } from 'react-router-dom';
import getTotal from '../../../helper/utils/getTotal';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart } from '../../../redux/features/cartData/cartSlice';
import { useState } from 'react';
import { ButtonCart } from '../../style/headerStyle';

const ShoppingCart = () => {
    const items = useSelector((state) => state.cartData.cart)
    const dispatch = useDispatch();

    let total = 0;
    items.map(i => total += i.quantity)
    
    const totalPrice = getTotal(items);
    const disableBtn = items.length === 0 ? "disabled" : "";
    
    const handleEmpty = () => {
        dispatch(emptyCart());
    }
    const [cartTrue, setCartTrue] = useState(false);
    const moveCheckout = () => {
        if(items.length > 0 ){
            setCartTrue(prev => prev = true)
        }
        setTimeout(() => {
            setCartTrue(prev => prev = false)  
        }, 1);
    }
    return (
        <div className="dropstart">
            <ButtonCart className="btn btn-secondary dropdown-toggle" type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                <Cart /> <span id="productsInCart">{total === 0 ? "" : total}</span>
            </ButtonCart>
            <ul id="purchaseList" className="dropdown-menu dropdown-menu-dark">
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
                    <button className='btn btn-success btn-lg' onClick={moveCheckout} disabled={disableBtn}>Buy now!</button>
                    <button className='btn btn-outline-danger btn-sm' onClick={handleEmpty}>Empty cart</button>
                </li>
            </ul>
            {cartTrue && <Navigate to="checkout"/>}
        </div>
    )
}

export default ShoppingCart