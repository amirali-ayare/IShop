"use client"
import { useKeenSlider } from 'keen-slider/react';
import new1 from '../image/new1.png'
import new2 from '../image/new2.png'
import new3 from '../image/new3.png'
import new4 from '../image/new4.png'
import new5 from '../image/new5.jpg'
import new6 from '../image/new6.jpg'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { IProducts } from './NewProducts';

function MostSell() {

    const mostSellProducts = [
        {
            img: new1,
            name: 'گوشی مدل ایفون پرومکس دو سیم کارته',
            price: '20,000,000'
        },
        {
            img: new2,
            name: 'گوشی مدل ایفون پرومکس دو سیم کارته',
            price: '50,000,000'
        },
        {
            img: new3,
            name: 'گوشی مدل ایفون پرومکس دو سیم کارته',
            price: '34,000,000'
        },
        {
            img: new4,
            name: 'گوشی مدل ایفون پرومکس دو سیم کارته',
            price: '23,400,000'
        },
        {
            img: new5,
            name: 'گوشی مدل ایفون پرومکس دو سیم کارته',
            price: '1,000,000'
        },
        {
            img: new6,
            name: 'گوشی مدل ایفون پرومکس دو سیم کارته',
            price: '900,000'
        },
    ]

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

    const [mostSold, setMostSold] = useState<IProducts[]>([])
    useEffect(() => {
        const getMostSellProducts = async () => {
            const res = await fetch("https://jsonhost.onrender.com/product");
            const data = await res.json();
            const filtered = data.filter((item: any) => item.types.includes("most_sell"))
            setMostSold(filtered)
        }
        getMostSellProducts();
    }, [])

    return (
        <div className='px-5 py-5 pt-10'>
            <div className='border-t-1 border-slate-200 flex justify-between'>
                <span className='font-bold text-slate-700 text-xl md:text-2xl lg:text-2xl xl:text-2xl bg-white p-2 relative -top-7'>پرفروش ترین ها</span>
                <span className='font-bold cursor-pointer text-slate-600 text-sm bg-white p-2 relative -top-6 flex items-center'>
                    مشاهده همه
                    <i className='bx bx-chevron-left p-1 bg-slate-200 text-white text-lg mr-2 rounded-tr-lg rounded-br-lg rounded-tl-3xl rounded-bl-3xl hover:text-black duration-300'></i>
                </span>
            </div>

            <div>

                <div className='w-full hidden lg:block xl:block'>
                    <div ref={Xlref} className="keen-slider py-3">
                        {
                            mostSold.map((item, index) => {
                                return <ProductCard {...item} key={index} />
                            })
                        }
                    </div>
                </div>


                <div className='w-full block md:hidden lg:hidden xl:hidden'>
                    <div ref={Smref} className="keen-slider py-3">
                        {
                            mostSold.map((item, index) => {
                                return <ProductCard {...item} key={index} />
                            })
                        }
                    </div>
                </div>

                <div className='w-full hidden md:block lg:hidden'>
                    <div ref={Lgref} className="keen-slider py-3">
                        {
                            mostSold.map((item, index) => {
                                return <ProductCard {...item} key={index} />
                            })
                        }
                    </div>
                </div>


            </div>

        </div>
    )
}

export default MostSell