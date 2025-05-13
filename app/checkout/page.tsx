import React from 'react'
import ShopCard from './components/ShopCard'
import TopNav2 from '../cart/components/TopNav2'
import { StoreProvider } from '@/redux/StoreProvider'
import CheckoutInputs from './components/CheckoutInputs';
import DeliveryDate from './components/DeliveryDate';

function page() {


    return (
        <div className='pt-40 px-10 pb-20'>
            <TopNav2 />

            <div className='mt-10 flex flex-col gap-5'>
                <div><h2 className='text-slate-700 text-xl font-bold'>تکمیل سفارش</h2></div>

                <div>
                    <div className='border-1 border-slate-200 p-5 rounded-xl flex flex-col gap-3 md:flex-row lg:flex-row xl:flex-row items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <h3 className='font-bold text-slate-600'>کد تخفیف</h3>
                            <p className='text-xs text-slate-400 hidden md:block lg:block xl:block'>
                                در صورت داشتن کد تخفیف یا کد اعتبار، آن را در باکس مربوطه وارد کنید
                            </p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input type="text" className='p-4 border-slate-200 border-1 rounded-lg text-sm' placeholder='کد تخفیف:' />
                            <button className='bg-white text-slate-400 text-sm shadow-xl cursor-pointer shadow-zinc-100 p-4 px-6 rounded-lg'>اعمال</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-10'>
                <div className='col-span-2'>
                    <div>
                        <div><h2 className='font-bold text-slate-600 text-lg'>اطلاعات تحویل گیرنده</h2></div>
                        <StoreProvider>
                            <CheckoutInputs />
                        </StoreProvider>
                    </div>

                    <div className='py-10 border-t-1 border-slate-200 mt-10'>
                        <div>
                            <h2 className='text-lg text-slate-700 font-bold flex items-center gap-2'>
                                <i className='bx bx-time text-2xl'></i>
                                زمان ارسال
                            </h2>
                        </div>
                        <StoreProvider>
                            <DeliveryDate />
                        </StoreProvider>
                    </div>
                </div>

                <div className='col-span-1 flex flex-col gap-5'>
                    <div><h2 className='font-bold text-slate-600 text-lg'>مجموع کل سبد خرید</h2></div>

                    <div className='w-full h-full'>
                        <StoreProvider>
                            <ShopCard />
                        </StoreProvider>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page