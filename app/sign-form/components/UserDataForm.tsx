'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'
import { signUp, uploadName, uploadPassword } from '@/redux/UserProfileData'

function UserDataForm() {

    const schema = yup.object().shape({
        name: yup.string().min(5, 'شماره خود را درست وارد کنید').required('لطفا نام خود را وارد کنید'),
        password: yup.string().min(4).required('لطفا یک رمز برای حساب خود تعیین کنید'),
    })

    const Dispatch = useDispatch();
    const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) })
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useRouter();
    const onFormSubmit = () => {
        Dispatch(uploadName(name))
        Dispatch(uploadPassword(password))
        Dispatch(signUp())
        navigate.push('/')
    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)} className='w-80 flex flex-col gap-2'>
                <input type="text" {...register('name')} className='w-full text-sm outline-none border-1 border-slate-300 p-3 rounded-xl' placeholder='نام کامل' onChange={(e)=>setName(e.target.value)}/>
                <input type="text" {...register('password')} className='w-full text-sm outline-none border-1 border-slate-300 p-3 rounded-xl' placeholder='رمز عبور' onChange={(e)=>setPassword(e.target.value)}/>
                <button className='p-3 hover:bg-rose-700 active:bg-rose-700 duration-300 w-full mt-3 bg-rose-500 text-white rounded-xl'>تایید</button>
            </form>
        </div>
    )
}

export default UserDataForm