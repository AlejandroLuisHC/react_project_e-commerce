import PurchaseList from './PurchaseList';
import { Cart } from 'react-bootstrap-icons';
const ShoppingCart = ({ setItems, deleteFunc, items }) => {
    let total = 0; 
    items.forEach(i => {
        total += i.quantity;   
    })
       
    function getPrice(){
        if(items.length > 0) {
            let price = 0;
            items.map(i => price += i.price * i.quantity);
            return price;
        }
        return 0;
    }
    const totalPrice = getPrice();

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                <Cart /> <span id="productsInCart">{total === 0 ? "" : total}</span>
            </button>
            <ul id="purchaseList" className="dropdown-menu">
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
                <hr/> 
                <li className='d-flex justify-content-end pe-3'><b>Total: {totalPrice}€</b></li>
                <hr/> 
                <li className="d-flex justify-content-center"><button className='btn btn-danger' onClick={deleteFunc}>Empty cart</button></li>
            </ul>
        </div>
    )
}

export default ShoppingCart