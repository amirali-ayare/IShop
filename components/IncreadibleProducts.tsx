"use client"
import React, { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import new1 from '../image/new1.png'
import new2 from '../image/new2.png'
import new3 from '../image/new3.png'
import new4 from '../image/new4.png'
import new5 from '../image/new5.jpg'
import new6 from '../image/new6.jpg'
import NoShadowCard from './NoShadowCard'
import { IProducts } from './NewProducts'

function IncreadibleProducts() {

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



    const [amazingProducts, setAmazingProducts] = useState<IProducts[]>([])
    useEffect(() => {
        const getAmazingProducts = async () => {
            const res = await fetch("https://jsonhost.onrender.com/product");
            const data = await res.json();
            const filtered = data.filter((item: any) => item.types.includes("amazing"))
            setAmazingProducts(filtered)
        }
        getAmazingProducts();
    }, [])


    return (
        <div className='px-5 py-5 pt-10 bg-rose-500'>
            <div className='flex justify-between'>
                <span className='font-bold text-slate-700 text-xl md:text-2xl lg:text-2xl xl:text-2xl text-white p-2 relative -top-7'>محصولات شگفت‌انگیز</span>
                <span className='font-bold cursor-pointer text-slate-600 text-sm text-white p-2 relative -top-6 flex items-center'>
                    مشاهده همه
                    <i className='bx bx-chevron-left p-1 bg-white text-slate-500 text-lg mr-2 rounded-tr-lg rounded-br-lg rounded-tl-3xl rounded-bl-3xl hover:text-black duration-300'></i>
                </span>
            </div>

            <div>

                <div className='w-full hidden lg:block xl:block'>
                    <div ref={Xlref} className="keen-slider py-3">
                        {
                            amazingProducts.map((item, index) => {
                                return <NoShadowCard {...item} key={index} />
                            })
                        }
                    </div>
                </div>


                <div className='w-full block md:hidden lg:hidden xl:hidden'>
                    <div ref={Smref} className="keen-slider py-3">
                        {
                            amazingProducts.map((item, index) => {
                                return <NoShadowCard {...item} key={index} />
                            })
                        }
                    </div>
                </div>

                <div className='w-full hidden md:block lg:hidden'>
                    <div ref={Lgref} className="keen-slider py-3">
                        {
                            amazingProducts.map((item, index) => {
                                return <NoShadowCard {...item} key={index} />
                            })
                        }
                    </div>
                </div>


            </div>

        </div>
    )
}

export default IncreadibleProducts