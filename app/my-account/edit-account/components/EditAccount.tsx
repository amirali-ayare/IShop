'use client'
import { uploadBirthday, uploadEmail, uploadJob, uploadName, uploadNationalCode, uploadPhoneNumber, uploadTelephone } from '@/redux/UserProfileData';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

function EditAccount() {

    const user = useSelector((state: any) => state.user)
    const Dispatch = useDispatch();

    const [name, setName] = useState(user.name)
    const [nationalCode, setNationalCode] = useState(user.nationalCode)
    const [birthDay, setBirthDay] = useState(user.birthday)
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)
    const [email, setEmail] = useState(user.email)
    const [job, setJob] = useState(user.job)
    const [telephone, setTelephone] = useState(user.telephone)


    const schema = yup.object().shape({
        name: yup.string().min(5, 'حداقل 5 کاراکتر وارد کنید'),
        nationalCode: yup.string().min(10, 'کد ملی خود را درست وارد کنید'),
        phoneNumber: yup.string().min(11, 'شماره تلفن باید 11 رقم باشد').max(11, 'شماره تلفن باید 11 رقم باشد'),
        telephone: yup.string(),
        email: yup.string(),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const onFormSubmit = (data: any) => {
        Dispatch(uploadName(name))
        Dispatch(uploadNationalCode(nationalCode))
        Dispatch(uploadBirthday(birthDay))
        Dispatch(uploadPhoneNumber(phoneNumber))
        Dispatch(uploadTelephone(telephone))
        Dispatch(uploadEmail(email))
        Dispatch(uploadJob(job))
    }
    console.log(user);

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5'>
            <div>
                <h5 className='text-slate-500 text-lg'>نام</h5>
                <input {...register('name')} type="text" value={name} onChange={(e) => setName(e.target.value)} className='p-2 w-full bg-slate-100 text-sm mt-2 rounded-lg outline-none' placeholder='نام...' />
                {
                    errors.name && (
                        <h5 className='text-red-600 text-xs mt-1'>{errors.name?.message}</h5>
                    )
                }
            </div>
            <div>
                <h5 className='text-slate-500 text-lg'>کدملی</h5>
                <input {...register('nationalCode')} type="text" value={nationalCode} onChange={(e) => setNationalCode(e.target.value)} className='p-2 w-full bg-slate-100 text-sm mt-2 rounded-lg outline-none' placeholder='کد ملی....' />
                {
                    errors.nationalCode && (
                        <h5 className='text-red-600 text-xs mt-1'>{errors.nationalCode?.message}</h5>
                    )
                }
            </div>
            <div>
                <h5 className='text-slate-500 text-lg'>تاریخ تولد</h5>
                <input type="text" value={birthDay} onChange={(e) => setBirthDay(e.target.value)} className='p-2 w-full bg-slate-100 text-sm mt-2 rounded-lg outline-none' placeholder='1399/4/5' />
            </div>
            <div>
                <h5 className='text-slate-500 text-lg'>تلفن همراه</h5>
                <input {...register('phoneNumber')} type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='p-2 w-full bg-slate-100 text-sm mt-2 rounded-lg outline-none' placeholder='شماره همراه...' />
                {
                    errors.phoneNumber && (
                        <h5 className='text-red-600 text-xs mt-1'>{errors.phoneNumber?.message}</h5>
                    )
                }
            </div>
            <div>
                <h5 className='text-slate-500 text-lg'>شماره ثابت</h5>
                <input {...register('telephone')} type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} className='p-2 w-full bg-slate-100 text-sm mt-2 rounded-lg outline-none' placeholder='شماره ثابت...' />
                {
                    errors.telephone && (
                        <h5 className='text-red-600 text-xs mt-1'>{errors.telephone?.message}</h5>
                    )
                }
            </div>
            <div>
                <h5 className='text-slate-500 text-lg'>ایمیل</h5>
                <input {...register('email')} type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 w-full bg-slate-100 text-sm mt-2 rounded-lg outline-none' placeholder='ایمیل...' />
                {
                    errors.email && (
                        <h5 className='text-red-600 text-xs mt-1'>{errors.email?.message}</h5>
                    )
                }
            </div>
            <div>
                <h5 className='text-slate-500 text-lg'>شغل</h5>
                <select onChange={(e) => setJob(e.target.value)} className='p-2 w-full bg-slate-100 text-sm mt-2 rounded-lg outline-none'>
                    <option>انتخاب  کنید</option>
                    <option>ورزشکار</option>
                    <option>روانشناس</option>
                    <option>تاریخ/باستان شناس</option>
                    <option>کارمند</option>
                    <option>کارگر</option>
                    <option>راهنمای تور</option>
                    <option>کار آزاد</option>
                </select>
            </div>
            <div></div>
            <div>
                <button type='submit' className='bg-blue-800 text-white py-2 px-5 cursor-pointer rounded-lg shadow-lg shadow-blue-200'>ذخیره</button>
            </div>
        </form>
    )
}

export default EditAccount