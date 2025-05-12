import Link from 'next/link'
import React from 'react'
import UserDataForm from './components/UserDataForm'
import { StoreProvider } from '@/redux/StoreProvider'

function page() {
    return (
        <div className='pt-40 w-full h-screen pb-30 flex items-center justify-center'>
            <div className='flex flex-col items-center gap-5'>
                <Link href={'/'}><h2 className='text-sm text-rose-500 font-bold flex gap-2 items-center'>
                    بازگشت به صفحه اصلی
                    <i className='bx bx-arrow-back' ></i>
                </h2></Link>
                <h4 className='text-slate-700 text-xl font-black'>تکمیل فرم</h4>
                <div>
                    <h4 className='text-slate-400 text-sm'>اطلاعات حساب خود را وارد کنید</h4>
                </div>
                <StoreProvider>
                    <UserDataForm />
                </StoreProvider>
            </div>
        </div>
    )
}

export default page