import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userData/userSlice";
import cartReducer from "./features/cartData/cartSlice";
import wishReducer from "./features/wishData/wishSlice";
// import ordersReducer from "./features/ordersData/ordersSlice";

export const store = configureStore({
    reducer: {
        userData: userReducer,
        cartData: cartReducer,
        wishData: wishReducer,
        // ordersData: ordersReducer,
    }
})