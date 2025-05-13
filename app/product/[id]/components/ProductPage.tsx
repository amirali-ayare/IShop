import React, { useEffect, useState } from 'react'
import StickyBox from './stickyBox'
import { StoreProvider } from '@/redux/StoreProvider'
import Image from 'next/image'
import { IProducts } from '@/components/NewProducts'
import DottedAdv from './DottedAdv'
import Commnets from './Commnets'
import ProductQuantity from './ProductQuantity'
import free_ersal from '@/image/free-ersal.jpg'
import snap_pay from '@/image/snappay.png'
import { IProduct } from '@/app/cart/components/CartAmountNav'

type prop = {
    params: Promise<{ id: string }>;
}

export interface Ifeatures {
    title: string,
    data: string
}

function ProductPage({ params }: prop) {

    const [choosenProduct, setChoosenProduct] = useState<IProduct | null>(null)
    const [choosenImage, setChoosenImage] = useState<string | null>(null)

    useEffect(() => {
        const getChoosenProduct = async () => {
            const { id } = await params;
            // const result = await fetch(`https://jsonhost.onrender.com/product/${id}`)
            const result = await fetch(`https://ayareapi.liara.run/product/${id}`)
            const data: IProduct = await result.json()
            setChoosenProduct(data)
        }
        getChoosenProduct();
    }, [])

    useEffect(() => {
        if (choosenProduct?.main_image) {
            setChoosenImage(choosenProduct?.main_image)
        }
    }, [choosenProduct])

    return (
        <>

            <div>
                <h1 className='text-xl text-slate-700 font-bold'>{choosenProduct?.name}</h1>
                <h3 className='text-xs text-slate-400 mt-2'>{choosenProduct?.english_name}</h3>
            </div>

            <div className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-8'>

                <div>
                    <div className='flex flex-col lg:flex-row xl:flex-row gap-4'>
                        <div className='flex items-center justify-center flex-wrap lg:flex-col xl:flex-col gap-7.5 text-xl text-slate-500'>
                            <span className='flex flex-col items-center'>
                                <i className='bx bxs-star text-yellow-500'></i>
                                <p className='text-sm'>{choosenProduct?.rating}</p>
                            </span>
                            <span><i className='bx bx-heart'></i></span>
                            <span><i className='bx bx-share-alt'></i></span>
                            <span><i className='bx bx-analyse'></i></span>
                            <span><i className='bx bx-spreadsheet'></i></span>
                            <span><i className='bx bx-film'></i></span>
                            <span></span>
                        </div>

                        <div>
                            <div className='border-1 border-slate-300 rounded-3xl'>
                                {
                                    choosenImage && (
                                        <Image
                                            src={choosenImage}
                                            width={300} height={300}
                                            alt='image' className='p-5' />
                                    )
                                }
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                {
                                    choosenProduct?.images && (
                                        choosenProduct?.images.map((item, index) => {
                                            return <Image
                                                key={index} src={item} alt='img'
                                                width={30} height={30}
                                                onClick={() => setChoosenImage(item)}
                                                className='rounded-2xl cursor-pointer border-1 border-slate-200 p-1 w-10 opacity-50 hover:opacity-100' />
                                        })
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            choosenProduct?.features.map((item: Ifeatures, index) => {
                                return (
                                    <div key={index} className='rounded-xl border-1 border-slate-200 p-3'>
                                        <h5 className='text-slate-500 text-xs font-bold'>{item.title}</h5>
                                        <h5 className='text-slate-800 text-sm font-bold mt-3'>{item.data}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='border-t-1 border-slate-200 mt-8'>
                        <span className='text-gray-400 text-xs font-bold p-2 bg-white relative -top-4'>مشاهده ویژگی های محصول</span>
                        <div>
                            <p className='text-slate-500 text-xs text-justify leading-5'>
                                {choosenProduct?.info}
                            </p>
                        </div>
                    </div>

                    <div className='border-t-1 border-slate-200 mt-8'>
                        <span className='text-gray-400 text-xs font-bold p-2 bg-white relative -top-4'>مشاهده توضیحات محصول</span>
                        <div>
                            <Image src={free_ersal} alt='free' />
                        </div>
                        <div>
                            <div className='bg-slate-100 rounded-xl flex p-4 gap-5 mt-5'>
                                <div className='flex flex-col gap-3'>
                                    <h6 className='text-slate-800 text-xs font-bold'>خرید قسطی با اسنپ پی</h6>
                                    <h3 className='text-slate-800 font-bold'>خرید قسطی این کالا تا حداکثر 4 قسط</h3>
                                    <button className='p-2 bg-blue-500 text-xs rounded-lg text-white cursor-pointer'>مشاهده راهنما</button>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <Image src={snap_pay} alt='snap-pay' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='px-5 hidden md:block lg:block xl:block'>
                    <StoreProvider>
                        <StickyBox item={choosenProduct} SPrice={choosenProduct?.string_price} OPercent={choosenProduct?.offer_percent} id={choosenProduct?.id} />
                    </StoreProvider>
                </div>

                <DottedAdv />
                <Commnets {...choosenProduct as IProducts} />

                <StoreProvider>
                    <ProductQuantity item={choosenProduct!} SPrice={choosenProduct?.string_price} OPercent={choosenProduct?.offer_percent} id={choosenProduct?.id} />
                </StoreProvider>
            </div>

        </>
    )
}

export default ProductPage