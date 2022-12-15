import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authSlice',
    initialState: { value: 'false' },
    reducers: {
        LoginAuth: (state, action) => {
            state.value = action.payload
        }
    }
    
})

export const actions = authSlice.actions
export default authSlice.reducer