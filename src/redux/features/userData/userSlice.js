import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(sessionStorage.getItem('user')) ?? {
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
            state = action.payload;
        },
        logOutUser: (state) => {
            sessionStorage.removeItem('user');
            state.user = {
                username: "Guest"
            };
        },
        addToCart: (state, action) => { // payload === {id, name, img, ...rest}
            const item = {
                ...action.payload, 
                quantity: 1
            }
            if (state.cart.length > 0) {
                const existId = (id, state) => {
                    let exist = false;
                    state.map(e => {
                        if (e.id === id) {
                            exist = true;
                            return exist
                        }
                        return null;
                    })
                    return exist;
                }

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
        },
        emptyCart: (state) => {
            sessionStorage.removeItem('cart');
            state.cart = [];
        },
        setWish: (state, action) => {
            if (state.wish.length > 0) {
                const existId = (id, state) => {
                    let exist = false;
                    state.map(e => {
                        if (e.id === id) {
                            exist = true;
                            return exist
                        }
                        return null;
                    })
                    return exist;
                }

                if (existId(action.payload.id, state.wish)) {
                    state.wish.map(e => {
                        if (e.id === action.payload.id) {
                            const pos = state.wish.indexOf(e);
                            return state.wish.splice(pos, 1);
                        }
                        return null
                    }) 
                } else {
                    state.wish.push(action.payload)
                }
            } else {
                state.wish.push(action.payload);
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