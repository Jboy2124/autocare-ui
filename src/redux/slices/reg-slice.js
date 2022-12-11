import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    account: 0
}

const accountSlice = createSlice({
    name: 'accountSlice',
    initialState: { value: initialValue },
    reducers: {
        getID: (state, action) => {
            state.value = action.payload
        }
    }
})


export const actions = accountSlice.actions;
export default accountSlice.reducer;