import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    user: JSON.parse(sessionStorage.getItem('user')) ?? {
        isLogged: false,
        username: "Guest"
    }
}

export const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        logInUser: (state, action) => {
            sessionStorage.setItem('user', JSON.stringify({
                ...action.payload,
                isLogged: true
            }));
            state.user = {
                ...action.payload,
                isLogged: true
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
        logOutUser: (state) => {
            sessionStorage.removeItem('user');
            state.user = {
                isLogged: false,
                username: "Guest"
            };
        }
    }
})

export const {
    logInUser, 
    logOutUser
} = userSlice.actions;

export default userSlice.reducer;