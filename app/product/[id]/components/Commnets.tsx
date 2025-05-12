import React from 'react'
import CommentData from './CommentData'
import CommentCard, { ICommentData } from './CommentCard'
import { IProducts } from '@/components/NewProducts'

function Commnets({ comments }: IProducts) {
    return (
        <div className='mt-10'>
            <div className='mb-5'><h1 className='text-slate-600 text-2xl font-extrabold'>امتیاز و دیدگاه کاربران</h1></div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>

                <div className='col-span-1'>
                    <CommentData />
                </div>


                <div className='col-span-2'>
                    {
                        comments && comments.map((item, index) => {
                            return <CommentCard {...item as ICommentData} key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Commnets