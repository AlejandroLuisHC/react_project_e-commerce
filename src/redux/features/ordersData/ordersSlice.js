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
        addOrder: (state, action) => {
            const order = {
                ...action.payload,
                state: 'Pending...'
            }
            const sendOrder = async() => {
                await fetchCreateOrder(order)
            }
            sendOrder()
        },
        processOrder: (state, action) => {

        },
        shipOrder: (state, action) => {

        },
        closeOrder: (state, action) => {

        }
    }
})

export const {
    addOrder, 
    processOrder,
    shipOrder,
    closeOrder
} = ordersSlice.actions;

export default ordersSlice.reducer;