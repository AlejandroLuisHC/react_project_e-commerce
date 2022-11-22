import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userData/userSlice";
import cartReducer from "./features/cartData/cartSlice";
import wishReducer from "./features/wishData/wishSlice";

export const store = configureStore({
    reducer: {
        userData: userReducer,
        cartData: cartReducer,
        wishData: wishReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})