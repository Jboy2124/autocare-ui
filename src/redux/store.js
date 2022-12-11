import { configureStore } from '@reduxjs/toolkit'
import AccountId from '../redux/slices/reg-slice'


const store = configureStore({
    reducer: {
        accountID: AccountId
    }
})


export default store;