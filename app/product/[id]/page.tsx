"use client"
import React from 'react'
import ProductPage from './components/ProductPage'

interface IProductProps {
    params: Promise<{ id: string }>;
    // searchParams: Promise<{}>
}

function page({ params }: IProductProps) {


    return (
        <div className='p-10 pt-40 md:pt-25 lg:pt-25 xl:pt-25'>

            <ProductPage params={params}/>

        </div>
    )
}

export default page