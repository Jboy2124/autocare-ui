import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    fName: '',
    lName: '',
    emailAdd: '',
    passWord: '',
    confirmPass: ''
}

const accountSlice = createSlice({
    name: 'accountSlice',
    initialState: { value: initialValue },
    reducers: {
        loginCredential: (state, action) => {
            state.value = action.payload
        }
    }
})


export const actions = accountSlice.actions;
export default accountSlice.reducer;