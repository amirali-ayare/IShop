'use client'
import { PostMethod } from '@/redux/ReserveData'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

function PaymentMethod() {

    const Dispatch = useDispatch()

    const [postMethod, setPostMethod] = useState('پست عادی')

    useEffect(() => {
        Dispatch(PostMethod(postMethod))
    }, [postMethod])
    return (
        <div className='flex flex-col gap-3'>

            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <span onClick={() => setPostMethod('پست عادی')} className={postMethod === 'پست عادی' ? 'p-2 rounded-full cursor-pointer bg-rose-500 border-1 border-slate-300 flex' : 'p-2 rounded-full cursor-pointer bg-slate-100 border-1 border-slate-300 flex'}></span>
                    <h6 className='text-sm text-slate-600'>پست عادی:</h6>
                </div>

                <div>
                    <h5 className='text-sm font-bold text-slate-600'>25,000 تومان</h5>
                </div>
            </div>

            <div className='flex cursor-pointer items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <span onClick={() => setPostMethod('پست پیشتاز')} className={postMethod === 'پست پیشتاز' ? 'p-2 rounded-full cursor-pointer bg-rose-500 border-1 border-slate-300 flex' : 'p-2 rounded-full cursor-pointer bg-slate-100 border-1 border-slate-300 flex'}></span>
                    <h6 className='text-sm text-slate-600'>پست پیشتاز:</h6>
                </div>

                <div>
                    <h5 className='text-sm font-bold text-slate-600'>56,000 تومان</h5>
                </div>
            </div>

        </div>
    )
}

export default PaymentMethod