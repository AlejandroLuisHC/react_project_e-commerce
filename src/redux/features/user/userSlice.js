import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
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
            sessionStorage.removeItem('user');
            state.user = initialState;
        }
    }
})

export const { logInUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;