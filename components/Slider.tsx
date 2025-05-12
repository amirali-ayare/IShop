"use client"
import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'
import slider1 from '../image/slider1.jpg'
import slider2 from '../image/slider2.jpg'
import slider3 from '../image/slider3.jpg'
import slider4 from '../image/slider4.jpg'

function Slider() {

    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
            <div className='mb-5'>
                <div className='px-5 pb-5'>
                    <div ref={sliderRef} className="keen-slider rounded-xl">
                        <div className="keen-slider__slide"><Image className='h-35 md:h-auto lg:h-auto xl:h-auto' src={slider1} alt='' /></div>
                        <div className="keen-slider__slide"><Image className='h-35 md:h-auto lg:h-auto xl:h-auto' src={slider2} alt='' /></div>
                        <div className="keen-slider__slide"><Image className='h-35 md:h-auto lg:h-auto xl:h-auto' src={slider3} alt='' /></div>
                        <div className="keen-slider__slide"><Image className='h-35 md:h-auto lg:h-auto xl:h-auto' src={slider4} alt='' /></div>
                    </div>
                </div>
            </div>
    )
}

export default Slider