import Image from 'next/image'
import React from 'react'
import img1 from '../image/bestseller1.jpg'
import img2 from '../image/bestseller2.jpg'
import img3 from '../image/bestseller3.jpg'

function BestSeller() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 p-5'>
            <div><Image src={img1} alt='image' className='rounded-2xl' /></div>
            <div><Image src={img2} alt='image' className='rounded-2xl' /></div>
            <div><Image src={img3} alt='image' className='rounded-2xl' /></div>
        </div>
    )
}

export default BestSeller