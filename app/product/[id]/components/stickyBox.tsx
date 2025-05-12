'use client'
import React from 'react'
import fire from '@/image/fire.png'
import Image from 'next/image'
import score from '@/image/score.jpg'
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { IProducts } from '@/components/NewProducts'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decrease, deleteFood, increase } from '@/redux/CartSlice'

export interface IProductStickyBox {
    item: object,
    SPrice: string,
    OPercent: number,
    id: string
}

function StickyBox({ OPercent, SPrice, id, item }: IProductStickyBox) {

    const sidebarRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const limit = 600;
            const scrollTop = window.scrollY;

            setIsSticky(scrollTop < limit);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const selectedProducts = useSelector((state: any) => state.ShopCart)
    const Dispatch = useDispatch();
    console.log(selectedProducts);
    

    const [isInCart, setIsInCart] = useState(false)
    const product = selectedProducts.find((item: any) => item.id === id);


    const CheckProduct = () => {
        if (product) {
            setIsInCart(true)
        }
        else {
            setIsInCart(false)
        }
    }

    useEffect(() => { 
        CheckProduct()
    }, [product])

    return (
        <div ref={sidebarRef} className={clsx('transition-all duration-300', isSticky ? 'sticky top-30 w-90 border-1 border-slate-300 rounded-xl p-5' : 'relative w-90 border-1 border-slate-300 rounded-xl p-5')}>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between items-center'>
                    <span className='text-slate-500 text-sm font-bold'>7 روز ضمانت بازگشت کالا</span>
                    <i className='bx bx-smile text text-green-500'></i>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-slate-500 text-sm font-bold'>ارسال تا 12 روز آینده</span>
                    <i className='bx bx-car text text-green-500'></i>
                </div>
            </div>

            <div className='flex flex-col mt-3'>
                <div className='border-b-1 py-3 border-slate-200 flex items-center'>
                    <Image src={fire} alt='fire' />
                    <p className='font-bold text-slate-700 text-xs mr-1'>
                        4040+ بازدید در یک هفته اخیر
                    </p>
                </div>
                <div className='border-b-1 py-3 border-slate-200 flex items-center'>
                    <Image src={score} alt='fire' className='w-[5%]' />
                    <p className='font-bold text-slate-700 text-xs mr-1'>
                        150
                        امتیاز
                        با خرید محصول دریافت میکنید
                    </p>
                </div>
            </div>

            <div className='mt-4'>
                {
                    isInCart ? (
                        <div className='w-full bg-slate-100 rounded-xl flex items-center justify-between p-2'>
                            <button onClick={() => Dispatch(increase(id))}  className='bg-white p-2 cursor-pointer text-slate-600 flex rounded-lg'><i className='bx bx-plus'></i></button>
                            <span className='text-slate-600 font-bold text-sm'>{product?.quantity}</span>
                            <div className='flex items-center gap-2'>
                                <button onClick={() => Dispatch(decrease(id))} className='bg-white p-2 cursor-pointer text-slate-600 flex rounded-lg'><i className='bx bx-minus'></i></button>
                                <button onClick={() => Dispatch(deleteFood(id))} className='bg-white p-2 cursor-pointer text-red-500 flex rounded-lg'><i className='bx bx-trash'></i></button>
                            </div>
                        </div>
                    ) : (
                        <button onClick={() => Dispatch(addToCart({ item, id }))} className='bg-rose-500 cursor-pointer text-white font-extrabold w-full p-4 rounded-xl'>افزودن به سبد خرید</button>
                    )
                }
            </div>

            <div dir='ltr'>
                {
                    OPercent !== 0 ? (
                        <div className='mt-5'>
                            <span className='bg-rose-500 px-1 text-white font-black rounded-lg shadow-lg shadow-rose-200'>
                                %
                                {OPercent}
                            </span>
                        </div>
                    ) : ('')
                }

                <div className='mt-1 flex items-center'>
                    <span className='text-xs mr-1 font-light'>تومان</span>
                    <span className='font-extrabold text-xl'>
                        {SPrice}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default StickyBox