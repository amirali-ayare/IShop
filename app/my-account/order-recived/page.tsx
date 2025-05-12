import TopNav3 from '@/components/TopNav3'
import { StoreProvider } from '@/redux/StoreProvider'
import React from 'react'
import OrderData from './components/OrderData'

function page() {
    return (
        <div className='py-40 px-10'>
            <TopNav3 />

            <div className='grid grid-cols-1 mt-7 items-center justify-center'>
                <StoreProvider>
                    <OrderData />
                </StoreProvider>
            </div>

        </div>
    )
}

export default page