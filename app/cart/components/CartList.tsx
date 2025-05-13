'use client'
import React from 'react'
import ProductCart from './productCart'
import { useSelector } from 'react-redux';
import { IProduct } from './CartAmountNav';

function CartList() {

    const selectedProducts = useSelector((state: {ShopCart: IProduct[]}) => state.ShopCart)

    return (
        <div className='grid grid-cols-1 gap-5 mt-5'>
            {
                selectedProducts.map((item: IProduct, index: number) => {
                    return <ProductCart {...item} key={index} />
                })
            }
        </div>
    )
}

export default CartList