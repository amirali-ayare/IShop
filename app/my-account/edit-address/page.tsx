import React from 'react'
import AccountBox from '../components/AccountBox'
import { StoreProvider } from '@/redux/StoreProvider'
import AddressDiv from './components/AddressDiv'

function page() {
    return (
        <div className='pt-40 pb-20 px-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4'>
            <div className='col-span-1'>
                <StoreProvider>
                    <AccountBox />
                </StoreProvider>
            </div>

            <div className='col-span-3'>
                <div className='flex items-center gap-3 text-blue-800 py-5 border-b-1 border-slate-300'>
                    <i className='bx bx-map text-2xl'></i>
                    <h2 className='text-lg font-bold'>آدرس ها</h2>
                </div>

                <div className='mt-5'>
                    <p className='text-slate-500 text-sm font-light'>آدرس‌های زیر برای ارسال فاکتور و صورت حساب استفاده خواهند شد.</p>
                </div>

                <StoreProvider>
                    <AddressDiv />
                </StoreProvider>
            </div>

        </div>
    )
}

export default page