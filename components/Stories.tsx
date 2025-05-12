"use client"
import React, { useEffect, useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSlider } from "keen-slider/react"
import story1 from '../image/story1.jpg';
import story2 from '../image/story2.jpg';
import story3 from '../image/story3.jpg';
import story4 from '../image/story4.jpg';
import story5 from '../image/story5.jpg';
import story6 from '../image/story6.jpg';
import story7 from '../image/story7.jpg';
import story8 from '../image/story8.jpg';
import story9 from '../image/story9.jpg';
import story10 from '../image/story10.jpg';
import story11 from '../image/story11.jpg';
import story12 from '../image/story12.jpg';
import story13 from '../image/story13.jpg';
import story14 from '../image/story14.jpg';
import Image from 'next/image'
import storyPerview from '../image/storyPerview.jpg'


function Stories() {

    const Stories = [
        {
            img: story1,
            title: 'بهترین هدیه'
        },
        {
            img: story2,
            title: 'بهترین دوربین'
        },
        {
            img: story3,
            title: 'بهترین پرچمدار'
        },
        {
            img: story4,
            title: 'تقویت سیستم'
        },
        {
            img: story5,
            title: 'نبرد پرچم داران'
        },
        {
            img: story6,
            title: 'قهوه ساز کپسول'
        },
        {
            img: story7,
            title: 'اپل جادوگر'
        },
        {
            img: story8,
            title: 'زیبای خفته'
        },
        {
            img: story9,
            title: 'هوش مصنوعی'
        },
        {
            img: story10,
            title: 'ردیاب دویستی'
        },
        {
            img: story11,
            title: 'تخت همه کاره'
        },
        {
            img: story12,
            title: 'ماسک موشون'
        },
        {
            img: story13,
            title: 'بهترین اسپیکر'
        },
        {
            img: story14,
            title: 'محصول خاص'
        },
    ]

    const [xlSpacing, setXlSpacing] = useState(0)
    const [smSpacing, setSmSpacing] = useState(0)
    const [lgSpacing, setLgSpacing] = useState(0)
    const [openStory, setOpenStory] = useState(false)
    const [openWarning, setOpenWarning] = useState(false)

    useEffect(() => {
        setXlSpacing(8)
        setSmSpacing(8)
        setLgSpacing(8)
        setOpenWarning(true)
    }, [])



    const [Xlref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free",
        rtl: true,
        slides: {
            perView: 10,
            spacing: xlSpacing,
        },
    })

    const [Smref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free",
        rtl: true,
        slides: {
            perView: 3,
            spacing: smSpacing,
        },
    })

    const [Lgref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free",
        rtl: true,
        slides: {
            perView: 6,
            spacing: lgSpacing,
        },
    })


    return (
        <div className='px-5 pb-5 pt-40 md:pt-25 lg:pt-25 xl:pt-25 flex justify-center' style={{ zIndex: '1' }}>

            <div className={openStory ? 'fixed backdrop-blur w-screen h-screen inset-0 flex items-center justify-center' : 'hidden'} style={{zIndex:'99999999999999'}}>
                <div className='w-60 bg-white rounded-2xl'>
                    <div className='flex items-center justify-between p-3'>
                        <i onClick={()=>setOpenStory(false)} className='bx bx-x text-xl cursor-pointer'></i>
                        <h3 className='text-slate-600 font-bold text-sm'>استوری تست</h3>
                    </div>
                    <Image src={storyPerview} alt='storyPerview' className='rounded-2xl'/>
                </div>
            </div>

            <div className={openWarning ? 'fixed backdrop-blur w-screen h-screen inset-0 flex items-center justify-center' : 'hidden'} style={{zIndex:'99999999999999'}}>
                <div className='w-60 bg-white rounded-2xl p-3 flex flex-col items-center'>
                    <h6 className='font-medium text-slate-500 text-center'>
                        سلام رفیق, API رو render.com گذاشتیم و حدود ده بیست ثانیه طول میکشه تا اطلاعات فرستاده شه. لطفا یکم صبور باش و بعد اینکه اطلاعات اومد یک بار صفحه رو Reload کن!
                    </h6>
                    <button onClick={()=>setOpenWarning(false)} className='p-3 cursor-pointer mt-5 text-white font-bold rounded-lg bg-teal-400'>حله یکم صبر میکنم</button>
                </div>
            </div>


            <div className='w-full hidden lg:block xl:block'>
                <div ref={Xlref} className="keen-slider">
                    {
                        Stories.map((item, index) => {
                            return (
                                <div key={index} className='keen-slider__slide flex flex-col justify-center items-center'>
                                    <Image onClick={()=>setOpenStory(true)} src={item.img} alt='story' className='rounded-full cursor-pointer w-20 p-1 border-2 border-rose-500' />
                                    <h4 className='text-sm font-bold text-slate-700'>{item.title}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div className='w-full block md:hidden lg:hidden xl:hidden'>
                <div ref={Smref} className="keen-slider">
                    {
                        Stories.map((item, index) => {
                            return (
                                <div key={index} className='keen-slider__slide flex flex-col justify-center items-center'>
                                    <Image onClick={()=>setOpenStory(true)} src={item.img} alt='story' className='rounded-full cursor-pointer w-20 p-1 border-2 border-rose-500' />
                                    <h4 className='text-xs font-bold text-slate-700'>{item.title}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full hidden md:block lg:hidden'>
                <div ref={Lgref} className="keen-slider">
                    {
                        Stories.map((item, index) => {
                            return (
                                <div key={index} className='keen-slider__slide flex flex-col justify-center items-center'>
                                    <Image onClick={()=>setOpenStory(true)} src={item.img} alt='story' className='rounded-full cursor-pointer w-20 p-1 border-2 border-rose-500' />
                                    <h4 className='text-xs font-bold text-slate-700'>{item.title}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default Stories