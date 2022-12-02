import toast from "react-hot-toast";
import existId from "../../../../helper/utils/existId";

const addToCart = (state, action) => { // payload === {id, name, img, ...rest}
    const item = {
        ...action.payload, 
        quantity: 1
    }
    if (state.cart.length > 0) {
        if (existId(item.id, state.cart)) {
            state.cart.map(e => {
                if (e.id === item.id) {
                    if (e.quantity < item.stock) {
                        toast.success(`Added ${item.name} to cart`, {
                            style: {
                                borderRadius: '10px',
                                background: 'rgb(56, 57, 65)',
                                color: '#eee',
                            }
                        }) 
                        return e.quantity += 1;
                    } else {
                        return toast.error(`No stock to satisfy the petition`, {
                            style: {
                                borderRadius: '10px',
                                background: 'rgb(56, 57, 65)',
                                color: '#eee',
                            }
                        })
                    }
                }
                return null
            }) 
        } else {
            state.cart.push(item)
            toast.success(`Added ${item.name} to cart`, {
                style: {
                    borderRadius: '10px',
                    background: 'rgb(56, 57, 65)',
                    color: '#eee',
                }
            }) 
        }
    } else {
        state.cart.push(item);
        toast.success(`Added ${item.name} to cart`, {
            style: {
                borderRadius: '10px',
                background: 'rgb(56, 57, 65)',
                color: '#eee',
            }
        }) 
    }
    sessionStorage.setItem('cart', JSON.stringify(state.cart));
}
export default addToCart;