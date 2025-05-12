import Image from 'next/image'
import React from 'react'
import blog1 from '../image/blog1.jpg'
import blog2 from '../image/blog2.jpg'

function Blogs() {

    const blogs = [
        {
            img: blog1,
            title: 'دلایلی برای خرید گوشی ناتینگ فون',
            desc: 'دلایل خرید گوشی ۱ Nothing Phone بسیار قانع‌کننده‌ هستند، با توجه به نوع طراحی پیشرو، سخت‌افزار قدرتمند و قیمت مناسب، گوشی...',
            date: '13 تیر 1403',
        },
        {
            img: blog2,
            title: 'نقد و بررسی اندروید باکس نت باکس موبوادیشن',
            desc: 'در دنیای پیشرفته فناوری امروز، لپ تاپ‌ها نقشی اساسی در زندگی روزمره و حرفه‌ای ما ایفا کرده و انتخاب یک لپ تاپ مناسب...',
            date: '5 مهر 1403',
        }
    ]

    return (
        <div className='px-5 py-5 pt-10'>

            <div className='border-t-1 border-slate-200 flex justify-between'>
                <span className='font-bold text-slate-700 text-xl md:text-2xl lg:text-2xl xl:text-2xl bg-white p-2 relative -top-7'>وبلاگ</span>
                <span className='font-bold cursor-pointer text-slate-600 text-sm bg-white p-2 relative -top-6 flex items-center'>
                    مشاهده همه
                    <i className='bx bx-chevron-left p-1 bg-slate-200 text-white text-lg mr-2 rounded-tr-lg rounded-br-lg rounded-tl-3xl rounded-bl-3xl hover:text-black duration-300'></i>
                </span>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4'>

                <div id='bgblog' className='w-full h-70 rounded-2xl text-white'>
                    <div className='w-full h-full blog-text-img flex flex-col justify-end p-5 rounded-2xl'>
                        <div><h2 className='font-bold text-xl'>رکورد پیشرفت هوش مصنوعی شکست!</h2></div>

                        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 mt-3'>
                            <div className='flex items-center'>
                                <i className='bx bx-user ml-1'></i>
                                <span className='font-thin text-sm'>مدیر سایت</span>
                            </div>

                            <div className='flex items-center'>
                                <i className='bx bx-calendar ml-1'></i>
                                <span className='font-thin text-sm'>22 اسفند 1403</span>
                            </div>

                            <div className='flex items-center'>
                                <i className='bx bx-comment ml-1'></i>
                                <span className='font-thin text-sm'>3 نظر</span>
                            </div>

                            <div className='flex items-center'>
                                <i className='bx bx-time ml-1'></i>
                                <span className='font-thin text-sm'>15 دقیقه</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-1 gap-9'>

                    {
                        blogs.map((item , index) => {
                            return (
                                <div className='flex gap-4' key={index}>
                                    <div className='w-[30%]'>
                                        <Image src={item.img} alt='blog' className='rounded-2xl h-full' />
                                    </div>
                                    <div className='w-[70%]'>
                                        <h1 className='font-bold'>{item.title}</h1>
                                        <p className='text-sm font-light text-gray-500 mt-2'>
                                            {item.desc}
                                        </p>
                                        <button className='flex items-center gap-2 mt-2 hover:text-rose-700 duration-300 font-light'>
                                            مطالعه
                                            <i className='bx bx-arrow-back text-sm'></i>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Blogs