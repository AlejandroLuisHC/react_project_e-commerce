import PurchaseList from './PurchaseList';

const Cart = ({ add, sub, deleteFunc }) => {
    const cartIcon = 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>

    const itemsList = JSON.parse(localStorage.getItem('items'));
    let total = 0; 
    itemsList.forEach(i => {
        total += i.quantity;   
    })
       
    function getPrice(){
        if(itemsList.length > 0) {
            let price = 0;
            itemsList.map(i => price += i.price * i.quantity);
            return price;
        }
        return 0;
    }
    const totalPrice = getPrice();

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                {cartIcon} <span id="productsInCart">{total === 0 ? "" : total}</span>
            </button>
            <ul id="purchaseList" className="dropdown-menu">
                {itemsList.map(i => 
                    <PurchaseList key = {i.id}
                        quantity  = {i.quantity}
                        id        = {i.id}
                        name      = {i.name}
                        price     = {i.price * i.quantity}
                        add       = {add}
                        sub       = {sub}
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

export default Cart