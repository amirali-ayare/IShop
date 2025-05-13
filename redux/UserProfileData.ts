import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
    name: string,
    email: string,
    job: string,
    nationalCode: string,
    phoneNumber: string,
    telephone: string,
    password: string,
    address: string,
    birthday: string,
    city: string,
    signed: boolean
}

export const UserProfileData = createSlice({
    name: 'userData',
    initialState: {
        name: '',
        email: '',
        job: '',
        nationalCode: '',
        phoneNumber: '',
        telephone: '',
        password: '',
        address: '',
        birthday: '',
        city: '',
        signed: false
    },

    reducers: {
        signUp: (state: any) => {
            state.signed = true
        },
        signOut: (state: any) => {
            state.signed = false
        },
        uploadName: (state: any, action) => {
            state.name = action.payload
        },
        uploadJob: (state: any, action) => {
            state.job = action.payload
        },
        uploadEmail: (state: any, action) => {
            state.email = action.payload
        },
        uploadNationalCode: (state: any, action) => {
            state.nationalCode = action.payload
        },
        uploadTelephone: (state: any, action) => {
            state.telephone = action.payload
        },
        uploadBirthday: (state: any, action) => {
            state.birthday = action.payload
        },
        uploadPhoneNumber: (state: any, action) => {
            state.phoneNumber = action.payload
        },
        uploadAddress: (state: any, action) => {
            state.address = action.payload
        },
        uploadPassword: (state: any, action) => {
            state.password = action.payload
        },
        setCity: (state: any, action) => {
            state.city = action.payload
        },
        pay: (state: any) => {
            state.transactions += 1
        },
        increaseScore: (state: any) => {
            state.score += 15
        },
        setToLatestOrders: (state: any, action) => {
            state.latestOrder = action.payload;
        },
        AddToFavoriteList: (state: any, action) => {
            const existFavorite = state.findIndex((item: any) => item.id === action.payload.id);
            if (existFavorite < 0) {
                state.push({ ...action.payload.item });
            }
        }
    }
})

export const { AddToFavoriteList, uploadJob, uploadEmail, uploadTelephone, uploadBirthday, uploadNationalCode, setToLatestOrders, signUp, setCity, signOut, uploadName, uploadPhoneNumber, uploadPassword, pay, uploadAddress, increaseScore } = UserProfileData.actions