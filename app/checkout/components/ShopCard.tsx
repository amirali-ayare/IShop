'use client'
import { addCartToReserve, setTotalPrice } from '@/redux/ReserveData';
import { setToLatestOrders } from '@/redux/UserProfileData';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ShopCard() {

    const reserveData = useSelector((state: any) => state.reserveData)
    const selectedProducts = useSelector((state: any) => state.ShopCart)
    const totalPrice = selectedProducts.reduce((total: number, item: any) => {
        return total + (item.quantity * item.price);
    }, 0);

    const Dispatch = useDispatch();

    useEffect(()=>{
        Dispatch(setTotalPrice(totalPrice))
    },[totalPrice])

    const navigate = useRouter();
    const confirmReserve = () => {
        navigate.push('/my-account/order-recived')
        Dispatch(addCartToReserve(selectedProducts))
        // Dispatch(setToLatestOrders(reserveData))
    }
    // console.log(reserveData);


    return (
        <div className='p-5 border-1 border-slate-200 rounded-xl'>
            <div className='border-b-1 border-slate-200 flex flex-col items-center'>
                {
                    selectedProducts.map((item:any, index:number) => {
                        return (
                            <div key={index} className='flex items-center gap-5 py-3'>
                                <div>
                                    <h3 className='text-xs font-bold'>{item.name} × {item.quantity}</h3>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h4 className='text-xs'>{item.string_price}</h4>
                                    <h4 className='text-xs'>تومان</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='flex py-3 flex items-center justify-between'>
                <h2 className='font-bold'>مجموع</h2>
                <h2 className='font-black text-xl'>{totalPrice} <span className='font-normal text-sm'>تومان</span></h2>
            </div>

            <div>
                <button onClick={confirmReserve} className='bg-rose-500 text-white rounded-xl p-3 w-full shadow-lg cursor-pointer shadow-rose-200'>ثبت سفارش</button>
            </div>
        </div>
    )
}

export default ShopCard