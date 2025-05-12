"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../image/logo.jpg'
import Link from 'next/link'
import { StoreProvider } from '@/redux/StoreProvider'
import NavbarButtons from './NavbarButtons'

function Navbar() {

    const links = [
        {
            text: 'صفحه اصلی',
            link: '/'
        },
        {
            text: 'فروشگاه',
            link: '/'
        },
        {
            text: 'تماس با ما',
            link: '/'
        },
        {
            text: 'درباره ما',
            link: '/'
        },
        {
            text: 'ورود و ثبت نام',
            link: '/'
        },
        {
            text: 'حساب کاربری من',
            link: '/'
        },
        {
            text: 'سبد خرید',
            link: '/'
        }
    ]

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <div className='fixed bg-white w-full py-5 px-5 lg:px-10 xl:px-10 gap-5 shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2' style={{ zIndex: '9999999999999' }}>
            <div className='flex items-center justify-between'>
                {<span onClick={() => setOpenMenu(true)} className='shadow-md md:hidden lg:hidden xl:hidden flex items-center justify-center text-2xl rounded-md p-2 text-slate-600'><i className='bx bx-menu-alt-right'></i></span>}
                <Link href={'/'}><Image src={logo} alt='logo' className='w-30' /></Link>
            </div>

            <div className='flex items-center justify-end'>
                <StoreProvider>
                    <NavbarButtons />
                </StoreProvider>
            </div>


            <div id='mobileMenu' className={openMenu ? 'w-full h-screen bg-white absolute p-5 lg:hidden xl:hidden opacity-95' : 'hidden'}>
                <div className='w-full flex items-center justify-between'>
                    <Image src={logo} alt='logo' className='w-30' />
                    <span onClick={() => setOpenMenu(false)} className='text-xl p-3 flex rounded-lg bg-slate-200'><i className='bx bx-x'></i></span>
                </div>

                <div className='mt-10'>
                    {
                        links.map((item, index) => {
                            return (
                                <Link key={index} href={`${item.link}`}><div className='py-4 font-bold text-slate-600 border-b-1 border-slate-200'>{item.text}</div></Link>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default Navbar