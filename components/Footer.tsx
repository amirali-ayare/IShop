import Image from 'next/image'
import React from 'react'
import neshan1 from '../image/neshan1.png'
import neshan2 from '../image/neshan2.png'
import neshan3 from '../image/neshan3.png'

function Footer() {

    const FooterData = [
        {
            header: 'دسترسی های سریع',
            li: ['صفحه اصلی', 'فروشگاه', 'تماس با ما', 'درباره ما', 'سبد خرید', 'مجله خرید']
        },
        {
            header: 'دسته بندی ها',
            li: ['پاوربانک', 'موبایل', 'ساعت هوشمند', 'کنسول بازی', 'لپ تاپ', 'تبلت']
        },
        {
            header: 'برندهای مطرح',
            li: ['ال جی', 'شیائومی', 'اسنوا', 'اپل', 'دوو', 'پرسیل']
        }
    ]

    return (
        <div className='bg-slate-50 p-5 py-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5'>

            {
                FooterData.map((item , index) => {
                    return (
                        <div key={index}>
                            <h2 className='text-slate-400 font-bold'>{item.header}</h2>
                            <ul className='mt-5'>
                                {item.li.map((li , index)=>{
                                    return <li key={index} className='font-light text-slate-500 cursor-pointer text-sm my-3 hover:text-rose-600 duration-300'>{li}</li>
                                })}
                            </ul>
                        </div>
                    )
                })
            }

            <div>
                <h2 className='text-slate-400 font-bold'>نشان ها</h2>
                <div className='flex items-center gap-5 mt-5'>
                    <Image src={neshan1} alt='logo' />
                    <Image src={neshan2} alt='logo' />
                    <Image src={neshan3} alt='logo' />
                </div>
                <div className='mt-8'>
                    <h2 className='text-slate-400 font-bold'>ما در شبکه های اجتماعی</h2>
                    <div className='flex items-center justify-between text-2xl text-slate-400 mt-3'>
                        <i className='bx bxl-whatsapp'></i>
                        <i className='bx bxl-instagram'></i>
                        <i className='bx bx-paper-plane'></i>
                        <i className='bx bxl-twitter'></i>
                        <i className='bx bxl-facebook'></i>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer