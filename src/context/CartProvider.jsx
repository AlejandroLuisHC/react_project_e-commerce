import { useState } from 'react';
import { useEffect } from 'react';
import CartContext from './CartContext';

const CartProvider = ({ children }) => { 
    
    const itemsInCart = JSON.parse(sessionStorage.getItem('items')) ?? [];
    const [items, setItems] = useState(itemsInCart);

    useEffect(() => {
        updateStorage(items)
    }, [items]);

    function updateStorage(state) {
        sessionStorage.setItem('items', JSON.stringify(state));
    }
    
    const deleteFunc = () => {
        setItems([]);
    }
    const providerValue = {
        items,
        setItems,
        deleteFunc,
    }
    return (
        <CartContext.Provider value={providerValue}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider