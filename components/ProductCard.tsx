"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { IProducts } from './NewProducts'
import Link from 'next/link';

export interface IProductProps {
    img: StaticImageData;
    name: string;
    price: string;
}

function ProductCard({ main_image, name, string_price, id }: IProducts) {

    return (
        <div className='keen-slider__slide bg-white p-5 border-1 border-slate-200 shadow-lg shadow-slate-100 rounded-xl hover:bg-slate-100 hover:shadow-none duration-300'>
            <Link href={`/product/${id}`}>
                <div className='flex justify-center'>
                    <Image src={main_image} width={200} height={400} className='w-40 ' alt="product" />
                </div>
                <div className='mt-3'><h1 className='text-base text-slate-700 font-bold'>{name}</h1></div>
                <div className='flex items-center justify-between mt-5'>
                    <button className='bg-rose-500 flex items-center text-xl text-white p-2 rounded-lg'><i className='bx bx-cart-add'></i></button>
                    <span className='font-bold text-slate-600 text-sm'>{string_price} تومان</span>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard