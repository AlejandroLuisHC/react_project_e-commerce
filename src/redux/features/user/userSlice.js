import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(sessionStorage.getItem('user')) || {
        username: "Guest"
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logInUser: (state, action) => {
            sessionStorage.setItem('user', JSON.stringify(action.payload));
            state.user = action.payload;
        },
        logOutUser: (state) => {
            console.log('loggin out');
            sessionStorage.removeItem('user');
            state.user = {
                username: "Guest"
            };
        }
    }
})

export const { logInUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;