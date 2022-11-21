import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import existId from "../../../helper/utils/existId";

const initialState = {
    user: JSON.parse(sessionStorage.getItem('user')) ?? {
        isLogged: false,
        username: "Guest"
    },
    cart: JSON.parse(sessionStorage.getItem('cart')) ?? [],
    wish: JSON.parse(sessionStorage.getItem('wish')) ?? [],
}

export const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        logInUser: (state, action) => {
            sessionStorage.setItem('user', JSON.stringify(action.payload));
            state.user = {
                ...action.payload,
                isLogged: true
            }
            toast(`Welcome, ${action.payload.username}`, {
                icon: '🤟',
                style: {
                    borderRadius: '10px',
                    background: 'rgb(56, 57, 65)',
                    color: '#eee',
                }
            })
        },
        logOutUser: (state) => {
            sessionStorage.removeItem('user');
            state.user = {
                isLogged: false,
                username: "Guest"
            };
        },
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
        },
        setWish: (state, action) => {
            if (state.wish.length > 0) {
                if (existId(action.payload.id, state.wish)) {
                    state.wish.map(e => {
                        if (e.id === action.payload.id) {
                            const pos = state.wish.indexOf(e);
                            toast(`Item deleted from wishlist`, {
                                icon: '💔',
                                style: {
                                    borderRadius: '10px',
                                    background: 'rgb(56, 57, 65)',
                                    color: '#eee',
                                }
                            })
                            return state.wish.splice(pos, 1);
                        }
                        return null
                    }) 
                } else {
                    state.wish.push(action.payload);
                    toast(`Item added to wishlist`, {
                        icon: '💖',
                        style: {
                            borderRadius: '10px',
                            background: 'rgb(56, 57, 65)',
                            color: '#eee',
                        }
                    })
                }
            } else {
                state.wish.push(action.payload);
                toast(`Item added to wishlist`, {
                    icon: '💖',
                    style: {
                        borderRadius: '10px',
                        background: 'rgb(56, 57, 65)',
                        color: '#eee',
                    }
                })
            }
            sessionStorage.setItem('wish', JSON.stringify(state.wish));
        },
        emptyWish: (state) => {
            sessionStorage.removeItem('wish');
            state.wish = [];
        }
    }
})

export const {
    logInUser, 
    logOutUser, 
    addToCart,
    addToQuantity,
    subtractFromQuantity, 
    eraseFromCart,
    emptyCart, 
    setWish,
    emptyWish
} = userSlice.actions;

export default userSlice.reducer;