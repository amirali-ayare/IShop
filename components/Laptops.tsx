"use client"
import React, { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import poster from '../image/laptop-poster.jpg'
import Image from 'next/image'
import { IProducts } from './NewProducts'
import ProductCard from './ProductCard'


function Laptops() {

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
        mode: "free",
        rtl: true,
        slides: {
            perView: 4,
            spacing: xlSpacing,
        },
    })

    const [Smref] = useKeenSlider<HTMLDivElement>({
        mode: "free",
        rtl: true,
        slides: {
            perView: 2,
            spacing: smSpacing,
        },
    })

    const [Lgref] = useKeenSlider<HTMLDivElement>({
        mode: "free",
        rtl: true,
        slides: {
            perView: 3,
            spacing: lgSpacing,
        },
    })

    const [LaptopData, setLaptopData] = useState<IProducts[]>([])
    useEffect(() => {
        const getLaptopData = async () => {
            const res = await fetch("https://jsonhost.onrender.com/product");
            const data = await res.json();
            const filtered = data.filter((item: any) => item.types.includes("laptop"))
            setLaptopData(filtered)
        }
        getLaptopData();
    }, [])

    return (
        <div className='px-5 py-5 pt-10'>
            <div className='border-t-1 border-slate-200 flex justify-between'>
                <span className='font-bold text-slate-700 text-xl md:text-2xl lg:text-2xl xl:text-2xl bg-white p-2 relative -top-7'>لپتاپ</span>
                <span className='font-bold cursor-pointer text-slate-600 text-sm bg-white p-2 relative -top-6 flex items-center'>
                    مشاهده همه
                    <i className='bx bx-chevron-left p-1 bg-slate-200 text-white text-lg mr-2 rounded-tr-lg rounded-br-lg rounded-tl-3xl rounded-bl-3xl hover:text-black duration-300'></i>
                </span>
            </div>

            <div className='flex items-center justify-between gap-5 w-full'>

                {<div className='w-[78%] hidden lg:block xl:block'>
                    <div ref={Xlref} className="keen-slider py-3">
                        {
                            LaptopData.map((item, index) => {
                                return <ProductCard {...item} key={index} />
                            })
                        }
                    </div>
                </div>}

                {<div className='w-full block md:hidden lg:hidden xl:hidden'>
                    <div ref={Smref} className="keen-slider py-3">
                        {
                            LaptopData.map((item, index) => {
                                return <ProductCard {...item} key={index} />
                            })
                        }
                    </div>
                </div>}

                {<div className='w-full hidden md:block lg:hidden'>
                    <div ref={Lgref} className="keen-slider py-3">
                        {
                            LaptopData.map((item, index) => {
                                return <ProductCard {...item} key={index} />
                            })
                        }
                    </div>
                </div>}


                {<div className='w-[22%] hidden xl:block lg:block'>
                    <Image src={poster} className='object-cover w-full h-full rounded-xl shadow-lg shadow-violet-300' alt='poster' />
                </div>}


            </div>

        </div>
    )
}

export default Laptops