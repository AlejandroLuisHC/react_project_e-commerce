import { createSlice } from "@reduxjs/toolkit";
import fetchCreateOrder from "../../../api/orders/fetchCreateOrder";

const initialState = {
    order: JSON.parse(sessionStorage.getItem('user')) ?? {
    }
}

export const ordersSlice = createSlice({
    name: "ordersData",
    initialState,
    reducers: {
        ADD_ORDER: (state, action) => {
            const order = {
                ...action.payload,
                state: 'Pending...'
            }
            const sendOrder = async() => {
                await fetchCreateOrder(order)
            }
            sendOrder()
        },
        PROCESS_ORDER: (state, action) => {

        },
        SHIP_ORDER: (state, action) => {

        },
        CLOSE_ORDER: (state, action) => {

        }
    }
})

export const {
    ADD_ORDER, 
    PROCESS_ORDER,
    SHIP_ORDER,
    CLOSE_ORDER
} = ordersSlice.actions;

export default ordersSlice.reducer;