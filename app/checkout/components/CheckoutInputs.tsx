'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAddress, setName, setPhoneNumber, setReserveCity } from '@/redux/ReserveData';

function CheckoutInputs() {

    const Dispatch = useDispatch();
    const reserve = useSelector((state: any) => state.reserveData)
    console.log(reserve);

    return (
        <form>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-5 gap-5'>
                <div><input onChange={(e) => Dispatch(setName(e.target.value))} type="text" className='p-3 w-full border-1 border-slate-200 text-sm rounded-xl outline-none' placeholder='نام کامل...' /></div>
                <div><input onChange={(e) => Dispatch(setAddress(e.target.value))} type="text" className='p-3 w-full border-1 border-slate-200 text-sm rounded-xl outline-none' placeholder='آدرس کامل...' /></div>
                <div>
                    <select onChange={(e) => Dispatch(setReserveCity(e.target.value))} className='appearance-none p-3 border-1 border-slate-200 rounded-xl text-sm w-full'>
                        <option>تهران</option>
                        <option>گیلان</option>
                        <option>مازندران</option>
                        <option>الرز</option>
                        <option>قزوین</option>
                        <option>گلستان</option>
                        <option>آذربایجان</option>
                        <option>خراسان جنوبی</option>
                    </select>
                </div>
                <div><input type="text" onChange={(e) => Dispatch(setPhoneNumber(e.target.value))} className='p-3 w-full border-1 border-slate-200 text-sm rounded-xl outline-none' placeholder='تلفن...' /></div>
            </div>
        </form>
    )
}

export default CheckoutInputs