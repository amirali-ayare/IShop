import React from 'react'
import TopNav from './components/TopNav'
import TotalAmountBox from './components/totalAmountBox'
import { StoreProvider } from '@/redux/StoreProvider'
import CartList from './components/CartList'
import CartAmountNav from './components/CartAmountNav'


function page() {



    return (
        <div className='py-40 px-10'>
            <TopNav />

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-7'>

                <div className='col-span-2'>
                    <StoreProvider>
                        <CartAmountNav />
                        <CartList />
                    </StoreProvider>

                </div>


                <div className='col-span-1 flex gap-6 flex-col'>
                    <div className='flex justify-start'>
                        <h1 className='text-lg font-bold mb-0 text-slate-700'>مجموع کل سبد خرید</h1>
                    </div>

                    <div className='flex flex-col'>
                        <TotalAmountBox />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default page