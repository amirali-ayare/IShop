'use client'
import React from 'react'
import ProductCart from './productCart'
import { useDispatch, useSelector } from 'react-redux';

function CartList() {

    const selectedProducts = useSelector((state: any) => state.ShopCart)

    return (
        <div className='grid grid-cols-1 gap-5 mt-5'>
            {
                selectedProducts.map((item: any, index: number) => {
                    return <ProductCart {...item} key={index} />
                })
            }
        </div>
    )
}

export default CartList