'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'
import { uploadPhoneNumber } from '@/redux/UserProfileData'

function SignPhoneForm() {

    const schema = yup.object().shape({
        phoneNumber: yup.string().min(11, 'شماره خود را درست وارد کنید').max(11, 'شماره خود را درست وارد کنید').required('لطفا شماره موبایل خود را وارد کنید')
    })

    const Dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const [phoneNumber, setPhoneNumber] = useState('')

    const navigate = useRouter();
    const onFormSubmit = (data: any) => {
        Dispatch(uploadPhoneNumber(phoneNumber))
        navigate.push('/sign-form')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <input {...register("phoneNumber")} type="text" className='w-full outline-none border-1 border-slate-300 p-3 rounded-xl' onChange={(e) => setPhoneNumber(e.target.value)} placeholder='09012345678'/>
                {
                    errors.phoneNumber && (
                        <h5 className='text-red-600 text-xs mt-1'>{errors.phoneNumber?.message}</h5>
                    )
                }
                <button className='p-3 hover:bg-rose-700 active:bg-rose-700 duration-300 w-full mt-3 bg-rose-500 text-white rounded-xl'>تایید</button>
            </form>
        </div>
    )
}

export default SignPhoneForm