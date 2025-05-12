"use client"
import { useKeenSlider } from 'keen-slider/react'
import React, { useEffect, useState } from 'react'
import logo1 from '../image/logo1.png'
import logo2 from '../image/logo2.png'
import logo3 from '../image/logo3.png'
import logo4 from '../image/logo4.png'
import logo5 from '../image/logo5.png'
import logo6 from '../image/logo6.png'
import logo8 from '../image/logo8.png'
import logo9 from '../image/logo9.png'
import logo10 from '../image/logo10.png'
import Image from 'next/image'

function Brands() {

    const [xlSpacing, setXlSpacing] = useState(0)
    const [smSpacing, setSmSpacing] = useState(0)
    const [lgSpacing, setLgSpacing] = useState(0)

    useEffect(() => {
        setXlSpacing(8)
        setSmSpacing(4)
        setLgSpacing(8)
    }, [])

    const logos = [
        {
            img: logo1
        },
        {
            img: logo2
        },
        {
            img: logo3
        },
        {
            img: logo4
        },
        {
            img: logo5
        },
        {
            img: logo6
        },
        {
            img: logo8
        },
        {
            img: logo9
        },
        {
            img: logo10
        }
    ]

    const [Xlref] = useKeenSlider<HTMLDivElement>({
        mode: "free",
        rtl: true,
        slides: {
            perView: 5,
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
            perView: 4,
            spacing: lgSpacing,
        },
    })

    return (
        <div className='px-5 py-5 pt-10'>
            <div className='border-t-1 border-slate-200 flex justify-between'>
                <span className='font-bold text-slate-700 text-xl md:text-2xl lg:text-2xl xl:text-2xl bg-white p-2 relative -top-7'>برندهای محبوب</span>
            </div>

            <div>

                <div className='w-full hidden lg:block xl:block'>
                    <div ref={Xlref} className="keen-slider py-3">
                        {
                            logos.map((item, index) => {
                                return (
                                    <div key={index} className='keen-slider__slide p-5 flex items-center justify-center rounded-2xl hover:bg-slate-100 duration-300'>
                                        <Image src={item.img} alt='logo' />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


                <div className='w-full block md:hidden lg:hidden xl:hidden'>
                    <div ref={Smref} className="keen-slider py-3">
                        {
                            logos.map((item, index) => {
                                return (
                                    <div key={index} className='keen-slider__slide p-5 flex items-center justify-center rounded-2xl hover:bg-slate-100 duration-300'>
                                        <Image src={item.img} alt='logo' />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='w-full hidden md:block lg:hidden'>
                    <div ref={Lgref} className="keen-slider py-3">
                        {
                            logos.map((item, index) => {
                                return (
                                    <div key={index} className='keen-slider__slide p-5 flex items-center justify-center rounded-2xl hover:bg-slate-100 duration-300'>
                                        <Image src={item.img} alt='logo' />
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

export default Brands