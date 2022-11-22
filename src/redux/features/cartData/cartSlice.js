import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import existId from "../../../helper/utils/existId";

const initialState = {
    cart: JSON.parse(sessionStorage.getItem('cart')) ?? [],
}

export const cartSlice = createSlice({
    name: "cartData",
    initialState,
    reducers: {
        addToCart: (state, action) => { // payload === {id, name, img, ...rest}
            const item = {
                ...action.payload, 
                quantity: 1
            }
            if (state.cart.length > 0) {
                if (existId(item.id, state.cart)) {
                    state.cart.map(e => {
                        if (e.id === item.id) {
                            return e.quantity += 1;
                        }
                        return null
                    }) 
                } else {
                    state.cart.push(item)
                }
            } else {
                state.cart.push(item);
            }
            sessionStorage.setItem('cart', JSON.stringify(state.cart));
        },
        addToQuantity: (state, action) => { // payload === id
            state.cart.map(e => {
                if (e.id === action.payload) {
                    return e.quantity += 1;
                }
                return null;
            })
            sessionStorage.setItem('cart', JSON.stringify(state.cart));
        },
        subtractFromQuantity: (state, action) => { // payload === id
            state.cart.map(e => {
                if (e.id === action.payload) {
                    if (e.quantity > 1) {
                        return e.quantity -= 1
                    } else {
                        const pos = state.cart.indexOf(e);
                        toast.success(`The item's been removed`, {
                            style: {
                                borderRadius: '10px',
                                background: 'rgb(56, 57, 65)',
                                color: '#eee',
                            }
                        })
                        return state.cart.splice(pos, 1);
                    }
                }
                return null;
            })
            sessionStorage.setItem('cart', JSON.stringify(state.cart));
        },
        eraseFromCart: (state, action) => { // payload === id 
            state.cart.map(e => {
                if (e.id === action.payload)  {
                    const pos = state.cart.indexOf(e);
                    return state.cart.splice(pos, 1);
                } else return null;
            })
            sessionStorage.setItem('cart', JSON.stringify(state.cart));
            toast.success(`The item's been removed`, {
                style: {
                    borderRadius: '10px',
                    background: 'rgb(56, 57, 65)',
                    color: '#eee',
                }
            })
        },
        emptyCart: (state) => {
            sessionStorage.removeItem('cart');
            state.cart = [];
            toast.success('Your cart is empty', {
                style: {
                    borderRadius: '10px',
                    background: 'rgb(56, 57, 65)',
                    color: '#eee',
                }
            })
        }
    }
})

export const { 
    addToCart,
    addToQuantity,
    subtractFromQuantity, 
    eraseFromCart,
    emptyCart, 
} = cartSlice.actions;

export default cartSlice.reducer;