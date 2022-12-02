import { createSlice } from "@reduxjs/toolkit";
import { emptyWish, setWish } from "./reducers";

const initialState = {
    wish: JSON.parse(sessionStorage.getItem('wish')) ?? [],
}

export const wishSlice = createSlice({
    name: "wishData",
    initialState,
    reducers: {
        SET_WISH: setWish,
        EMPTY_WISH: emptyWish
    }
})

export const {
    SET_WISH,
    EMPTY_WISH
} = wishSlice.actions;

export default wishSlice.reducer;