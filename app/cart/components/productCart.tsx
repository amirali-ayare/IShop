'use client'
import Image from 'next/image'
import React from 'react'
import { IProducts } from '@/components/NewProducts'
import { decrease, increase } from '@/redux/CartSlice'
import { useDispatch } from 'react-redux'

function ProductCart({main_image, string_price, name, quantity, id}:IProducts) {

    const Dispatch = useDispatch();

    return (
        <div className='w-full grid items-center gap-5 grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 p-5 border-1 border-slate-300 rounded-xl'>
            <div>
                <Image src={main_image} width={100} height={100} alt='product' className='w-15'/>
            </div>

            <div className='xl:col-span-2 lg:col-span-2 md:col-span-2'>
                <h1 className='font-bold text-sm text-slate-700'>{name}</h1>
            </div>

            <div>
                <div className='flex justify-between p-2 rounded-full border-1 border-slate-300'>
                    <button onClick={() => Dispatch(increase(id))} className='flex place-items-center cursor-pointer'><i className='bx bx-plus'></i></button>
                    <span>{quantity}</span>
                    <button onClick={() => Dispatch(decrease(id))} className='flex place-items-center cursor-pointer'><i className='bx bx-minus'></i></button>
                </div>
            </div>


            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-slate-600 text-md'>{string_price}</h1>
                <h1 className='font-bold text-slate-600 text-xs'>تومان</h1>
            </div>

        </div>
    )
}

export default ProductCart