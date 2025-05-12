'use client'
import Image from 'next/image'
import React from 'react'
import ProfileImage from '@/image/profile-image.png'
import Link from 'next/link'
import { useSelector } from 'react-redux'

function AccountBox() {

    const user = useSelector((state:any) => state.user)

    const account_links = [
        {
            text: "پیشخوان",
            icon: <i className='bx bx-grid-alt text-xl'></i>,
            link: "/my-account"
        },
        {
            text: "آدرس",
            icon: <i className='bx bx-map text-xl'></i>,
            link: "/my-account/edit-address"
        },
        {
            text: "حساب کاربری",
            icon: <i className='bx bx-user text-xl'></i>,
            link: "/my-account/edit-account"
        },
        {
            text: "اطلاعیه ها",
            icon: <i className='bx bx-bell text-xl'></i>,
            link: "/my-account/notification"
        },
    ]

    return (
        <div className='px-4 flex flex-col items-center'>
            <div><Image src={ProfileImage} alt='profile' /></div>

            <div className='flex flex-col items-center mt-5 gap-1 pb-5 border-b-1 w-[70%] border-slate-200'>
                <h3 className='text-slate-800 font-bold'>{user.name}</h3>
                <h2 className='text-sm text-slate-400'>{user.phoneNumber}</h2>
                <h2 className='text-xs text-slate-400'>{user.email}</h2>
            </div>

            <div className='w-[70%]'>
                {
                    account_links.map((item , index) => {
                        return (
                            <Link href={item.link} key={index}>
                                <div className='py-4 duration-300 cursor-pointer border-b-1 border-slate-200 flex items-center justify-between hover:text-blue-800 text-slate-400'>
                                    <div className='flex gap-2 items-center'>
                                        {item.icon}
                                        <span className='font-'>{item.text}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <i className='bx bx-chevron-left font-bold text-xl'></i>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default AccountBox