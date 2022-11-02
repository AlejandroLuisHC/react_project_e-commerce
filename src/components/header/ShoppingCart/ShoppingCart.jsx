import PurchaseList from './PurchaseList';
import accounting from 'accounting';
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
        <div className="dropstart">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-auto-close="false" data-bs-toggle="dropdown" aria-expanded="false">
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
                <li><hr class="dropdown-divider"/></li> 
                <li className='d-flex justify-content-end pe-3'><b>Total: {accounting.formatMoney(totalPrice, "€")}</b></li>
                <li><hr class="dropdown-divider"/></li>
                <li className="d-flex flex-column ps-2 pe-2 align-items-center justify-content-between gap-1"><button className='btn btn-success btn-lg'>Buy now!</button><button className='btn btn-outline-danger btn-sm' onClick={deleteFunc}>Empty cart</button></li>
            </ul>
        </div>
    )
}

export default ShoppingCart