import { createSlice } from "@reduxjs/toolkit";
import { addToCart, addToQuantity, emptyCart, eraseFromCart, subtractFromQuantity } from "./reducers";

const initialState = {
    cart: JSON.parse(sessionStorage.getItem('cart')) ?? [],
}

export const cartSlice = createSlice({
    name: "cartData",
    initialState,
    reducers: {
        ADD_TO_CART: addToCart,
        ADD_TO_QUANTITY: addToQuantity,
        SUBTRACT_FROM_QUANTITY: subtractFromQuantity,
        ERASE_FROM_CART: eraseFromCart,
        EMPTY_CART: emptyCart
    }
})

export const { 
    ADD_TO_CART,
    ADD_TO_QUANTITY,
    SUBTRACT_FROM_QUANTITY, 
    ERASE_FROM_CART,
    EMPTY_CART, 
} = cartSlice.actions;

export default cartSlice.reducer;