'use client'
import React from 'react'
import { useSelector } from 'react-redux'

function CartAmountNav() {

    const selectedProducts = useSelector((state: any) => state.ShopCart)
    const quantitys = selectedProducts.reduce((total: number, item: any) => {
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