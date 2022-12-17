import { createSlice } from "@reduxjs/toolkit";


const initialValue = {
    firstname: '',
    lastname: '',
    email: ''
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        value: initialValue
    },
    reducers: {
        profile: (state, action) => {
            state.value = action.payload
        }
    }
})

export const actionProfile = profileSlice.actions
export default profileSlice.reducer