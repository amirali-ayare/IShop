import { StoreProvider } from '@/redux/StoreProvider';
import React from 'react'
import PriceDiv from './PriceDiv';
import Link from 'next/link';
import PaymentMethod from './PaymentMethod';

function TotalAmountBox() {

    return (
        <div className='py-5 px-7 border-1 border-slate-300 rounded-xl grid grid-cols-1 gap-3'>

            <StoreProvider>
                <PriceDiv />


                <div className='mt-3'><h5 className='text-sm font-bold text-slate-600'>حمل و نقل</h5></div>
                <PaymentMethod />
            </StoreProvider>

            <div className='grid place-items-center mt-5'>
                <Link className='w-full' href={'/checkout'}><button className='w-full shadow-lg shadow-rose-200 cursor-pointer bg-rose-500 p-2 text-white font-bold rounded-xl'>اقدام به پرداخت</button></Link>
            </div>
        </div>
    )
}

export default TotalAmountBox