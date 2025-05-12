import Image from 'next/image'
import React from 'react'
import ip from '@/image/iphone-example.png'

function FavoriteCard() {
    return (
        <div className='grid border-b-1 pb-5 border-slate-200 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 px-5'>
            <div className='flex justify-center'>
                <Image src={ip} alt='product' className='w-20' />
            </div>
            <div className='col-span-2 flex items-center justify-center'>
                <h3 className='text-slate-600 font-bold text-center'>دسته بازی پلی استیشن سونی مدل Dalsense wirlesese</h3>
            </div>
            <div className='flex flex-row md:flex-col lg:flex-col xl:flex-col gap-5 items-end justify-center'>
                <div className='flex gap-2'>
                    <button className='flex p-2.5 rounded-lg text-gray-500 shadow-md duration-300 shadow-gray-50 hover:shadow-gray-300 text-xl bg-gray-100'><i className='bx bx-trash-alt'></i></button>
                    <button className='flex p-2.5 rounded-lg text-white shadow-md duration-300 shadow-blue-50 hover:shadow-blue-300 text-xl bg-blue-900'><i className='bx bx-cart-download'></i></button>
                </div>
                <div>
                    <h3 className='text-slate-600 font-bold'>35,770,000 <span className='font-light text-sm'>تومان</span></h3>
                </div>
            </div>
        </div>
    )
}

export default FavoriteCard