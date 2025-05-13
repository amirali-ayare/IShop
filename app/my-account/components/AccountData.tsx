'use client'
import { IUser } from '@/redux/UserProfileData'
import React from 'react'
import { useSelector } from 'react-redux'

function AccountData() {

    const user = useSelector((state: {user: IUser}) => state.user)

    const account_data = [
        {
            title: "نام و نام خانوادگی",
            data: user.name,
        },
        {
            title: "شماره همراه",
            data: user.phoneNumber,
        },
        {
            title: "پست الکترونیک",
            data: user.email,
        },
        {
            title: "شغل",
            data: user.job,
        },
        {
            title: "کدملی",
            data: user.nationalCode,
        },
        {
            title: "روش باز گرداندن وجه",
            data: "واریز به حساب بانکی",
        },
    ]

    return (
        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
            {
                account_data.map((item, index) => {
                    return (
                        <div key={index} className='flex items-center py-4 justify-between border-b-1 border-slate-300'>
                            <span className='text-slate-400 text-sm'>{item.title}</span>
                            <span className='text-sm font-bold text-slate-600'>{item.data}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AccountData