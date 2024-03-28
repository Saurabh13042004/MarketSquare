import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
       setCredentials: (state, action) => {
           state.userInfo = action.payload;
           localStorage.setItem('userInfo', JSON.stringify(action.payload));
       },
       logout: (state) => {
           state.userInfo = null;
           localStorage.removeItem('userInfo');
       },
    },
});


export const { setCredentials,logout } = authSlice.actions;

export default authSlice.reducer;