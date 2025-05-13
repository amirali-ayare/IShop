'use client'
import React from 'react'
import { useSelector } from 'react-redux';
import { IProduct } from './CartAmountNav';

function PriceDiv() {

    const selectedProducts = useSelector((state: {ShopCart: IProduct[]}) => state.ShopCart)
    const totalPrice = selectedProducts.reduce((total: number, item: IProduct) => {
        return total + (item.quantity * item.price);
    }, 0);

    return (
        <div className='flex items-center justify-between border-b-1 border-slate-300 py-4'>
            <h5 className='text-sm font-bold text-slate-600'>قیمت کل</h5>
            <h5 className='text-sm font-bold text-slate-600'>{totalPrice} تومان</h5>
        </div>
    )
}

export default PriceDiv