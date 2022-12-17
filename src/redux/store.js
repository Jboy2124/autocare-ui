import { configureStore } from '@reduxjs/toolkit'
import AccountCredentials from '../redux/slices/reg-slice'
import LoginAuth from '../redux/slices/auth-slice'
import CarCompare from '../redux/slices/compare-inc'
import Profile from '../redux/slices/profile-slice'


const store = configureStore({
    reducer: {
        loginCreds: AccountCredentials,
        auth: LoginAuth,
        carCompare: CarCompare,
        storeProfile: Profile
    }
})


export default store;