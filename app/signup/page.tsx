import Link from 'next/link'
import React from 'react'
import SignPhoneForm from './components/SignPhoneForm'
import { StoreProvider } from '@/redux/StoreProvider'

function page() {
    return (
        <div className='pt-40 w-full h-screen pb-30 flex items-center justify-center'>
            <div className='flex flex-col items-center gap-5'>
                <Link href={'/'}><h2 className='text-sm text-rose-500 font-bold flex gap-2 items-center'>
                    بازگشت به صفحه اصلی
                    <i className='bx bx-arrow-back' ></i>
                </h2></Link>
                <h4 className='text-slate-700 text-xl font-black'>ورود, ثبت نام</h4>
                <div>
                    <h4 className='text-slate-400 text-sm'>سلام!</h4>
                    <h4 className='text-slate-400 text-sm'>لطفا شماره موبایل خود را وارد کنید</h4>
                </div>
                <StoreProvider>
                    <SignPhoneForm />
                </StoreProvider>
            </div>
        </div>
    )
}

export default page