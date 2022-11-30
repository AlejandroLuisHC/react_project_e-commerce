import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
        LOG_IN_USER: (state, action) => {
            if (action.payload.username === 'admin') {
                sessionStorage.setItem('user', JSON.stringify({
                    ...action.payload,
                    isLogged: true,
                    isAdmin: true
                }));
                state.user = {
                    ...action.payload,
                    isLogged: true,
                    isAdmin: true
                }
            } else {
                sessionStorage.setItem('user', JSON.stringify({
                    ...action.payload,
                    isLogged: true
                }));
                state.user = {
                    ...action.payload,
                    isLogged: true
                }
            }
            toast(`Welcome, ${action.payload.username}`, {
                icon: '🤟',
                style: {
                    borderRadius: '10px',
                    background: 'rgb(56, 57, 65)',
                    color: '#eee',
                }
            })
        },
        LOG_OUT_USER: (state) => {
            sessionStorage.removeItem('user');
            state.user = {
                isLogged: false,
                username: "Guest"
            };
        }
    }
})

export const {
    LOG_IN_USER, 
    LOG_OUT_USER
} = userSlice.actions;

export default userSlice.reducer;