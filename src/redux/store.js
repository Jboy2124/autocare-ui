import { configureStore } from '@reduxjs/toolkit'
import AccountCredentials from '../redux/slices/reg-slice'


const store = configureStore({
    reducer: {
        loginCreds: AccountCredentials
    }
})


export default store;