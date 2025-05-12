import React from 'react'
import AccountBox from '../components/AccountBox'
import ip from '@/image/iphone-example.png'
import Image from 'next/image'
import { StoreProvider } from '@/redux/StoreProvider'
import FavoriteCard from './components/FavoriteCard'

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
                    <i className='bx bx-heart text-2xl'></i>
                    <h2 className='text-lg font-bold'>علاقه مندی ها</h2>
                </div>

                <div className='grid grid-cols-1 gap-5 mt-5'>
                    <FavoriteCard />
                </div>
            </div>
        </div>
    )
}

export default page