'use client'
import { setDeliveryDay, setDeliveryTime } from '@/redux/ReserveData';
import moment from 'moment-jalaali';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function DeliveryDate() {

    const date = new Date
    const jDate = moment();
    const currentDay = parseInt(jDate.format('jD'))
    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
    };
    const persianMonth = date.toLocaleDateString('fa-IR', options);
    const deliveryDay = [
        currentDay,
        currentDay + 1,
        currentDay + 2,
        currentDay + 3
    ]
    const deliveryTime = [
        {
            text: 'ساعت 9 تا 12',
            time: '9 تا 12'
        },
        {
            text: 'ساعت 12 تا 14',
            time: '12 تا 14'
        },
        {
            text: 'ساعت 14 تا 16',
            time: '14 تا 16'
        },
        {
            text: 'ساعت 16 تا 18',
            time: '16 تا 18'
        },
        {
            text: 'ساعت 18 تا 20',
            time: '18 تا 20'
        },
    ]

    const reserve = useSelector((state: any) => state.reserveData)
    const Dispatch = useDispatch();

    const boxClass = 'py-3 px-6 text-sm font-bold text-slate-600 cursor-pointer rounded-xl flex items-center justify-center border-1 border-slate-200 shadow-[0_3px_0_0_rgba(0,0,0,0.1)]'
    const activeBoxClass = 'py-3 px-6 text-sm bg-gray-200 font-bold text-slate-600 cursor-pointer rounded-xl flex items-center justify-center border-1 border-slate-200 shadow-[0_3px_0_0_rgba(0,0,0,0.1)]'

    return (
        <div>
            <div className='flex flex-wrap items-center gap-4 mt-5'>
                {
                    deliveryDay.map((item) => {
                        return (
                            <div onClick={() => Dispatch(setDeliveryDay(`${item} ${persianMonth}`))} key={item} className={reserve.deliveryDay === `${item} ${persianMonth}` ? activeBoxClass : boxClass}>
                                {item} {persianMonth}
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex flex-wrap items-center gap-4 mt-10'>
                {
                    deliveryTime.map((item, index) => {
                        return (
                            <div onClick={() => Dispatch(setDeliveryTime(item.time))} key={index} className={reserve.deliveryTime === item.time ? activeBoxClass : boxClass}>
                                {item.text}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DeliveryDate