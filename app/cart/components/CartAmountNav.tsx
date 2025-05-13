'use client'
import { Ifeatures } from '@/app/product/[id]/components/ProductPage'
import React from 'react'
import { useSelector } from 'react-redux'

export interface IProduct {
    id: string,
    quantity: number,
    name: string,
    english_name: string,
    rating: number,
    info: string,
    images: string[],
    main_image: string,
    price: number,
    offer_percent: number,
    string_price: string,
    types: string[],
    features: Ifeatures[],
    comments: object[]
}

function CartAmountNav() {

    const selectedProducts = useSelector((state: {ShopCart: IProduct[]}) => state.ShopCart)
    const quantitys = selectedProducts.reduce((total: number, item: IProduct) => {
        return total + item.quantity;
    }, 0);

    return (
        <div className='flex items-center gap-3'>
            <span className='px-4 text-white text-sm font-black rounded-full bg-rose-500 shadow-lg shadow-rose-300'>{quantitys}</span>
            <h1 className='text-2xl font-bold text-slate-700'>سبد خرید</h1>
        </div>
    )
}  

export default CartAmountNav