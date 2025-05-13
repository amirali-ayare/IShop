"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IProductStickyBox } from './stickyBox';
import { addToCart, decrease, deleteFood, increase } from '@/redux/CartSlice';
import { IProduct } from '@/app/cart/components/CartAmountNav';

function ProductQuantity({ id, item }: IProductStickyBox) {

    const selectedProducts = useSelector((state: {ShopCart: IProduct[]}) => state.ShopCart)
    const Dispatch = useDispatch();

    const [isInCart, setIsInCart] = useState(false)
    const product = selectedProducts.find((item: IProduct) => item.id === id);


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
        <div className='md:hidden lg:hidden xl:hidden fixed bottom-0 left-0 w-full p-3 bg-white flex items-center shadow-md shadow-slate-200'>
            {
                isInCart ? (
                    <div className='w-full bg-slate-100 rounded-xl flex items-center justify-between p-2'>
                        <button onClick={() => Dispatch(increase(id))} className='bg-white p-2 text-slate-600 flex rounded-lg'><i className='bx bx-plus'></i></button>
                        <span className='text-slate-600 font-bold text-sm'>{product?.quantity}</span>
                        <div className='flex items-center gap-2'>
                            <button onClick={() => Dispatch(decrease(id))} className='bg-white p-2 text-slate-600 flex rounded-lg'><i className='bx bx-minus'></i></button>
                            <button onClick={() => Dispatch(deleteFood(id))} className='bg-white p-2 text-red-500 flex rounded-lg'><i className='bx bx-trash'></i></button>
                        </div>
                    </div>
                ) : (
                    <div className='w-full p-2'>
                        <button onClick={() => Dispatch(addToCart({ item, id }))} className='w-full p-2 font-bold text-white bg-rose-500 rounded-lg'>افزودن به سبد خرید</button>
                    </div>
                )
            }
        </div>
    )
}

export default ProductQuantity