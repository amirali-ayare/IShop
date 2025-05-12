import React from 'react'
import poster from '../image/gamers-pkg.jpg'
import Image from 'next/image'
import gamer1 from '../image/gamer1.png'
import gamer2 from '../image/gamer2.jpg'
import gamer3 from '../image/gamer3.png'
import gamer4 from '../image/gamer4.jpg'

function Gamerspkg() {
    return (
        <div className='p-5 grid grid-cols-1 xl:grid-cols-2 gap-5 my-4'>

            <div>
                <Image src={poster} alt='poster' className='rounded-2xl' />
            </div>

            <div className='flex flex-col gap-2'>
                <div><h3 className='text-xl text-slate-700 font-extrabold'>پکیج گیمرها</h3></div>
                <div>
                    <p className='font-normal text-slate-600 text-sm'>
                        این پکیج شامل تخفیفی عالی برای خرید چهار محصول با هم است ، برای کسانی که عاشق بازی هستند …
                    </p>
                </div>

                <div className='grid grid-cols-2 mt-3'>
                    <div className='flex flex-col items-center'>
                        <h3 className='font-light text-slate-400 text-sm'>نام پکیج</h3>
                        <h3 className='font-bold text-slate-700 text-sm mt-1'>پکیج گیمرها</h3>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h3 className='font-light text-slate-400 text-sm'>تعداد محصولات پکیج</h3>
                        <h3 className='font-bold text-slate-700 text-sm mt-1'>4 عدد</h3>
                    </div>
                </div>

                <div className='grid grid-cols-2 mt-3'>
                    <div className='flex flex-col items-center'>
                        <h3 className='font-light text-slate-400 text-sm'>زمان باقی مانده</h3>
                        <h3 className='font-bold text-slate-700 text-sm mt-1'>4 روز</h3>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h3 className='font-light text-slate-400 text-sm'>خرید</h3>
                        <h3 className='font-bold text-slate-700 text-sm mt-1'>تک و باهم</h3>
                    </div>
                </div>
                
                <div className='grid grid-cols-4 gap-5 lg:gap-10 xl:gap-10 mt-4 px-3'>
                    <div className='p-3 hover:bg-slate-50 duration-300 rounded-lg border-1 border-slate-200 flex justify-center'><Image src={gamer1} className='w-15' alt='gamer' /></div>
                    <div className='p-3 hover:bg-slate-50 duration-300 rounded-lg border-1 border-slate-200 flex justify-center'><Image src={gamer2} className='w-15' alt='gamer' /></div>
                    <div className='p-3 hover:bg-slate-50 duration-300 rounded-lg border-1 border-slate-200 flex justify-center'><Image src={gamer3} className='w-15' alt='gamer' /></div>
                    <div className='p-3 hover:bg-slate-50 duration-300 rounded-lg border-1 border-slate-200 flex justify-center'><Image src={gamer4} className='w-15' alt='gamer' /></div>
                </div>

                <div className='flex justify-between mt-2 px-3'>
                    <div><h3 className='text-slate-400 text-sm'><span className='text-slate-500 text-lg line-through'>26,961,000</span> تومان</h3></div>
                    <div><h3 className='font-extrabold'>22,600,000 تومان</h3></div>
                </div>

                <div>
                    <button className='bg-rose-500 text-white font-bold hover:shadow-lg shadow-rose-200 duration-300 flex items-center justify-center rounded-lg w-full py-3'>
                        میخرم
                        <i className='bx bx-shopping-bag text-xl mr-2'></i>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Gamerspkg