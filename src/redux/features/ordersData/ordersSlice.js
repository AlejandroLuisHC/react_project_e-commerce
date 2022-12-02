import { createSlice } from "@reduxjs/toolkit";
import { addOrder } from "./reducers";

const initialState = {
    order: JSON.parse(sessionStorage.getItem('user')) ?? {
    }
}

export const ordersSlice = createSlice({
    name: "ordersData",
    initialState,
    reducers: {
        ADD_ORDER: addOrder,
    }
})

export const {
    ADD_ORDER, 
    PROCESS_ORDER,
    SHIP_ORDER,
    CLOSE_ORDER
} = ordersSlice.actions;

export default ordersSlice.reducer;