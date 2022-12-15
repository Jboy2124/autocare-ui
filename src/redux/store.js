import { configureStore } from '@reduxjs/toolkit'
import AccountCredentials from '../redux/slices/reg-slice'
import LoginAuth from '../redux/slices/auth-slice'
import CarCompare from '../redux/slices/compare-inc'


const store = configureStore({
    reducer: {
        loginCreds: AccountCredentials,
        auth: LoginAuth,
        car_compare: CarCompare
    }
})


export default store;