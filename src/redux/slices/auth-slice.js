import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authSlice',
    initialState: { isLoggedIn: 'false' },
    reducers: {
        LoginAuth: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    }
    
})

export const actions = authSlice.actions
export default authSlice.reducer