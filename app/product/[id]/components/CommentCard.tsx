import React from 'react'

export interface ICommentData {
    number: string,
    likes: number,
    dislikes: number,
    title: string,
    p: string
}

function CommentCard({number, likes, dislikes, title, p}:ICommentData) {
    return (
        <div className='border-b-1 border-slate-200 py-5'>
            <div className='flex items-center'>
                <h4 className='text-slate-700 font-bold text-sm'>{number}</h4>
                <span className='px-2 mr-3 bg-rose-500 text-white text-sm rounded-xl'>خریدار</span>
            </div>

            <div className='flex items-center justify-between mt-2'>
                <div>
                    <i className='bx bxs-star text-yellow-500 text-lg'></i>
                    <i className='bx bxs-star text-yellow-500 text-lg'></i>
                    <i className='bx bxs-star text-yellow-500 text-lg'></i>
                    <i className='bx bxs-star text-yellow-500 text-lg'></i>
                    <i className='bx bxs-star text-yellow-500 text-lg'></i>
                </div>

                <div className='flex gap-2'>
                    <button className='py-2 px-3 bg-slate-100 text-slate-600 flex items-center gap-2 rounded-xl'>
                        {likes}
                        <i className='bx bx-like'></i>
                    </button>
                    <button className='py-2 px-3 bg-slate-100 text-slate-600 flex items-center gap-2 rounded-xl'>
                        {dislikes}
                        <i className='bx bx-dislike'></i>
                    </button>
                    <button className='py-2 px-3 bg-slate-100 text-slate-600 flex items-center gap-2 rounded-xl'>
                        <i className='bx bx-dots-vertical-rounded'></i>
                    </button>
                </div>
            </div>

            <div>
                <h1 className='text-lg font-bold text-slate-700'>{title}</h1>
                <p className='text-xs text-justify text-slate-400 mt-4 leading-5'>
                    {p}
                </p>
            </div>

        </div>
    )
}

export default CommentCard