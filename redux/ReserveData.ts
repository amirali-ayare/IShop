import { createSlice } from "@reduxjs/toolkit";

export const ReserveData = createSlice({
    name: 'reserveData',
    initialState: {
        cart: [],
        name: '',
        phoneNumber: '',
        address: '',
        city: '',
        deliveryDay: '',
        deliveryTime: '',
        postMethod: '',
        totalPrice: 0,
    },

    reducers: {
        setName: (state: any, action) => {
            state.name = action.payload
        },
        setPhoneNumber: (state: any, action) => {
            state.phoneNumber = action.payload
        },
        PostMethod: (state: any, action) => {
            state.postMethod = action.payload
        },
        setAddress: (state: any, action) => {
            state.address = action.payload
        },
        setReserveCity: (state: any, action) => {
            state.city = action.payload
        },
        setDeliveryDay: (state: any, action) => {
            state.deliveryDay = action.payload
        },
        setDeliveryTime: (state: any, action) => {
            state.deliveryTime = action.payload
        },
        setTotalPrice: (state: any, action) => {
            state.totalPrice = action.payload
        },
        addCartToReserve: (state: any, action) => {
            state.cart = [...action.payload]
        },
        clearReserveData: (state: any) => {
            state.cart.splice(0, state.cart.length),
            state.name = '',
            state.phoneNumber = '',
            state.address = '',
            state.city = '',
            state.deliveryDay = '',
            state.deliveryTime = '',
            state.postMethod = '',
            state.totalPrice = 0
        }
    }
})

export const { clearReserveData, PostMethod, addCartToReserve, setTotalPrice, setReserveCity, setName, setPhoneNumber, setAddress, setDeliveryDay, setDeliveryTime } = ReserveData.actions