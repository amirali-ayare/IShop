"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import ProductCard from './ProductCard'

export interface IProducts {
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
    features: object[],
    comments: object[]
}

function NewProducts() {

    const [xlSpacing, setXlSpacing] = useState(0)
    const [smSpacing, setSmSpacing] = useState(0)
    const [lgSpacing, setLgSpacing] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setXlSpacing(8)
            setSmSpacing(4)
            setLgSpacing(8)
        }, 5000);
    }, [])
    const [Xlref] = useKeenSlider<HTMLDivElement>({
        mode: "free-snap",
        rtl: true,
        slides: {
            perView: 5,
            spacing: xlSpacing,
        },
    })

    const [Smref] = useKeenSlider<HTMLDivElement>({
        mode: "free-snap",
        rtl: true,
        slides: {
            perView: 2,
            spacing: smSpacing,
        },
    })

    const [Lgref] = useKeenSlider<HTMLDivElement>({
        mode: "free-snap",
        rtl: true,
        slides: {
            perView: 3,
            spacing: lgSpacing,
        },
    })


    const [newProducts, setNewProducts] = useState<IProducts[]>([])
    useEffect(() => {
        const getNewProducts = async () => {
            const res = await fetch("https://jsonhost.onrender.com/product");
            // const res = await fetch("https://peakmovie.ir/products/api/");
            const data = await res.json();
            const filtered = data.filter((item: any) => item.types.includes("new"))
            console.log(filtered);
            setNewProducts(filtered)
        }
        getNewProducts();
    }, [])


    return (
        <div className='px-5 py-5 pt-10'>
            <div className='border-t-1 border-slate-200 flex justify-between'>
                <span className='font-bold text-slate-700 text-xl md:text-2xl lg:text-2xl xl:text-2xl bg-white p-2 relative -top-7'>محصولات جدید</span>
                <span className='font-bold cursor-pointer text-slate-600 text-sm bg-white p-2 relative -top-6 flex items-center'>
                    مشاهده همه
                    <i className='bx bx-chevron-left p-1 bg-slate-200 text-white text-lg mr-2 rounded-tr-lg rounded-br-lg rounded-tl-3xl rounded-bl-3xl hover:text-black duration-300'></i>
                </span>
            </div>

            <div>

                <div className='w-full hidden lg:block xl:block'>
                    <div ref={Xlref} className="keen-slider py-3">
                        {
                            newProducts.map((item, index) => {
                                return <ProductCard {...item} key={index} />
                            })
                        }
                    </div>
                </div>


                <div className='w-full block md:hidden lg:hidden xl:hidden'>
                    <div ref={Smref} className="keen-slider py-3">
                        {
                            newProducts.map((item, index) => {
                                return <ProductCard {...item} key={index} />
                            })
                        }
                    </div>
                </div>

                <div className='w-full hidden md:block lg:hidden'>
                    <div ref={Lgref} className="keen-slider py-3">
                        {
                            newProducts.map((item, index) => {
                                return <ProductCard {...item} key={index} />
                            })
                        }
                    </div>
                </div>


            </div>

        </div>
    )
}

export default NewProducts