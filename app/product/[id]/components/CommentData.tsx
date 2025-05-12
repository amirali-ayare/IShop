'use client'
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react'

function CommentData() {

    const sidebarRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const limit = 2800;
            const scrollTop = window.scrollY;

            setIsSticky(scrollTop < limit);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={sidebarRef} className={clsx('transition-all duration-300', isSticky ? 'sticky top-45 flex flex-col items-center' : 'relative flex flex-col items-center')}>
            <h1 className='text-6xl font-extrabold text-slate-700 mb-4'>4.5</h1>
            <div>
                <i className='bx bxs-star text-yellow-500 text-lg'></i>
                <i className='bx bxs-star text-yellow-500 text-lg'></i>
                <i className='bx bxs-star text-yellow-500 text-lg'></i>
                <i className='bx bxs-star text-yellow-500 text-lg'></i>
                <i className='bx bxs-star text-slate-300 text-lg'></i>
            </div>
            <div>
                <p className='text-xs text-slate-500'>
                    تعداد امتیازها : 4
                </p>
            </div>

            <div className='flex flex-col gap-5 mt-8 w-[50%]'>
                <div>
                    <div className='flex items-center justify-between'>
                        <span className='text-green-600 text-xs'>%100 مثبت</span>
                        <span className='text-slate-400 text-xs'>4 نفر</span>
                    </div>
                    <div className='flex mt-2'>
                        <span className='py-[1px] bg-green-600 rounded-full w-full'></span>
                    </div>
                </div>

                <div>
                    <div className='flex items-center justify-between'>
                        <span className='text-yellow-600 text-xs'>%0 بی طرف</span>
                        <span className='text-slate-400 text-xs'>0 نفر</span>
                    </div>
                    <div className='flex mt-2'>
                        <span className='py-[1px] bg-slate-200 rounded-full w-full'></span>
                    </div>
                </div>

                <div>
                    <div className='flex items-center justify-between'>
                        <span className='text-red-600 text-xs'>%0 منفی</span>
                        <span className='text-slate-400 text-xs'>0 نفر</span>
                    </div>
                    <div className='flex mt-2'>
                        <span className='py-[1px] bg-slate-200 rounded-full w-full'></span>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default CommentData