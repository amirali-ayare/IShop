import React from 'react'

function TopNav2() {

    const topNavData = [
        {
            icon: <i className='bx bx-cart-alt'></i>,
            title: "سبد خرید",
            class: "rounded-2xl p-3 flex shadow-lg shadow-slate-200 bg-white text-slate-300 text-xl",
            textClass: "text-xs mt-2 text-slate-300"
        },
        {
            icon: <i className='bx bx-map'></i>,
            title: "اطلاعات",
            class: "rounded-2xl p-3 flex bg-rose-500 text-white text-xl",
            textClass: "text-xs mt-2"
        },
        {
            icon: <i className='bx bx-credit-card-alt'></i>,
            title: "پرداخت",
            class: "rounded-2xl p-3 flex shadow-lg shadow-slate-200 bg-white text-slate-300 text-xl",
            textClass: "text-xs mt-2 text-slate-300"
        },
        {
            icon: <i className='bx bx-detail'></i>,
            title: "تکمیل",
            class: "rounded-2xl p-3 flex shadow-lg shadow-slate-200 bg-white text-slate-300 text-xl",
            textClass: "text-xs mt-2 text-slate-300"
        },
    ]

    return (
        <div className='flex w-full items-center justify-center'>
            <span className='h-[.6px] bg-slate-200 mb-5 w-70 md:w-90 lg:w-90 xl:w-90 absolute' style={{ zIndex: "-1" }}></span>
            <div className='flex items-center justify-between w-90'>

                {
                    topNavData.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col items-center justify-center'>
                                <div className={`${item.class}`}>
                                    {item.icon}
                                </div>
                                <h4 className={`${item.textClass}`}>{item.title}</h4>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default TopNav2