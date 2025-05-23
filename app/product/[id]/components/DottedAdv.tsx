import React from 'react'
import ic1 from '@/image/ic1.svg'
import ic2 from '@/image/ic2.svg'
import ic3 from '@/image/ic3.svg'
import ic4 from '@/image/ic4.svg'
import Image from 'next/image'

function DottedAdv() {

    const AdvData = [
        {
            img: ic1,
            title: 'ارسال سریع',
            p: 'امکان تحویل اکسپرس'
        },
        {
            img: ic2,
            title: 'پرداخت',
            p: 'امکان پرداخت در محل'
        },
        {
            img: ic3,
            title: 'ضمانت',
            p: '7 روز ضمانت بازگشت کالا'
        },
        {
            img: ic4,
            title: 'اصالت',
            p: 'اصالت و اورجینال کالا'
        },
    ]

    return (
        <div className='grid gap-5 col-span-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 border-t-2 border-b-2 border-dotted border-slate-200 p-5 mt-10'>
            {
                AdvData.map((item, index) => {
                    return (
                        <div className='flex gap-3 items-center justify-center' key={index}>
                            <div>
                                <h4 className='text-sm text-slate-700 font-bold'>{item.title}</h4>
                                <h4 className='text-xs text-slate-500 font-normal'>{item.p}</h4>
                            </div>
                            <div className='flex items-center'>
                                <Image src={item.img} alt='icon' />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DottedAdv