"use client"
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import mobile from '../image/mobile-circle.jpg'
import watch from '../image/watch-circle.jpg'
import ghab from '../image/ghab-circle.jpg'
import powerbank from '../image/powerbank-circle.jpg'
import console from '../image/console-circle.jpg'
import tablet from '../image/tablet-circle.jpg'
import speaker from '../image/speaker-circle.jpg'
import laptop from '../image/laptop-circle.jpg'
import headphone from '../image/headphone-circle.jpg'
import pc from '../image/pc-circle.jpg'

function PopularProducts() {

    const [xlSpacing, setXlSpacing] = useState(0)
    const [smSpacing, setSmSpacing] = useState(0)
    const [lgSpacing, setLgSpacing] = useState(0)

    useEffect(() => {
            setXlSpacing(8)
            setSmSpacing(8)
            setLgSpacing(8)
    }, [])


    const [Xlref] = useKeenSlider<HTMLDivElement>({
        mode: "free",
        rtl: true,
        slides: {
            perView: 8,
            spacing: xlSpacing,
        },
    })

    const [Smref] = useKeenSlider<HTMLDivElement>({
        mode: "free",
        rtl: true,
        slides: {
            perView: 3,
            spacing: smSpacing,
        },
    })

    const [Lgref] = useKeenSlider<HTMLDivElement>({
        mode: "free",
        rtl: true,
        slides: {
            perView: 6,
            spacing: lgSpacing,
        },
    })

    const Category = [
        {
            img: mobile,
            text: 'موبایل'
        },
        {
            img: watch,
            text: 'ساعت هوشمند'
        },
        {
            img: ghab,
            text: 'محافظ گوشی'
        },
        {
            img: powerbank,
            text: 'پاوربانک'
        },
        {
            img: console,
            text: 'کنسول بازی'
        },
        {
            img: tablet,
            text: 'تبلت'
        },
        {
            img: speaker,
            text: 'اسپیکر'
        },
        {
            img: laptop,
            text: 'لپ تاپ'
        },
        {
            img: headphone,
            text: 'هدفون'
        },
        {
            img: pc,
            text: 'کامپیوتر'
        },
    ]


    return (
        <div className='px-5 pb-5'>
            <div className='border-t-1 border-slate-200'>
                <span className='font-bold text-slate-700 text-2xl bg-white p-2 relative -top-5'>دسته بندی های محبوب</span>
            </div>

            <div>

                <div className='w-full hidden lg:block xl:block'>
                    <div ref={Xlref} className="keen-slider py-3">
                        {
                            Category.map((item, index) => {
                                return (
                                    <div key={index} className='keen-slider__slide flex flex-col justify-center items-center shadow-md py-2 rounded-lg'>
                                        <Image src={item.img} alt='story' className='rounded-full w-20 p-1' />
                                        <h4 className='text-sm font-bold text-slate-700'>{item.text}</h4>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


                <div className='w-full block md:hidden lg:hidden xl:hidden'>
                    <div ref={Smref} className="keen-slider py-3">
                        {
                            Category.map((item, index) => {
                                return (
                                    <div key={index} className='keen-slider__slide flex flex-col justify-center items-center shadow-md py-2 rounded-lg'>
                                        <Image src={item.img} alt='story' className='rounded-full w-20 p-1' />
                                        <h4 className='text-xs font-bold text-slate-700'>{item.text}</h4>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='w-full hidden md:block lg:hidden'>
                    <div ref={Lgref} className="keen-slider py-3">
                        {
                            Category.map((item, index) => {
                                return (
                                    <div key={index} className='keen-slider__slide flex flex-col justify-center items-center shadow-md py-2 rounded-lg'>
                                        <Image src={item.img} alt='story' className='rounded-full w-20 p-1' />
                                        <h4 className='text-xs font-bold text-slate-700'>{item.text}</h4>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PopularProducts