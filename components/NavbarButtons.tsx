'use client'
import { IUser } from '@/redux/UserProfileData'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

function NavbarButtons() {

    const user = useSelector((state: {user: IUser}) => state.user)

    return (
        <div className='flex gap-3'>

            {
                user.signed ? (
                    <Link href={'/my-account'}>
                        <button className='shadow hover:bg-slate-100 duration-300 p-2 rounded-md flex items-center gap-3 text-slate-600 cursor-pointer'>
                            <i className='bx bx-user text-lg'></i>
                            {
                                <span className='hidden text-sm md:block lg:block xl:block'>
                                    {user.name}
                                </span>
                            }
                        </button>
                    </Link>
                ) : (
                    <Link href={'/signup'}>
                        <button className='shadow hover:bg-slate-100 duration-300 p-2 rounded-md flex items-center gap-3 text-slate-600 cursor-pointer'>
                            <i className='bx bx-user text-lg'></i>
                            {
                                <span className='hidden text-sm md:block lg:block xl:block'>
                                    ثبت نام
                                </span>
                            }
                        </button>
                    </Link>
                )
            }


            <Link href={'/cart'}>
                <button className='bg-rose-500 text-white font-bold shadow-xs shadow-rose-600 p-2.5 rounded-md flex items-center gap-3 text-slate-600 cursor-pointer'>
                    <i className='bx bx-shopping-bag'></i>
                </button>
            </Link>
        </div>

    )
}

export default NavbarButtons