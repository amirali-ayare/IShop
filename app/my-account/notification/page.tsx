import React from 'react'
import AccountBox from '../components/AccountBox'
import { StoreProvider } from '@/redux/StoreProvider'

function page() {
    return (
        <div className='pt-40 pb-20 px-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4'>
            <div className='col-span-1'>
                <StoreProvider>
                    <AccountBox />
                </StoreProvider>
            </div>

            <div className='col-span-3'>
                <div className='bg-orange-50 rounded-xl p-4 shadow-lg border-1 border-orange-100 text-slate-600 shadow-orange-100 text-sm font-light'>این یک اطلاعیه از طرف مدیریت است و از طریق بخش مدیریت سایت قابلیت اصلاح ، افزایش و حذف دارد .                </div>
            </div>
        </div>
    )
}

export default page