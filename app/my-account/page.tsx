import React from 'react'
import AccountBox from './components/AccountBox'
import Image from 'next/image'
import iphone from '@/image/iphone-example.png'
import { StoreProvider } from '@/redux/StoreProvider'
import AccountData from './components/AccountData'

function page() {


    return (
        <div className='pt-40 px-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4'>
            <div className='col-span-1'>
                <StoreProvider>
                    <AccountBox />
                </StoreProvider>
            </div>

            <div className='col-span-3'>
                <div className='flex items-center gap-3 text-blue-800 py-5 border-b-1 border-slate-300'>
                    <i className='bx bx-grid-alt text-2xl'></i>
                    <h2 className='text-lg font-bold'>پیشخوان</h2>
                </div>

                <StoreProvider>
                    <AccountData />
                </StoreProvider>


            </div>
        </div>
    )
}

export default page