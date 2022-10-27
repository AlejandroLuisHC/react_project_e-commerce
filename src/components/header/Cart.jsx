import PurchaseList from './PurchaseList'

const Cart = ({ count, deleteFunc }) => {
    const itemsInCart = JSON.parse(localStorage.getItem('items'));
    const cartIcon = 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    const totalPrice = getPrice();

    function getPrice(){
        if(itemsInCart.length > 0) {
            let price = 0;
            itemsInCart.map(i => price += i.price);
            return price;
        }
        return 0;

    }
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {cartIcon} <span id="productsInCart">{count === 0? "" : count}</span>
            </button>
            <ul id="purchaseList" className="dropdown-menu">
                {itemsInCart.map(i => 
                    <PurchaseList key = {i.id}
                        id      = {i.id}
                        name    = {i.name}
                        price   = {i.price}
                    />
                )}
                <hr/> 
                <li className='dropdown-item'><b>Total: {totalPrice}€</b></li>
                <hr/> 
                <li class="d-flex justify-content-center"><button className='btn btn-danger' onClick={deleteFunc}>Empty cart</button></li>
            </ul>
        </div>
    )
}

export default Cart