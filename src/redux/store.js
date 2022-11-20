import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userData/userSlice";

export const store = configureStore({
    reducer: {
        userData: userReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})