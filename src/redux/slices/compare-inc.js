import { createSlice } from "@reduxjs/toolkit";

const incCompare = createSlice({
    name: 'incrementCompare',
    initialState: { value: 0 },
    reducers: {
        incrementCarCompare: (state) => {
            if(state.value < 3) 
                state.value = state.value + 1
        },

        decrementCarCompare: (state) => {
            if(state.value === 0) return state.value = 0

            state.value = state.value - 1
        }
    }
})


export const actions = incCompare.actions
export default incCompare.reducer