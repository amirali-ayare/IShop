'use client'
import { IUser, uploadAddress } from '@/redux/UserProfileData'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function AddressDiv() {

    const [address, setAddress] = useState('')
    const user = useSelector((state: {user: IUser}) => state.user)
    const Dispatch = useDispatch();

    const changeAddress = () => {
        Dispatch(uploadAddress(address))
    }

    return (
        <div className='mt-8'>
            <div><h2 className='text-lg font-bold text-blue-800'>آدرس برای ارسال بار :</h2></div>
            <div className='p-3 flex flex-col gap-2 w-50 rounded-lg mt-5 border-1 border-zinc-200 bg-slate-100'>
                <h2 className='text-xs text-slate-700 font-bold'>{user.name}</h2>
                <h2 className='text-xs text-slate-700 font-bold'>{user.city}</h2>
                <h2 className='text-xs text-slate-700 font-bold'>{user.address}</h2>
            </div>
            <div className='mt-5'>
                <textarea onChange={(e) => setAddress(e.target.value)} className='p-2 text-sm w-50 outline-none bg-slate-100 border-1 border-zinc-200 rounded-lg h-[100px] resize-none' placeholder='آدرس جدید' />
            </div>
            <div>
                <button onClick={changeAddress} className='bg-blue-800 text-white py-2 px-5 text-sm cursor-pointer rounded-lg shadow-lg shadow-blue-200'>ثبت</button>
            </div>
        </div>
    )
}

export default AddressDiv