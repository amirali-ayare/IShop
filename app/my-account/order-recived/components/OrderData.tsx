'use client'
import Image from 'next/image'
import React from 'react'
import thank from '@/image/thankyou.png'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { clearReserveData, IReserveData } from '@/redux/ReserveData'


function OrderData() {

    const selector = useSelector((state: {reserveData: IReserveData})=> state.reserveData)
    const Dispatch = useDispatch()
    console.log(selector);

    const order_data = [
        {
            title: 'نام:',
            data: selector.name
        },
        {
            title: 'تاریخ:',
            data: selector.deliveryDay
        },
        {
            title: 'شماره موبایل:',
            data: selector.phoneNumber
        },
        {
            title: 'آدرس:',
            data: selector.address
        },
        {
            title: 'قیمت نهایی:',
            data: selector.totalPrice
        },
        {
            title: 'روش ارسال:',
            data: selector.postMethod
        },
        {
            title: 'روش پرداخت:',
            data: 'پرداخت آنلاین'
        }
    ]

    const navigate = useRouter();

    const backToMainPage = () => {
        navigate.push('/')
        Dispatch(clearReserveData())
    }

    return (
        <div className='mt-5 grid grid-cols-1 gap-3'>
            <div className='flex justify-center'>
                <Image src={thank} alt='order-recived' />
            </div>

            <div className='flex justify-center'>
                <h1 className='text-slate-700 font-bold text-3xl'>از خرید شما متشکریم</h1>
            </div>

            <div className='flex flex-col items-center mt-5 gap-3'>
                {
                    order_data.map((item, index)=>{
                        return(
                            <div key={index} className='w-90 flex justify-between items-center'>
                                <h4 className='font-bold text-sm text-slate-600'>{item.title}</h4>
                                <h4 className='text-sm text-slate-600'>{item.data}</h4>
                            </div>
                        )
                    })
                }
                <button onClick={backToMainPage} className='w-90 mt-3 text-white cursor-pointer p-3 font-bold bg-rose-500 rounded-xl flex items-center justify-center'>بازگشت به صفحه اصلی</button>
            </div>
        </div>
    )
}

export default OrderData