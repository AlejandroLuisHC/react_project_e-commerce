import { createSlice } from "@reduxjs/toolkit";
import { logInUser, logOutUser } from "./reducers";

const initialState = {
    user: JSON.parse(sessionStorage.getItem('user')) ?? {
        isLogged: false,
        isAdmin: false,
        username: "Guest"
    }
}

export const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        LOG_IN_USER: logInUser,
        LOG_OUT_USER: logOutUser
    }
})

export const {
    LOG_IN_USER, 
    LOG_OUT_USER
} = userSlice.actions;

export default userSlice.reducer;