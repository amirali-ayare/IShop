import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { CartSlice } from './CartSlice'
import { UserProfileData } from './UserProfileData'
import { ReserveData } from './ReserveData'


export default configureStore({
    reducer: {
        ShopCart: CartSlice.reducer,
        user: UserProfileData.reducer,
        reserveData: ReserveData.reducer
    }
})